// Background removal for the portrait, using macOS Vision (macOS 14+). No downloads, runs locally.
// Usage: swift scripts/cutout.swift pic1.jpeg pic.png
// Writes a PNG with the same pixel size and framing as the input, background transparent.
import AppKit
import CoreImage
import Vision

let args = CommandLine.arguments
guard args.count == 3 else { fatalError("usage: cutout.swift <input> <output.png>") }
let input = URL(fileURLWithPath: args[1])
let output = URL(fileURLWithPath: args[2])

guard let image = CIImage(contentsOf: input, options: [.applyOrientationProperty: true]) else { fatalError("cannot read \(input.path)") }
let handler = VNImageRequestHandler(ciImage: image)
let request = VNGenerateForegroundInstanceMaskRequest()
try handler.perform([request])
guard let result = request.results?.first else { fatalError("no subject found") }
let buffer = try result.generateMaskedImage(ofInstances: result.allInstances, from: handler, croppedToInstancesExtent: false)

let ctx = CIContext()
let masked = CIImage(cvPixelBuffer: buffer)
guard let cg = ctx.createCGImage(masked, from: masked.extent) else { fatalError("render failed") }
let rep = NSBitmapImageRep(cgImage: cg)
guard let png = rep.representation(using: .png, properties: [:]) else { fatalError("png encode failed") }
try png.write(to: output)
print("cutout written: \(output.path) (\(cg.width)x\(cg.height))")

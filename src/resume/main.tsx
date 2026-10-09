import { createRoot } from 'react-dom/client';
import ResumeDocument from './ResumeDocument';

// Print-only page used by scripts/build-resume.mjs to generate the downloadable PDF.
createRoot(document.getElementById('resume')!).render(<ResumeDocument />);

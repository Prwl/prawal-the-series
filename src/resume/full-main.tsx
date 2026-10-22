import { createRoot } from 'react-dom/client';
import FullResume from './FullResume';

// Print-only page used by scripts/build-full-resume.mjs to generate the job-application PDF.
createRoot(document.getElementById('resume')!).render(<FullResume />);

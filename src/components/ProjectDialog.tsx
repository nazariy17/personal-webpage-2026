import { useEffect, useRef } from 'react';
import type { Project } from '../content';

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!project || !ref.current) return;
    const dialog = ref.current;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { dialog.close(); document.body.style.overflow = previousOverflow; };
  }, [project]);
  return <dialog ref={ref} onClose={onClose} aria-labelledby="project-title" onClick={event => {
    if (!ref.current || event.target !== ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) ref.current.close();
  }}>
    <button className="dialog-close" onClick={() => ref.current?.close()} aria-label="Close project">×</button>
    <p className="eyebrow">SELECTED WORK / COMING SOON</p><h2 id="project-title">{project?.title}</h2><p>{project?.description}</p>
    <button className="button" onClick={() => ref.current?.close()}>Back to projects</button>
  </dialog>;
}

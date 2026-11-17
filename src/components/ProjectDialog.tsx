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
    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (trigger instanceof HTMLElement && trigger.isConnected) trigger.focus();
    };
  }, [project]);

  return <dialog ref={ref} onClose={onClose} aria-labelledby="project-title" aria-describedby="project-description" onClick={event => {
    if (!ref.current || event.target !== ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) ref.current.close();
  }}>
    <button className="dialog-close" onClick={() => ref.current?.close()} aria-label="Close project">×</button>
    <p className="eyebrow">{project?.category} / {project?.status}</p>
    <h2 id="project-title">{project?.title}</h2>
    <h3>Current scope</h3><p id="project-description">{project?.description}</p>
    <h3>Next steps</h3><p>{project?.nextSteps}</p>
    <ul className="tag-list" aria-label="Project focus">{project?.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    <button className="button" onClick={() => ref.current?.close()}>Back to projects <span aria-hidden="true">↗</span></button>
  </dialog>;
}

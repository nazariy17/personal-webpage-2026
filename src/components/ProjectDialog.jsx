import { useEffect, useRef } from 'react';
export default function ProjectDialog({ project, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!project) return;
    const dialog = ref.current;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { dialog.close(); document.body.style.overflow = previousOverflow; };
  }, [project]);
  return <dialog ref={ref} onClose={onClose} aria-labelledby="project-title" onClick={event => {
    if (event.target !== ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) ref.current.close();
  }}>
    <button className="dialog-close" onClick={() => ref.current.close()} aria-label="Close project">×</button>
    <p className="eyebrow">SELECTED WORK / COMING SOON</p><h2 id="project-title">{project?.title}</h2><p>{project?.description}</p>
    <button className="button" onClick={() => ref.current.close()}>Back to projects</button>
  </dialog>;
}

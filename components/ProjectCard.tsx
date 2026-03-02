import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/lib/types';
import MagneticHover from './MagneticHover';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const tagStyle =
        project.tagColor === 'teal'
            ? { background: 'var(--teal)', color: '#fff' }
            : project.tagColor === 'red'
                ? { background: 'var(--red)', color: '#fff' }
                : { background: 'var(--lime)', color: 'var(--black)' };

    return (
        <Link href={`/projects/${project.slug}`} className="p-card-v2-link" aria-label={`View project: ${project.name}`}>
            <div className="p-card-v2">
                <div className="p-card-image">
                    {project.bannerImage ? (
                        <Image
                            src={project.bannerImage}
                            alt={project.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    ) : (
                        <div className="p-image-placeholder" />
                    )}
                </div>

                <div className="p-card-body">
                    <div className="p-card-meta">
                        <span className="p-card-tag" style={tagStyle}>
                            {project.tag}
                        </span>
                        <div className="p-card-stack-preview">
                            {project.stack.slice(0, 2).map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))}
                        </div>
                    </div>

                    <h3 className="p-card-title">{project.name}</h3>
                    <p className="p-card-desc">{project.shortDescription}</p>

                    {project.hasDetail && (
                        <div className="p-card-footer">
                            <div className="p-card-explore">
                                Explore<ArrowUpRight size={18} strokeWidth={2.5} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}

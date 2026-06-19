import { projects } from "@/lib/content";
import { getProjectShots } from "@/lib/shots";
import ProjectGallery from "./ProjectGallery";
import SectionHeading from "./SectionHeading";

/** The centerpiece — a responsive grid of clickable project cards. */
export default function Projects() {
  // Server component: read each project's screenshots from its folder at build
  // time (public/projects/<slug>/). Empty/absent folder → no shots.
  const withShots = projects.map((project) => ({
    ...project,
    shots: getProjectShots(project.slug),
  }));

  return (
    <section id="projects" className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        number="02"
        label="Projects"
        title="Things I've shipped"
      />

      <ProjectGallery projects={withShots} />
    </section>
  );
}

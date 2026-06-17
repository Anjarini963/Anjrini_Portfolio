import { links } from "@/lib/content";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const items = [
  { label: "GitHub", href: links.github, Icon: GitHubIcon, external: true },
  { label: "LinkedIn", href: links.linkedin, Icon: LinkedInIcon, external: true },
  { label: "Email", href: `mailto:${links.email}`, Icon: MailIcon, external: false },
];

/** Row of icon links to GitHub, LinkedIn, and email. */
export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-1.5 ${className}`}>
      {items.map(({ label, href, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="grid h-10 w-10 place-items-center rounded-md border border-line text-muted transition-colors hover:border-accent hover:text-text"
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}

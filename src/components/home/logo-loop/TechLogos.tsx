import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiDocker,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";

const techLogos = [
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  // { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

export default function TechLogos() {
  return (
    <div style={{ height: "200px", position: "relative", overflow: "hidden" }}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={30}
        gap={30}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />

      {/* Vertical loop with deceleration on hover */}
      {/* <LogoLoop
                logos={techLogos}
                speed={100}
                direction="left"
                logoHeight={60}
                gap={60}
                hoverSpeed={0}
                fadeOut
                useCustomRender={false}
            /> */}
    </div>
  );
}

"use client";

import Image from "next/image";
import { Project } from "./project-data";
import { ProjectLinks } from "./ProjectLinks";
import { TechBadge } from "./TechBadge";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

export const HorizontalScrollSection = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="relative w-full px-4 md:px-8">
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={24}
        slidesPerView="auto"
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={4000} // Linear continuous scroll speed
        className="w-full pb-12"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="!w-[280px] md:!w-[320px]">
            <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-transform hover:scale-[1.02]">
              {/* Image */}
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <Image
                  src={project.image || "/assets/placeholder.jpg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  quality={80} // Slightly lower quality for small thumbnails is fine
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40" />

                {/* Links Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
                  <ProjectLinks
                    liveLink={project.liveLink}
                    repoLink={project.repoLink}
                    className="scale-90"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-4">
                <h3 className="mb-1 text-lg font-bold text-white">{project.title}</h3>
                <p className="mb-3 line-clamp-2 text-xs text-white/60">{project.description}</p>

                <div className="mt-auto flex items-center gap-1">
                  {project.techStack.slice(0, 3).map((t) => (
                    <TechBadge key={t} name={t} small className="px-2 text-[10px]" />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

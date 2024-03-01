import React, { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../Constants";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: imageContainer.current,
      pin: true,
      start: "top-=250px",
      end: document.body.offsetHeight - window.innerHeight - 50,
    });
  }, []);

  return (
    <div ref={container} className="relative p-[6%]">
      <div className="flex h-[600px] gap-20 w-full">
        <div ref={imageContainer} className="relative h-[50vh] w-[35%]">
          <Image
            src={`/images/${projects[selectedProject].src}`}
            fill={true}
            alt="project images"
            priority={true}
          />
        </div>
        <div className="flex gap-10 w-[54%] justify-between">
          <p className="flex h-full w-[50%] text-xl last:items-end">
            The flora is characterized by the presence of high elevation
            wetland,
            <br />
            as well as yellow straw, broom sedge, tola de agua and tola amaia.
          </p>
          <p className="flex h-full w-[50%] text-xl last:items-end">
            Some, like the southern viscacha, vicuña and Darwins rhea, are
            classified
            <br />
            as endangered species. Others, such as Andean goose, horned lorem.
          </p>
        </div>
      </div>
      <div className="flex flex-col relative mt-[200px]">
        {projects?.map((project, index) => {
          return (
            <div
              key={index}
              className="w-full uppercase border-b flex text-[1vw] justify-end"
            >
              <h2
                className="m-0 mt-[40px] mb-[20px] cursor-pointer"
                onMouseOver={() => {
                  setSelectedProject(index);
                }}
              >
                {project.title}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

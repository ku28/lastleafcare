"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

const videos = [
  {
    embedUrl: "https://www.youtube.com/embed/b0akJtrJb7c?si=ATmgLLyvBAr3OAck",
    title: "YouTube video player"
  },
  {
    embedUrl: "https://www.youtube.com/embed/JxqXi4JhWvg?si=vdo0EWvUxy426vhs",
    title: "YouTube video player"
  },
  {
    embedUrl: "https://www.youtube.com/embed/BE5v5OZPpMw?si=KoqkZmYW9fzB1oGp",
    title: "YouTube video player"
  },
  {
    embedUrl: "https://www.youtube.com/embed/-e8aabBBWN0?si=9DOmQ0wFQ14OgR9o",
    title: "YouTube video player"
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6">
        Our Videos
      </h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {videos.map(({ embedUrl, title }) => (
            <div
              key={embedUrl}
              className="w-[560px] h-[315px]"
            >
              <iframe
                width="560"
                height="315"
                src={embedUrl}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

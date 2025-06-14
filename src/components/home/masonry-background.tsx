"use client";

import { ScrollShadow } from "@heroui/react";
import Image from "next/image";
import Masonry from "react-masonry-css";

const images = [
  { src: "/images/img-1.jpg", alt: "Arte futurista 1" },
  { src: "/images/img-2.jpg", alt: "Arte futurista 2" },
  { src: "/images/img-3.jpg", alt: "Arte futurista 3" },
  { src: "/images/img-4.jpg", alt: "Arte futurista 4" },
  { src: "/images/img-1.jpg", alt: "Arte futurista 1" },
  { src: "/images/img-2.jpg", alt: "Arte futurista 2" },
  { src: "/images/img-3.jpg", alt: "Arte futurista 3" },
  { src: "/images/img-4.jpg", alt: "Arte futurista 4" },
  { src: "/images/img-1.jpg", alt: "Arte futurista 1" },
];

const breakpointColumnsObj = {
  default: 4,
  640: 2,
  400: 3,
};

export default function MasonryBackground() {
  return (
    <ScrollShadow className="max-h-[80vh] w-full overflow-y-hidden" size={400}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-full h-full max-w-sm mx-auto gap-2"
        columnClassName="masonry-column"
      >
        {images.map((img, i) => (
          <div key={i} className="mb-2 rounded-xl overflow-hidden relative">
            <Image
              src={img.src}
              alt={img.alt}
              width={200}
              height={400}
              className="object-cover w-full min-h-[30vh]"
              sizes="(max-width: 640px) 100vw, 33vw"
              priority={i < 3}
            />
          </div>
        ))}
      </Masonry>
    </ScrollShadow>
  );
}

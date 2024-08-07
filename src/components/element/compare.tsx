import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className="w-3/4 h-[60vh] px-1 md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
      <div
        style={{
          transform: "rotateX(15deg) translateZ(80px)",
        }}
        className="p-1 md:p-4 rounded-3xl  border-neutral-200 dark:border-neutral-800 mx-auto w-3/4 h-1/2 md:h-3/4"
      >
        <Compare
          firstImage="https://utfs.io/f/ef16e964-4901-49de-be56-7b0f7e00b95c-jlo1c9.png"
          secondImage="https://utfs.io/f/03cacd14-a4bf-4e56-b7b5-c1417e9e9b71-jlo1ca.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
          slideMode="hover"
          autoplayDuration={2000}
          autoplay={true}
        />
      </div>
    </div>
  );
}

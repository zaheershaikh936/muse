import { museWork } from "@/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function MuseWorkCard() {
  return (
    <div className="grid grid-cols-3 gap-4  ">
      {museWork.map((item) => {
        return (
          <div
            key={item.id}
            className="flex w-auto h-auto flex-col gap-5 p-5 bg-[#f5f5f5] rounded-lg"
          >
            <Image
              src={item.image}
              alt={`image_${item.id}`}
              width={1000}
              height={0}
              className="w-full h-auto flex items-start justify-center"
            />
            <div className="py-5 w-full ">
              <p className="text-2xl font-semibold text-nowrap">{item.title}</p>
              <p className="py-3">{item.description}</p>
            </div>
            <div className="mt-auto flex justify-center">
              <Button
                variant={"outline"}
                className="border border-black rounded-full w-32"
              >
                {item.button}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

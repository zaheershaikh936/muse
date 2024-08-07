import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CategoryCards from "./categoryCard";
import { categories, categoryT } from "@/data";

export default function CarouselComponent() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {categories.map((category: categoryT, index: number) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 px-5">
            <CategoryCards
              _id={category._id}
              name={category.name}
              subcategory={category.subcategory}
              total={category.total}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

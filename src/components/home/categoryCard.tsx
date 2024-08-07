import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaLaptopCode } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";
import { categoryT } from "@/data/category";

export default function CategoryCards({
  _id,
  category,
  subcategory,
  total,
}: categoryT) {
  return (
    <Card key={_id} className="h-full  shadow-lg hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <p className="text-center text-2xl font-semibold text-primary">
            {category}
          </p>
          <div className="bg-gray-100 w-14 h-14 rounded-2xl flex justify-center items-center">
            <FaLaptopCode size={35} color="black" />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-3 w-full flex-wrap">
          {subcategory.map((item: { _id: number; name: string }) => (
            <Link key={item._id} href="#">
              <Badge
                variant="outline"
                className="h-10 min-w-1/3 rounded-full flex gap-3 text-nowrap"
              >
                <div className="w-7 h-7 rounded-full bg-primary flex justify-center items-center">
                  <FiCheckCircle size={25} color="white" />
                </div>
                {item.name}
              </Badge>
            </Link>
          ))}
          <Link href="#">
            <Badge
              variant="outline"
              className="h-10 min-w-1/3 rounded-full flex gap-3 text-nowrap"
            >
              <div className="w-7 h-7 rounded-full bg-primary flex justify-center items-center">
                <FiCheckCircle size={25} color="white" />
              </div>
              See All
            </Badge>
          </Link>
        </div>
      </CardContent>
      <CardFooter className="gap-3">
        <div className="flex -space-x-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Avatar key={index} className="w-12 h-12 border ">
              <AvatarImage src="https://avatars.githubusercontent.com/u/73430101?v=4&size=64" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ))}
          <Avatar className="w-12 h-12 border ">
            <AvatarFallback>+2</AvatarFallback>
          </Avatar>
        </div>
        <p className="text-lg font-semibold">{total}k Mentors</p>
      </CardFooter>
    </Card>
  );
}

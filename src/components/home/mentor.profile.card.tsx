import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

export default function MentorProfileCard() {
  return (
    <Card>
      <CardHeader className="px-6 pt-6 pb-0">
        <CardTitle>
          <div className="flex gap-5">
            <Image
              src="https://utfs.io/f/1bef1524-064a-45ab-b9d3-d7fda357e720-vpn9rf.jpeg" // Replace with the actual image path
              alt="Profile Image"
              className="rounded-lg w-2/5 h-28 object-cover bg-black"
              width={50}
              height={0}
            />
            <div className="w-full">
              <div className="bg-green-100 text-green-600 w-fit text-nowrap rounded-lg px-2 py-1 text-sm">
                <span className="font-semibold flex items-center gap-2">
                  <FaStar /> Top Mentor
                </span>
              </div>
              <div className="py-2">
                <div className="flex gap-4 items-center">
                  <p className="text-xl font-semibold">Arthur Pascua</p>{" "}
                  <MdVerified size={25} color="#3897F0" />
                </div>
                <p className="text-sm text-gray-500 mt-1 font-normal">
                  📍 Dubai, UAE 🇦🇪
                </p>
              </div>
              <div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                  ))}
                  <p className="text-xs text-gray-400 font-normal">
                    (32 Reviews)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardTitle>
        <CardDescription className=" font-semibold">
          <p>About Me</p>
          <p className="text-primary py-3">
            UI/UX Designer | Digital Marketing | Information Technology
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-0">
        <h3 className="text-sm font-semibold text-gray-500">Experience</h3>
        <div className="bg-gray-100 rounded-lg p-2 mt-2 flex items-center w-fit px-5">
          <Image
            src="https://utfs.io/f/726be4ad-bbf7-4c8e-9ec6-8808e2fb9977-ixxfsk.png"
            alt="Company Logo"
            width={100}
            height={0}
            className="mr-2 w-12"
          />
          <div>
            <p className="text-sm font-medium">UI/UX Designer</p>
            <p className="text-xs text-gray-500">Zonesso</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="py-3">
        <h3 className="text-sm font-semibold text-gray-500">Skills</h3>
        <div className="flex gap-1">
          <Badge variant={"outline"} className="w-fit py-1.5">
            UI Researcher
          </Badge>
          <Badge variant={"outline"} className="w-fit py-1.5">
            UI Designer
          </Badge>
          <Badge variant={"outline"} className="w-fit py-1.5">
            UI/UX
          </Badge>
        </div>
      </CardFooter>
    </Card>
  );
}

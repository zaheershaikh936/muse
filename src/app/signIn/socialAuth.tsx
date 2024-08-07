import { Button } from "@/components/ui/button";
import {
  IconBrandGoogleFilled,
  IconBrandGithubFilled,
  IconBrandLinkedin,
} from "@tabler/icons-react";
export default function SocialAuth() {
  return (
    <>
      <div className="flex justify-center gap-4">
        <Button variant="ghost" className="h-12 hover:bg-none">
          <IconBrandGoogleFilled />
        </Button>
        <Button variant="ghost" className="h-12 hover:bg-none">
          <IconBrandGithubFilled />
        </Button>
        <Button variant="ghost" className="h-12 hover:bg-none">
          <IconBrandLinkedin stroke={2} />
        </Button>
      </div>
      <div className="flex items-center my-6">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-4 text-gray-500">or sign in with your e-mail</span>
        <hr className="flex-grow border-gray-300" />
      </div>
    </>
  );
}

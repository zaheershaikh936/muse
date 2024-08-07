import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/assets/images";
import SocialAuth from "@/app/signIn/socialAuth";
import { PasswordInput } from "@/components/ui/passwordInput";

interface InputProps {
  onChangeAuthMode: () => void;
}

export default function SignUp({ onChangeAuthMode }: InputProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-[45rem] w-full">
      <div className="px-10 py-16">
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={0}
          className="w-32 h-auto"
        />
        <div className="p-8 flex flex-col gap-6">
          <SocialAuth />
          <form action="">
            <div className="space-y-4 w-full">
              <div className="space-y-2">
                <Label htmlFor="email">Full Name</Label>
                <Input id="name" type="text" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <PasswordInput id="password" />
              </div>
              <Link
                href="#"
                className="text-sm text-right text-muted-foreground underline"
                prefetch={false}
              >
                Forgot password?
              </Link>
              <Button type="submit" className="w-full h-12">
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center bg-primary text-primary-foreground p-8 flex flex-col justify-center items-start gap-6">
        <h2 className="text-4xl font-bold">Hello Again!</h2>
        <p>
          Let’s achieve great things together Log in to continue your journey
          towards success!
        </p>
        <Button
          onClick={onChangeAuthMode}
          variant="outline"
          className="w-full rounded-full h-12"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import { logo } from "@/assets/images";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="container py-5">
      <div className="flex justify-between items-center">
        <Image
          src={logo}
          alt={"footer-logo"}
          width={100}
          height={0}
          className="w-32 h-auto"
        />
        <div className="flex gap-10 font-semibold text-sm items-center">
          <div className="flex gap-5">
            <Link href={"#"}>
              <p>Explore Mentor</p>
            </Link>
            <Link href={"#"}>
              <p>Product</p>
            </Link>
          </div>
          <div className="flex gap-3">
            <FaTwitter size={25} />
            <SiFacebook size={25} />
            <FaLinkedin size={25} />
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="flex gap-10 items-center">
          <p className="text-sm">© 2024 Muse</p>
          <div className="flex gap-5 text-xs text-gray-400 ">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Cookie</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CompareDemo } from "@/components/element/compare";
import { FeaturesCards } from "@/components/home/featuresCards";
import MuseWorkCard from "@/components/home/museWorkCard";
import CarouselComponent from "@/components/home/carousel";
import Faqs from "@/components/home/faqs";
import Mentors from "@/components/home/mentors";
import Link from "next/link";

export default function HomePage() {
  return (
    <section>
      <section className="grid grid-cols-2 py-5">
        <div className="py-40">
          <h1 className="text-6xl font-bold text-center">
            UNLOCK YOUR <br /> POTENTIAL
          </h1>
          <p className="w-full leading-8 py-5 text-center">
            Discover and harness your unique strengths, skills, abilities to
            achieve your personal and professional goals through our tailored
            mentorship programs. Join us to transform your ambitions into
            reality and reach new heights of success.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="right-1">Find a Mentor</Button>
            <Button>Become a Mentor</Button>
          </div>
        </div>
        <div className="h-full bg-green">
          <CompareDemo />
        </div>
      </section>
      <section>
        <p className="text-4xl font-semibold">Why Choose Us?</p>
        <p className="py-3">
          We connect you with experienced mentors who provide personalized
          guidance to help you excel in your personal and professional life
        </p>
        <FeaturesCards />
      </section>
      <section className="py-3">
        <p className="text-4xl font-semibold py-5">Choose a mentor category</p>
        <CarouselComponent />
      </section>
      <section className="py-3">
        <p className="text-4xl font-semibold py-5">How Muse Works</p>
        <MuseWorkCard />
      </section>

      <section className="py-3 ">
        <div className="flex justify-between items-center">
          <p className="text-4xl font-semibold py-5 ">Find a mentor</p>
          <Link
            className="text-primary font-semibold text-xl hover:underline"
            href={"#"}
          >
            View All
          </Link>
        </div>
        <Mentors />
      </section>
      <section className="py-3">
        <p className="text-4xl font-semibold py-5">
          Frequently asked questions
        </p>
        <Faqs />
      </section>
    </section>
  );
}

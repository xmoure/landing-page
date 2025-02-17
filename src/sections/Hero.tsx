"use client";
import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import ScrollButton from "@/components/ScrollButton";
import SolarSystem from "@/assets/icons/solar-system-svgrepo-com.svg";
import SaturnIcon from "@/assets/icons/saturn-svgrepo-com.svg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {sendEmail} from '@/utils/sendEmail';

const TypingText = ({
  text,
  speed = 100,
  delay = 2000,
}: {
  text: string;
  speed?: number;
  delay?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      // Wait for a delay, then restart
      setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, delay);
    }
  }, [index, text, speed, delay]);

  return (
    <span className="relative inline-block">
      {/* Placeholder text to maintain space */}
      <span className="invisible">{text}</span>

      {/* Animated typing text */}
      <motion.span
        className="absolute top-0 left-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {displayedText}
      </motion.span>
    </span>
  );
};
/*
const TypingText = ({ text }: { text: string }) => {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05, // Delay between letters
          },
        },
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}; */


export const HeroSection = ({ id }: { id?: string }) => {
  return (
    <div
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
      id={id}
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"> </div>
        <div className="size-[820px] hero-ring"> </div>
        <div className="size-[1020px] hero-ring"> </div>
        <div className="size-[1220px] hero-ring"> </div>
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s">
          <SaturnIcon
            className="size-8 text-emerald-300/20"
          />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s">
          <SparkleIcon
            className="size-5 text-emerald-300/20"
            shouldSpin
            spinDuration="3s"
          />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={144} shouldOrbit orbitDuration="36s">
          <SparkleIcon
            className="size-14 text-emerald-300/20"
            shouldSpin
            spinDuration="3s"
          />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={-20} shouldOrbit orbitDuration="38s">
          <StarIcon
            className="size-12 text-emerald-300"
            shouldSpin
            spinDuration="6s"
          />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s">
          <StarIcon
            className="size-8 text-emerald-300"
            shouldSpin
            spinDuration="6s"
          />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={178} shouldOrbit orbitDuration="44s">
          <SparkleIcon
            className="size-10 text-emerald-300/20"
            shouldSpin
            spinDuration="3s"
          />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            className="size-[100px]"
            src={memojiImage}
            alt="Person looking behind laptop"
          />
          <div className="br-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
              <TypingText text="Building Exceptional User Experiences" />

          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus, sit dolor est optio, laborum animi labore corrupti
            dolorum laudantium nam unde fugiat voluptatem? Consequatur ad a,
            facilis dolores ratione beatae!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <ScrollButton
            elementIdToScrollTo="projects"
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-50"
            title="Explore our work"
            icon={<ArrowDown className="size-4" />}
          />
          <button
            onClick={sendEmail}
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-50"
          >
            <span>👍</span>
            <span className="font-semibold">Let&apos;s connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

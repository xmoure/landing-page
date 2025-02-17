"use client";
import StarIcon from "@/assets/icons/star.svg";
import { ReactNode } from "react";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import ArrowDown from "@/assets/icons/arrow-down.svg";

const ScrollButton = ({
  elementIdToScrollTo,
  title,
  className,
  icon,
}: {
  elementIdToScrollTo: string;
  title: string;
  className?: string;
  icon?: ReactNode;
}) => {
  const scrollTo = () => {
    console.log("clicked");

    document
      .getElementById(elementIdToScrollTo)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    console.log("Button rendered");
  }, []);

  return (
    <>
      <button onClick={scrollTo} className={className}>
        <span className="font-semibold">{title}</span>
        {icon && icon}
      </button>
    </>
  );
};

export default ScrollButton;

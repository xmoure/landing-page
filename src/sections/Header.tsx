"use client";

import { useEffect, useState } from "react";



export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  useEffect(() => {
    const sections = ["home", "projects", "about", "contact"];
    const handleScroll = () => {
      let currentSection = "home";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if(element){
          const rect = element.getBoundingClientRect();
          if(rect.top < window.innerHeight / 3 && rect.bottom >= window.innerHeight /3){
            currentSection = section;
          }
        }
      })
      setActiveSection(currentSection);
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return(
  <div className="flex justify-center items-center fixed top-3 w-full z-10 ">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      {["home", "projects", "about", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`nav-item ${
              activeSection === section ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : ""
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
    </nav>

  </div>
  )
};

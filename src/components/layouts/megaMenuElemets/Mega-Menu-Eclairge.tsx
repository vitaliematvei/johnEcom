"use client";
import React from "react";
import Link from "next/link";

interface MegaMenuEclairgeProps {
  onLeave: (data: { active: boolean; dropdownName: string }) => void;
}

const MegaMenuEclairge = (props: MegaMenuEclairgeProps) => {
  const sendData = () => {
    props.onLeave({ active: false, dropdownName: "" });
  };
  return (
    <div
      onMouseLeave={sendData}
      className="absolute left-0 top-25 border-t-1 py-8 w-[100%] h-fit px-4 text-white bg-[#37464A] opacity-95"
    >
      <ul className="flex justify-between">
        <li className="flex flex-col gap-8 w-1/5">
          {[
            { label: "Éclairage extérieur solaire", href: "#", isHeader: true },
            { label: "Éclairage extérieur solaire puissant", href: "#" },
            { label: "Éclairage extérieur solaire avec détecteur", href: "#" },
            { label: "Éclairage solaire jardin", href: "#" },
            { label: "Projecteur solaire", href: "#" },
          ].map((item) => (
            <div
              key={item.label}
              className={`hover:text-[#F49805] flex items-center text-white${item.isHeader ? " border-b-1 border-white" : ""}`}
            >
              <Link href={item.href}>{item.label}</Link>
            </div>
          ))}
        </li>
        <li className="flex flex-col gap-8" style={{ width: "14.2857%" }}>
          {[
            { label: "Luminaire solaire", href: "#", isHeader: true },
            { label: "Luminaire solaire extérieur", href: "#" },
            { label: "Luminaire solaire jardin", href: "#" },
            { label: "Spot solaire", href: "#" },
          ].map((item) => (
            <div
              key={item.label}
              className={`hover:text-[#F49805] flex items-center text-white${item.isHeader ? " border-b-1 border-white" : ""}`}
            >
              <Link href={item.href}>{item.label}</Link>
            </div>
          ))}
        </li>

        <li className="flex flex-col gap-8 w-1/5">
          {[
            { label: "Applique solaire", href: "#", isHeader: true },
            { label: "Applique solaire extérieur", href: "#" },
            { label: "Applique murale solaire", href: "#" },
            {
              label:
                "Applique murale extérieur solaire LED avec détecteur de mouvement",
              href: "#",
            },
            { label: "Ampoule solaire", href: "#" },
          ].map((item) => (
            <div
              key={item.label}
              className={`hover:text-[#F49805] flex items-center text-white${item.isHeader ? " border-b-1 border-white" : ""}`}
            >
              <Link href={item.href}>{item.label}</Link>
            </div>
          ))}
        </li>

        <li className="flex flex-col gap-8 w-1/5">
          {[
            { label: "Borne solair", href: "#", isHeader: true },
            { label: "Borne solaire extérieure", href: "#" },
          ].map((item) => (
            <div
              key={item.label}
              className={`hover:text-[#F49805] flex items-center text-white${item.isHeader ? " border-b-1 border-white" : ""}`}
            >
              <Link href={item.href}>{item.label}</Link>
            </div>
          ))}
        </li>

        <li className="flex flex-col gap-8 w-1/7">
          {[
            { label: "Lumière solaire", href: "#", isHeader: true },
            { label: "Lumière solaire exterieur", href: "#" },
          ].map((item) => (
            <div
              key={item.label}
              className={`hover:text-[#F49805] flex items-center text-white${item.isHeader ? " border-b-1 border-white" : ""}`}
            >
              <Link href={item.href}>{item.label}</Link>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default MegaMenuEclairge;

"use client";
import React from "react";
import Link from "next/link";

interface MegaMenuGuirlandeProps {
  onLeave: (data: { active: boolean; dropdownName: string }) => void;
}

const MegaMenuGuirlande = (props: MegaMenuGuirlandeProps) => {
  const sendData = () => {
    props.onLeave({ active: false, dropdownName: "" });
  };

  return (
    <div
      onMouseLeave={sendData}
      className="absolute left-0 top-25 border-t-1 py-8 w-[100%] h-fit px-4 text-white bg-[#37464A] opacity-95"
    >
      <div className="w-3/4 mx-auto">
        <ul className="flex justify-between">
          <li className="flex flex-col gap-8 w-1/5">
            {[
              {
                label: "Guirlandes solaire extérieur",
                href: "#",
                isHeader: true,
              },
              { label: "Guirlande solaire extérieur puissante", href: "#" },
              { label: "Guirlande solaire jardin", href: "#" },
              { label: "Guirlande solaire LED", href: "#" },
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
              {
                label: "Guirlande lumineuse solaire",
                href: "#",
                isHeader: true,
              },
              { label: "Guirlande lumineuse noel", href: "#" },
              { label: "Guirlande lumineuse solaire extérieure", href: "#" },
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
              {
                label: "Guirlande solaire guinguette",
                href: "#",
                isHeader: true,
              },
              { label: "Guirlande ampoule solaire", href: "#" },
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
    </div>
  );
};

export default MegaMenuGuirlande;

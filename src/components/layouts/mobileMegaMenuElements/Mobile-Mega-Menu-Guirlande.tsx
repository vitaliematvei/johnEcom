"use client";
import React from "react";
import Link from "next/link";

const menuItems = [
  { href: "#", label: "Guirlandes solaire extérieur" },
  { href: "#", label: "Guirlande solaire extérieur puissante" },
  { href: "#", label: "Guirlande solaire jardin" },
  { href: "#", label: "Guirlande solaire LED" },
  { href: "#", label: "Guirlande lumineuse solaire" },
  { href: "#", label: "Guirlande lumineuse noel" },
  { href: "#", label: "Guirlande lumineuse solaire extérieure" },
  { href: "#", label: "Guirlande solaire guinguette" },
  { href: "#", label: "Guirlande ampoule solaire" },
];
const MobileMegaMenuGuirlande = () => {
  return (
    <div className="py-6 w-[100%] h-fit px-4 text-black  ">
      <div className="flex flex-col gap-5">
        {menuItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="transition-transform duration-300 hover:translate-x-7 hover:scale-120"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMegaMenuGuirlande;

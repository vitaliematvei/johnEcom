"use client";
import React from "react";
import Link from "next/link";

const menuItems = [
  { href: "#", label: "Éclairage extérieur solaire" },
  { href: "#", label: "Éclairage extérieur solaire puissant" },
  { href: "#", label: "Éclairage extérieur solaire avec détecteur" },
  { href: "#", label: "Éclairage solaire jardin" },
  { href: "#", label: "Projecteur solaire" },
  { href: "#", label: "Luminaire solaire" },
  { href: "#", label: "Luminaire solaire extérieur" },
  { href: "#", label: "Luminaire solaire jardin" },
  { href: "#", label: "Spot solaire" },
  { href: "#", label: "Applique solaire" },
  { href: "#", label: "Applique solaire extérieur" },
  { href: "#", label: "Applique murale solaire" },
  {
    href: "#",
    label: "Applique murale extérieur solaire LED avec détecteur de mouvement",
  },
  { href: "#", label: "Ampoule solaire" },
  { href: "#", label: "Borne solaire" },
  { href: "#", label: "Borne solaire extérieure" },
  { href: "#", label: "Lumière solaire" },
  { href: "#", label: "Lumière solaire exterieur" },
];

const MobileMegaMenuEclairge = () => {
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

export default MobileMegaMenuEclairge;

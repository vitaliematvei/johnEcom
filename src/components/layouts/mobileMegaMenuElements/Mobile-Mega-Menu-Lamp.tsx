"use client";
import React from "react";
import Link from "next/link";

const menuItems = [
  { href: "#", label: "Lampe extérieur" },
  { href: "#", label: "Lampe solaire extérieur détecteur de mouvement" },
  { href: "#", label: "Lampe solaire exterieure puissante" },
  { href: "#", label: "Lampe intérieur" },
  { href: "#", label: "Lampe solaire jardin" },
  { href: "#", label: "Lampe solaire terrasse" },
  { href: "#", label: "Lampe solaire jardin puissante" },
  { href: "#", label: "Lampe solaire camping" },
  { href: "#", label: "Lampe solaire puissante" },
  { href: "#", label: "Lampe solaire puissante jardin" },
  { href: "#", label: "Lampe solaire détecteur mouvement" },
  { href: "#", label: "Lampe solaire de table" },
  { href: "#", label: "Lampe solaire à poser" },
  { href: "#", label: "Lampe solaire murale" },
  { href: "#", label: "Lampe solaire jardin haut de gamme" },
  { href: "#", label: "Lampe solaire design" },
  { href: "#", label: "Lampe solaire metal" },
];

const MobileMegaMenuLamp = () => {
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

export default MobileMegaMenuLamp;

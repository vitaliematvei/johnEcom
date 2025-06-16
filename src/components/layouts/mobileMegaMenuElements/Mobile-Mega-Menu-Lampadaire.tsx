"use client";
import React from "react";
import Link from "next/link";

const menuItems = [
  { href: "#", label: "Lampadaire solaire extérieur" },
  { href: "#", label: "Lampadaire solaire pour jardin" },
  { href: "#", label: "Lampadaire solaire puissant" },
  { href: "#", label: "Lampadaire solaire détecteur de mouvement" },
];
const MobileMegaMenuLampadaire = () => {
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

export default MobileMegaMenuLampadaire;

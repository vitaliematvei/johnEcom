"use client";
import React from "react";
import Link from "next/link";

const menuItems = [
  { href: "#", label: "Décoration solaire jardin" },
  { href: "#", label: "Arrosoir lumineux solaire" },
  { href: "#", label: "Balise solaire" },
  { href: "#", label: "Balise solaire exterieur" },
  { href: "#", label: "Décoration solaire noel" },
  { href: "#", label: "Décoration noel extérieur solaire" },
  { href: "#", label: "Décoration Solaire Halloween" },
  { href: "#", label: "Décoration solaire extérieur" },
  { href: "#", label: "Animaux solaires" },
  { href: "#", label: "Boule solaire extérieur" },
  { href: "#", label: "Carillon solaire" },
  { href: "#", label: "Piquet solaire" },
  { href: "#", label: "Piquet solaire jardin" },
  { href: "#", label: "Lanterne solaire" },
  { href: "#", label: "Lanterne solaire extérieur" },
  { href: "#", label: "Lanterne solaire puissante" },
  { href: "#", label: "Lanterne solaire jardin" },
  { href: "#", label: "Lanterne solaire metal" },
  { href: "#", label: "Accessoires solaire" },
  { href: "#", label: "Gadget solaire" },
  { href: "#", label: "Ruban LED solaire" },
];

const MobileMegaMenuDecoration = () => {
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

export default MobileMegaMenuDecoration;

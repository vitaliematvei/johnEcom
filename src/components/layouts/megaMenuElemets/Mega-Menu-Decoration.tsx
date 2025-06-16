"use client";
import React from "react";
import Link from "next/link";

interface MegaMenuDecorationProps {
  onLeave: (data: { active: boolean; dropdownName: string }) => void;
}

const MegaMenuDecoration = (props: MegaMenuDecorationProps) => {
  const sendData = () => {
    props.onLeave({ active: false, dropdownName: "" });
  };

  return (
    <div
      onMouseLeave={sendData}
      className="absolute left-0 top-25 border-t-1 py-8 w-[100%] h-fit px-4 text-white bg-[#37464A] opacity-95"
    >
      <div className="mx-auto">
        <ul className="flex justify-between">
          <li className="flex flex-col gap-8 w-1/5">
            {[
              { label: "Décoration solaire jardin", href: "#", isHeader: true },
              { label: "Arrosoir lumineux solaire", href: "#" },
              { label: "Balise solaire", href: "#" },
              { label: "Balise solaire exterieur", href: "#" },
              { label: "Décoration solaire noel", href: "#" },
              { label: "Décoration noel extérieur solaire", href: "#" },
              { label: "Décoration Solaire Halloween", href: "#" },
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
                label: "Décoration solaire extérieur",
                href: "#",
                isHeader: true,
              },
              { label: "Animaux solaires", href: "#" },
              { label: "Boule solaire extérieur", href: "#" },
              { label: "Carillon solaire", href: "#" },
              { label: "Lampion solaire", href: "#" },
              { label: "Piquet solaire", href: "#" },
              { label: "Piquet solaire jardin", href: "#" },
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
                label: "Lanterne solaire",
                href: "#",
                isHeader: true,
              },
              { label: "Lanterne solaire extérieur", href: "#" },
              { label: "Lanterne solaire puissante", href: "#" },
              { label: "Lanterne solaire jardin", href: "#" },
              { label: "Lanterne solaire metal", href: "#" },
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
                label: "Accessoires solaire",
                href: "#",
                isHeader: true,
              },
              { label: "Gadget solaire", href: "#" },
              { label: "Ruban LED solaire", href: "#" },
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

export default MegaMenuDecoration;

"use client";
import React from "react";
import Link from "next/link";

interface MegaMenuLampProps {
  onLeave: (data: { active: boolean; dropdownName: string }) => void;
}

const MegaMenuLamp = (props: MegaMenuLampProps) => {
  const sendData = () => {
    props.onLeave({ active: false, dropdownName: "" });
  };

  return (
    <div
      onMouseLeave={sendData}
      className="absolute left-0 top-25 border-t-1 py-8 w-[100%] h-fit px-4 text-white bg-[#37464A] opacity-95"
    >
      <ul className="flex justify-between">
        <li className="flex flex-col gap-8 w-1/6">
          {[
            {
              label: "Lampe extérieur",
              href: "#",
              isHeader: true,
            },
            {
              label: "Lampe solaire extérieur détecteur de mouvement",
              href: "#",
            },
            { label: "Lampe solaire exterieure puissante", href: "#" },
            { label: "Lampe intérieur", href: "#" },
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
            {
              label: "Lampe solaire jardin",
              href: "#",
              isHeader: true,
            },
            {
              label: "Lampe solaire terrasse",
              href: "#",
            },
            { label: "Lampe solaire jardin puissante", href: "#" },
            { label: "Lampe solaire camping", href: "#" },
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
            {
              label: "Lampe solaire puissante",
              href: "#",
              isHeader: true,
            },
            {
              label: "Lampe solaire puissante jardin",
              href: "#",
            },
            { label: "Lampe solaire détecteur mouvement", href: "#" },
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
            {
              label: "Lampe solaire de table",
              href: "#",
              isHeader: true,
            },
            {
              label: "Lampe solaire à poser",
              href: "#",
            },
            { label: "Lampe solaire murale", href: "#" },
          ].map((item) => (
            <div
              key={item.label}
              className={`hover:text-[#F49805] flex items-center text-white${item.isHeader ? " border-b-1 border-white" : ""}`}
            >
              <Link href={item.href}>{item.label}</Link>
            </div>
          ))}
        </li>

        <li className="flex flex-col gap-8 w-1/6">
          {[
            {
              label: "Lampe solaire jardin haut de gamme",
              href: "#",
              isHeader: true,
            },
            {
              label: "Lampe solaire design",
              href: "#",
            },
            { label: "Lampe solaire metal", href: "#" },
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

export default MegaMenuLamp;

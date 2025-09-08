'use client';
import React from 'react';
import Link from 'next/link';

interface MegaMenuLampadaireProps {
  onLeave: (data: { active: boolean; dropdownName: string }) => void;
}

const MegaMenuLampadaire = (props: MegaMenuLampadaireProps) => {
  const sendData = () => {
    props.onLeave({ active: false, dropdownName: '' });
  };

  return (
    <div
      onMouseLeave={sendData}
      className="absolute left-0 top-25 border-t-1 py-8 w-[100%] h-fit px-4 text-white bg-[#37464A] opacity-95"
    >
      <div className="mx-auto">
        {/* <ul className="flex justify-between"> */}
        <ul className="flex justify-center">
          {/* <li className="flex flex-col gap-8 w-1/5"> */}
          <li className="flex flex-col">
            {[
              {
                label: 'Lampadaire solaire extérieur',
                href: '#',
                isHeader: true,
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`hover:text-[#F49805] flex items-center text-white${item.isHeader ? ' border-b-1 border-white' : ''}`}
              >
                <Link href={item.href}>{item.label}</Link>
              </div>
            ))}
          </li>
          {/* <li className="flex flex-col gap-8 w-1/5">
            {[
              {
                label: "Lampadaire solaire pour jardin",
                href: "#",
                isHeader: true,
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`hover:text-[#F49805] flex items-center text-white${item.isHeader ? " border-b-1 border-white" : ""}`}
              >
                <Link href={item.href}>{item.label}</Link>
              </div>
            ))}
          </li> */}
          {/* <li className="flex flex-col gap-8 w-1/5">
            {[
              {
                label: 'Lampadaire solaire puissant',
                href: '#',
                isHeader: true,
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`hover:text-[#F49805] flex items-center text-white${item.isHeader ? ' border-b-1 border-white' : ''}`}
              >
                <Link href={item.href}>{item.label}</Link>
              </div>
            ))}
          </li> */}
          {/* <li className="flex flex-col gap-8 w-1/5">
            {[
              {
                label: 'Détecteur de mouvement',
                href: '#',
                isHeader: true,
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`hover:text-[#F49805] flex items-center text-white${item.isHeader ? ' border-b-1 border-white' : ''}`}
              >
                <Link href={item.href}>{item.label}</Link>
              </div>
            ))}
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default MegaMenuLampadaire;

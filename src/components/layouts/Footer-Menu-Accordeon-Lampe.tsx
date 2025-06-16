import React, { useState } from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

type AccordionSectionData = {
  title: string;
  items: { name: string; link: string }[];
};

const accordionSections: AccordionSectionData[] = [
  {
    title: "#Lampesolar",
    items: [
      { name: "Blog: Lampe Solaier", link: "#" },
      { name: "Plan du site", link: "#" },
      { name: "Expedition/Livration", link: "#" },
      { name: "Mention legales", link: "#" },
      { name: "Conditions generales de vente", link: "#" },
      { name: "Retour et Remboursement", link: "#" },
    ],
  },
];
const FooterMenuAccordeonLampe = () => {
  {
    return <MobileMenuAccordeon sections={accordionSections} />;
  }
};

export default FooterMenuAccordeonLampe;

const MobileMenuAccordeon = ({
  sections,
}: {
  sections: AccordionSectionData[];
}) => {
  return (
    <div>
      {sections.map((section, index) => (
        <AccordionItem
          tailwindClases="flex text-[#3FAA2A] items-center justify-between cursor-pointer pt-2  text-lg uppercase"
          key={index}
          title={section.title}
          items={section.items}
        />
      ))}
    </div>
  );
};

type AccordionItemProps = {
  title: string;
  items: { name: string; link: string }[];
  tailwindClases: string;
};

function AccordionItem({ title, items, tailwindClases }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Accordion header with click handler */}
      <div className={`${tailwindClases} `} onClick={toggleAccordion}>
        <h3>{title}</h3>

        <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </div>

      {/* Accordion content */}
      <div
        className={` overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="lowercase py-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="capitalize hover:text-[#F49805] py-1 text-white"
            >
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

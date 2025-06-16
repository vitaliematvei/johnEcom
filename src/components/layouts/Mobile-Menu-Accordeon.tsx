import React, { useState } from "react";
import Link from "next/link";
import { TailwindClasses } from "@/types";

import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

// Define the structure for your accordion items more precisely
interface AccordionItemData {
  name: string;
  link: string;
}

interface AccordionSectionData {
  title: string;
  items: AccordionItemData[];
}

interface AccordionItemProps {
  title: string;
  items: AccordionItemData[];
  tailwindClases: TailwindClasses;
}

interface AccordionProps {
  sections: AccordionSectionData[];
  tailwindClases: TailwindClasses;
}

function AccordionItem({ title, items, tailwindClases }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-left text-sm">
      {/* Accordion header with click handler */}
      <div className={`${tailwindClases} `} onClick={toggleAccordion}>
        <h3>{title}</h3>

        <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </div>

      {/* Accordion content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="lowercase pl-5 py-2">
          {items.map((item, index) => (
            <li key={index} className="capitalize hover:text-[#F49805] py-1">
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const MobileMenuAccordeon = ({ sections, tailwindClases }: AccordionProps) => {
  return (
    <div>
      {sections.map((section, index) => (
        <AccordionItem
          tailwindClases={tailwindClases}
          key={index}
          title={section.title}
          items={section.items}
        />
      ))}
    </div>
  );
};
export default MobileMenuAccordeon;

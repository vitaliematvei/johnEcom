import MobileMenuAccordeon from "./Mobile-Menu-Accordeon";
import { TailwindClasses } from "@/types";

// Define the structure for your accordion items more precisely
interface AccordionItemData {
  name: string;
  link: string;
}

interface AccordionSectionData {
  title: string;
  items: AccordionItemData[];
}

interface MobileMenuAccordeonLampesolarProps {
  lampeSolarClases: TailwindClasses;
}

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

function MobileMenuAccordeonLampesolar({
  lampeSolarClases,
}: MobileMenuAccordeonLampesolarProps) {
  return (
    <MobileMenuAccordeon
      sections={accordionSections}
      tailwindClases={lampeSolarClases}
    />
  );
}

export default MobileMenuAccordeonLampesolar;

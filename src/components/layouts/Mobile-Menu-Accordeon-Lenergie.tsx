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

interface MobileMenuAccordeonLenergieProps {
  lenergieSolarClases: TailwindClasses;
}

const accordionSections: AccordionSectionData[] = [
  {
    title: "Adoptez L'énergie Verte",
    items: [
      { name: "Boutuque: Lampe Solaier", link: "#" },
      { name: "Ambassadeur", link: "#" },
      { name: "mail@mail.com", link: "#" },
      { name: "Centre D'aide / FAQ", link: "#" },
      { name: "Suivi de commande", link: "#" },
      { name: "Devis Installation Panneaux photovoltaiques", link: "#" },
    ],
  },
];

function MobileMenuAccordeonLenergie({
  lenergieSolarClases,
}: MobileMenuAccordeonLenergieProps) {
  return (
    <div className="mb-16">
      <MobileMenuAccordeon
        sections={accordionSections}
        tailwindClases={lenergieSolarClases}
      />
    </div>
  );
}

export default MobileMenuAccordeonLenergie;

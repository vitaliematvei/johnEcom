"use client";
import React from "react";
import Image from "next/image";
import MobileMenuAccordeonLenergie from "./Mobile-Menu-Accordeon-Lenergie";
import FooterMenuAccordeonLenergie from "./Footer-Menu-Accordeon-Lenergie";
import FooterMenuAccordeonLampe from "./Footer-Menu-Accordeon-Lampe";

import { TailwindClasses } from "@/types";
const tailwindClasses: TailwindClasses = [
  "bg-[#223236] text-white cursor-pointer uppercase py-3 px-5 flex justify-between items-center",
];

import Car from "../../../public/assets/images/Footer/truck_1-footer.webp";
import Lampe from "../../../public/assets/images/Footer/lamp-ecology-footer.webp";
import Customer from "../../../public/assets/images/Footer/customer-service-footer.webp";
import Card from "../../../public/assets/images/Footer/credit-card-footer.webp";
import Logo from "../../../public/assets/images/Logo.avif";
import Payments from "../../../public/assets/images/Footer/Visa.png";

const items = [
  {
    image: Car,
    text: "Livraison en France dans les DOM-TOM et partout en Europe ! 📦 LIVRAISON GRATUITE DÈS 99 € !",
  },
  {
    image: Lampe,
    text: "Satisfait ou Remboursé : vous avez 14 jours pour changer d'avis.",
  },
  {
    image: Customer,
    text: "Besoin d'aide ? Nous sommes à votre service du lundi au vendredi et 24h/7 sur le chat Messenger.",
  },
  {
    image: Card,
    text: "Nous utilisons le cryptage SSL pour des paiements en toute sécurité.",
  },
];

const Footer = () => {
  return (
    <footer>
      {/* top footer */}
      <section className="px-7 mx-auto pt-8 bg-white">
        <div className="flex flex-wrap -mx-4 justify-between items-center">
          {items.map((item, index) => (
            <div key={index} className="w-1/2 md:w-1/4 mb-8">
              <div className="h-32 md:h-42 lg:h-[105px] p-2 w-[96%] border-gray-200 border-1 rounded-sm shadow-md flex flex-col md:flex-row gap-2">
                <Image
                  src={item.image}
                  alt={`icon-${index}`}
                  className="h-7 w-7 self-center md:self-start"
                />
                <p className="uppercase text-[13px] text-left">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* bootom footer */}
      <section className="px-3 bg-[#223236] py-15 ">
        <div className="flex flex-col lg:flex-row justify-between items-center h-full ">
          <div className="text-white text-sm ">
            <Image
              src={Logo}
              alt="Ecologic Logo"
              className="w-80 self-center md:self-start"
            />
          </div>

          <FooterMenuAccordeonLenergie />
          <FooterMenuAccordeonLampe />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-white text-sm mt-4">
          <div className="text-[#515151] text-lg">
            © 2025 <span className="text-white">Lampe Solar.</span> Conçu par
            mVi Web
          </div>
          <Image src={Payments} alt={`payments`} className="my-2" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;

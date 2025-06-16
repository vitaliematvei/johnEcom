"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/assets/images/Logo.avif";

import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleMouseEnterLeave = () => {
    setIsModalOpen(!isModalOpen);
  };

  // const [isOpen, setIsOpen] = useState<boolean>(false);
  // const handleClick = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <div className="hidden md:flex items-center h-[40px] bg-[#213236] text-white text-[12px] uppercase">
      <nav className="w-[98%] mx-auto md:flex justify-between ">
        {/* logo */}
        <div className="md:hidden">
          <Link href="#">
            <Image src={Logo} alt="Logo"></Image>
          </Link>
        </div>
        {/* socials */}
        <div>
          <ul className="md:flex hidden gap-4 text-[15px]">
            <li>
              <Link
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-[#F49805]" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="hover:text-[#F49805]" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-[#F49805]" />
              </Link>
            </li>
            <li>
              <Link
                href="mailto:recipient@example.com?subject=Feedback&body=I really enjoyed your article on..."
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail className="hover:text-[#F49805]" />
              </Link>
            </li>
          </ul>
        </div>

        {/* menu */}
        <div>
          <ul className="w-full md:flex  gap-4">
            <li className="hover:text-[#F49805] ">
              <Link href="#">Chat</Link>
            </li>
            <li className="hover:text-[#F49805]">
              <Link href="#">Contact</Link>
            </li>
            <li className="hover:text-[#F49805]">
              <Link href="#">Suivi Commande</Link>
            </li>
            <li className="hover:text-[#F49805]">
              <Link href="#">Guide</Link>
            </li>
            <li className="hover:text-[#F49805] ">
              <Link href="#">Partenairs</Link>
            </li>
            <li className="hover:text-[#F49805] hidden lg:flex">
              <Link href="#">Blog</Link>
            </li>
            <li className="hover:text-[#F49805] hidden lg:flex">
              <Link href="#">Devenir Ambassadeur</Link>
            </li>
          </ul>
        </div>

        {/* right block */}
        <div>
          <ul className="flex gap-6 cursor-pointer ">
            <li className="hover:text-[#F49805] border-none ">
              <select
                name="money"
                id="money"
                required
                className="uppercase w-[50px] flex"
              >
                <option value="eur" className="bg-[#37464A]">
                  Eur
                </option>
                <option value="usd" className="bg-[#37464A]">
                  Usd
                </option>
                <option value="cad" className="bg-[#37464A]">
                  Cad
                </option>
                <option value="aud" className="bg-[#37464A]">
                  Aud
                </option>
                <option value="gbp" className="bg-[#37464A]">
                  Gbp
                </option>
                <option value="jpy" className="bg-[#37464A]">
                  Jpy
                </option>
              </select>
            </li>
            <li className="hover:text-[#F49805] flex gap-1">
              <FaRegUser className="text-[15px]" />
              Connexion
            </li>
            <li
              onMouseEnter={handleMouseEnterLeave}
              className="hover:text-[#F49805] flex gap-1"
            >
              <AiOutlineShoppingCart className="text-[15px]" />
              <span>0</span>
              {isModalOpen && (
                <div
                  className={`flex transition-all duration-500 ease-in-out fixed top-[40px] right-0 w-[400px] h-[100px]  rounded-lg shadow-xl bg-white text-black bg-opacity-50 z-50 justify-center items-center
                    ${isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                  style={{ transitionProperty: "opacity" }}
                >
                  <p className="uppercase text-[18px]">Votre panier est vide</p>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

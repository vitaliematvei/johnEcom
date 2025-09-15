'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { TailwindClasses } from '@/types';

import { useShoppingCart } from 'use-shopping-cart';

import myLogo from '../../../public/assets/images/LogoFacutDeMine.png';
import MobileTopMenu from './Mobile-Top-Menu';
import MobileMegaMenu from './Mobile-Mega-Menu';
import MobileMenuConnextion from './Mobile-Menu-Connextion';
import MobileMenuAccordeonLampesolar from './Mobile-Menu-Accordeon-Lampesolar';
import MobileMenuAccordeonLenergie from './Mobile-Menu-Accordeon-Lenergie';

import { FaTiktok } from 'react-icons/fa';
import { CiYoutube } from 'react-icons/ci';

import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosMenu } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';

const tailwindClasses: TailwindClasses = [
  'bg-white cursor-pointer uppercase py-3 px-5 flex justify-between items-center',
];

const HeaderMobile = () => {
  const { cartCount, handleCartClick } = useShoppingCart();

  //--------------  logic for the card modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleMouseEnterLeave = () => {
    setIsModalOpen(!isModalOpen);
  };

  //--------------  logic for the menu
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  //--------------  logic for the search
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = () => {
    // Here you would implement your search logic
    console.log('Searching for:', searchTerm);
    // For example, you might:
    // - Make an API call with the searchTerm
    // - Filter data on the client-side
    // - Navigate to a search results page
  };

  return (
    <div className=" md:hidden fixed w-full items-center h-[40px] bg-[#213236] text-black text-[12px] uppercase">
      <nav className="w-[100%] mx-auto md:flex justify-between ">
        <div className="flex justify-between text-white items-center px-2 mb-1">
          {/* hamburgeer button */}
          <div
            className={`fixed transition-all duration-300 ease-in-out block
                ${isOpen ? 'rotate-180 -translate-x-10' : ''}
                `}
            onClick={handleClick}
          >
            <IoIosMenu size={35} />
          </div>
          <div
            className={`transition-all duration-300 ease-in-out block
                ${!isOpen ? 'rotate-180 -translate-x-100' : ''}
                `}
            onClick={handleClick}
          >
            <IoMdClose size={35} />
          </div>

          {/* logo */}
          <div className="pt-2">
            <Link href="#">
              <Image src={myLogo} alt="Logo" width={50}></Image>
            </Link>
          </div>

          {/* right block */}
          <div>
            <ul className="flex gap-6 cursor-pointer items-center ">
              <li>
                <FaSearch onClick={handleSearchClick} />
                <div
                  className={`transition-all duration-500 ease-in-out flex fixed top-[40px] right-0 w-full h-[100px] shadow-xl bg-[#37464A] text-white  justify-center items-center
                 ${isSearchOpen ? '' : 'translate-x-200'}
                 `}
                >
                  <div className="flex items-center justify-between pb-2 border-b-1 w-3/4">
                    <input
                      className="mr-3 p-1 w-full"
                      maxLength={50}
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={handleChange}
                    />
                    <button onClick={handleSearch}>
                      <FaSearch size={16} />
                    </button>
                  </div>
                </div>
              </li>
              <li
                onMouseEnter={handleMouseEnterLeave}
                className="hover:text-[#F49805] flex gap-1"
              >
                <AiOutlineShoppingCart
                  className="text-[15px]"
                  onClick={() => handleCartClick()}
                />
                <span>{cartCount}</span>
                {cartCount === 0 && isModalOpen && (
                  <div
                    className={`flex transition-all duration-500 ease-in-out fixed top-[40px] right-0 w-[400px] h-[100px]  rounded-lg shadow-xl bg-white text-black bg-opacity-50 z-50 justify-center items-center
                    ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    style={{ transitionProperty: 'opacity' }}
                  >
                    <p className="uppercase text-[18px]">
                      Votre panier est vide
                    </p>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* menu */}
        <div
          className={`transition-all duration-1000 ease-in-out h-full block rounded-xl bg-white fixed w-1/2
          ${!isOpen ? '-translate-x-100' : ''}
          `}
          style={{ overflowY: 'auto' }}
        >
          <MobileTopMenu />
          <div className="z-50">
            <MobileMegaMenu />
          </div>

          <ul className="text-xl  border-black text-center pt-5">
            <li className="hover:text-[#F49805] py-2">
              <Link href="#">Chat</Link>
            </li>
            <li className="hover:text-[#F49805] py-2">
              <Link href="#">Contact</Link>
            </li>
            <li className="hover:text-[#F49805] py-2">
              <Link href="#">Suivi Commande</Link>
            </li>
            <li className="hover:text-[#F49805] py-2">
              <Link href="#">Guide</Link>
            </li>
            <li className="hover:text-[#F49805] py-2">
              <Link href="#">Partenairs</Link>
            </li>
            <li className="hover:text-[#F49805] py-2">
              <Link href="#">Blog</Link>
            </li>
            <li className="hover:text-[#F49805] py-2">
              <Link href="#">Devenir Ambassadeur</Link>
            </li>
            <li>
              ` {/* socials */}`{' '}
              <ul className="flex justify-between px-5 pt-5 pb-5 text-[20px] text-white">
                <li className="bg-[#349BF1] p-2 rounded-3xl">
                  <Link
                    href="https://www.tiktok.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTiktok />
                  </Link>
                </li>
                <li className="bg-[#44599B] p-2 rounded-3xl">
                  <Link
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li className="bg-[#D63A95] p-2 rounded-3xl">
                  <Link
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CiYoutube />
                  </Link>
                </li>
                <li className="bg-[#44599B] p-2 rounded-3xl">
                  <Link
                    href="mailto:recipient@example.com?subject=Feedback&body=I really enjoyed your article on..."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineMail />
                  </Link>
                </li>
              </ul>
              {/* footer */}
              <MobileMenuConnextion />
              <MobileMenuAccordeonLampesolar
                lampeSolarClases={tailwindClasses}
              />
              <MobileMenuAccordeonLenergie
                lenergieSolarClases={tailwindClasses}
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderMobile;

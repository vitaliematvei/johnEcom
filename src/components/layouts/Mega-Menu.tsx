'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FaSearch } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import myLogo from '../../../public/assets/images/LogoFacutDeMine.png';

import MegaMenuLamp from './megaMenuElemets/Mega-Menu-Lamp';
import MegaMenuEclairge from './megaMenuElemets/Mega-Menu-Eclairge';
import MegaMenuGuirlande from './megaMenuElemets/Mega-Menu-Guirlande';
import MegaMenuDecoration from './megaMenuElemets/Mega-Menu-Decoration';
import MegaMenuLampadaire from './megaMenuElemets/Mega-Menu-Lampadaire';

const MegaMenu = () => {
  const [activeDropDown, setActiveDropDown] = useState({
    active: false,
    dropdownName: '',
  });
  //--------------  logic for the search
  // const [isSearchOpen, setIsSearchOpen] = useState(false);
  // const handleSearchClick = () => {
  //   setIsSearchOpen(!isSearchOpen);
  // };

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
    <section className="relative hidden h-[100px] bg-[#37464A] md:flex justify-between items-center px-2">
      {/* logo */}
      <Link href="#">
        <Image src={myLogo} alt="Logo" width={150}></Image>
      </Link>
      {/* menu */}
      <div>
        <ul className="w-full md:flex gap-5 text-sm">
          <li
            onMouseEnter={() =>
              setActiveDropDown({ active: true, dropdownName: 'lamp' })
            }
            onClick={() =>
              setActiveDropDown({ active: false, dropdownName: '' })
            }
          >
            <div className="hover:text-[#F49805] hover:border-b-1 flex items-center gap-2 text-white uppercase">
              <Link href="#">Lampe</Link>
              <IoIosArrowDown />
            </div>

            {/* drop down */}
            {activeDropDown.active &&
              activeDropDown.dropdownName === 'lamp' && (
                <MegaMenuLamp onLeave={setActiveDropDown} />
              )}
          </li>

          <li
            onMouseEnter={() =>
              setActiveDropDown({ active: true, dropdownName: 'eclairage' })
            }
            onClick={() =>
              setActiveDropDown({ active: false, dropdownName: '' })
            }
          >
            <div className="hover:text-[#F49805] hover:border-b-1 flex items-center gap-2 text-white uppercase">
              <Link href="#">Éclairage</Link>
              <IoIosArrowDown />
            </div>

            {/* drop down */}
            {activeDropDown.active &&
              activeDropDown.dropdownName === 'eclairage' && (
                <MegaMenuEclairge onLeave={setActiveDropDown} />
              )}
          </li>

          <li
            onMouseEnter={() =>
              setActiveDropDown({ active: true, dropdownName: 'guirlande' })
            }
            onClick={() =>
              setActiveDropDown({ active: false, dropdownName: '' })
            }
          >
            <div className="hover:text-[#F49805] hover:border-b-1 flex items-center gap-2 text-white uppercase">
              <Link href="#">Guirlande</Link>
              <IoIosArrowDown />
            </div>

            {/* drop down */}
            {activeDropDown.active &&
              activeDropDown.dropdownName === 'guirlande' && (
                <MegaMenuGuirlande onLeave={setActiveDropDown} />
              )}
          </li>

          <li
            className="hidden lg:flex"
            onMouseEnter={() =>
              setActiveDropDown({ active: true, dropdownName: 'decoration' })
            }
            onClick={() =>
              setActiveDropDown({ active: false, dropdownName: '' })
            }
          >
            <div className="hover:text-[#F49805] hover:border-b-1 flex items-center gap-2 text-white uppercase">
              <Link href="#">Décoration</Link>
              <IoIosArrowDown />
            </div>

            {/* drop down */}
            {activeDropDown.active &&
              activeDropDown.dropdownName === 'decoration' && (
                <MegaMenuDecoration onLeave={setActiveDropDown} />
              )}
          </li>

          <li
            className="hidden lg:flex"
            onMouseEnter={() =>
              setActiveDropDown({ active: true, dropdownName: 'lampadaire' })
            }
            onClick={() =>
              setActiveDropDown({ active: false, dropdownName: '' })
            }
          >
            <div className="hover:text-[#F49805] hover:border-b-1 flex items-center gap-2 text-white uppercase">
              <Link href="#">Lampadaire</Link>
              <IoIosArrowDown />
            </div>

            {/* drop down */}
            {activeDropDown.active &&
              activeDropDown.dropdownName === 'lampadaire' && (
                <MegaMenuLampadaire onLeave={setActiveDropDown} />
              )}
          </li>
        </ul>
      </div>
      {/* search */}
      <div className="flex p-1 gap-2 rounded-sm mr-3 text-white  border">
        <input
          className="p-1"
          maxLength={35}
          type="text"
          placeholder="Recherche..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button onClick={handleSearch}>
          <FaSearch size={16} />
        </button>
      </div>
    </section>
  );
};

export default MegaMenu;

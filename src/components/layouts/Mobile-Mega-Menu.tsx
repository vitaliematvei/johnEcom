import React, { useState } from 'react';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import MobileMegaMenuLamp from './mobileMegaMenuElements/Mobile-Mega-Menu-Lamp';
// import MobileMegaMenuEclairge from './mobileMegaMenuElements/Mobile-Mega-Menu-Eclairge';
import MobileMegaMenuGuirlande from './mobileMegaMenuElements/Mobile-Mega-Menu-Guirlande';
import MobileMegaMenuDecoration from './mobileMegaMenuElements/Mobile-Mega-Menu-Decoration';
import MobileMegaMenuLampadaire from './mobileMegaMenuElements/Mobile-Mega-Menu-Lampadaire';

const MobileMegaMenu = () => {
  // Separate state for each dropdown
  const [isLampOpen, setIsLampOpen] = useState<boolean>(false);
  const [isEclairgeOpen, setIsEclairgeOpen] = useState<boolean>(false);
  const [isGuirlandeOpen, setIsGuirlandeOpen] = useState<boolean>(false);
  const [isDecorationOpen, setIsDecorationOpen] = useState<boolean>(false);
  const [isLampadaireOpen, setIsLampadaireOpen] = useState<boolean>(false);

  return (
    <div>
      <ul className="space-y-5">
        <li>
          <div
            className="text-black flex justify-between  uppercase text-xl border-b-1"
            onClick={() => setIsLampOpen((prev) => !prev)}
          >
            <Link href="#" className="mx-auto ">
              Lampe
            </Link>

            <div
              className={`transition-all duration-500 ease-in-out block 
                ${isLampOpen ? 'rotate-180 -translate-x-1000' : ''}
                `}
            >
              <IoIosArrowForward />
            </div>
            <div
              className={`transition-all duration-500 ease-in-out block
                ${!isLampOpen ? 'rotate-180 -translate-x-1000 ' : 'mr-5'}
                `}
            >
              <IoIosArrowBack />
            </div>
          </div>
          {/* drop down */}
          {isLampOpen && <MobileMegaMenuLamp />}
        </li>

        {/* <li>
          <div
            className="text-black flex justify-between  uppercase text-xl border-b-1"
            onClick={() => setIsEclairgeOpen((prev) => !prev)}
          >
            <Link href="#" className="mx-auto ">
              Éclairage
            </Link>

            <div
              className={`transition-all duration-500 ease-in-out block 
                ${isEclairgeOpen ? 'rotate-180 -translate-x-1000' : ''}
                `}
            >
              <IoIosArrowForward />
            </div>
            <div
              className={`transition-all duration-500 ease-in-out block
                ${!isEclairgeOpen ? 'rotate-180 -translate-x-1000 ' : 'mr-5'}
                `}
            >
              <IoIosArrowBack />
            </div>
          </div>

          {isEclairgeOpen && <MobileMegaMenuEclairge />}
        </li> */}

        <li>
          <div
            className="text-black flex justify-between  uppercase text-xl border-b-1"
            onClick={() => setIsGuirlandeOpen((prev) => !prev)}
          >
            <Link href="#" className="mx-auto ">
              Guirlande
            </Link>

            <div
              className={`transition-all duration-500 ease-in-out block 
                ${isGuirlandeOpen ? 'rotate-180 -translate-x-1000' : ''}
                `}
            >
              <IoIosArrowForward />
            </div>
            <div
              className={`transition-all duration-500 ease-in-out block
                ${!isGuirlandeOpen ? 'rotate-180 -translate-x-1000 ' : 'mr-5'}
                `}
            >
              <IoIosArrowBack />
            </div>
          </div>
          {/* drop down */}
          {isGuirlandeOpen && <MobileMegaMenuGuirlande />}
        </li>

        <li>
          <div
            className="text-black flex justify-between  uppercase text-xl border-b-1"
            onClick={() => setIsDecorationOpen((prev) => !prev)}
          >
            <Link href="#" className="mx-auto ">
              Décoration
            </Link>

            <div
              className={`transition-all duration-500 ease-in-out block 
                ${isDecorationOpen ? 'rotate-180 -translate-x-1000' : ''}
                `}
            >
              <IoIosArrowForward />
            </div>
            <div
              className={`transition-all duration-500 ease-in-out block
                ${!isDecorationOpen ? 'rotate-180 -translate-x-1000 ' : 'mr-5'}
                `}
            >
              <IoIosArrowBack />
            </div>
          </div>
          {/* drop down */}
          {isDecorationOpen && <MobileMegaMenuDecoration />}
        </li>

        <li>
          <div
            className="text-black flex justify-between  uppercase text-xl border-b-1"
            onClick={() => setIsLampadaireOpen((prev) => !prev)}
          >
            <Link href="#" className="mx-auto ">
              Lampadaire
            </Link>

            <div
              className={`transition-all duration-500 ease-in-out block 
                ${isLampadaireOpen ? 'rotate-180 -translate-x-1000' : ''}
                `}
            >
              <IoIosArrowForward />
            </div>
            <div
              className={`transition-all duration-500 ease-in-out block
                ${!isLampadaireOpen ? 'rotate-180 -translate-x-1000 ' : 'mr-5'}
                `}
            >
              <IoIosArrowBack />
            </div>
          </div>
          {/* drop down */}
          {isLampadaireOpen && <MobileMegaMenuLampadaire />}
        </li>
      </ul>
    </div>
  );
};

export default MobileMegaMenu;

import React from "react";
import Link from "next/link";
import Image from "next/image";

import Lampes from "../../../public/assets/images/MobileTopMenuImages/Lampes.webp";
import Decorations from "../../../public/assets/images/MobileTopMenuImages/Decorations.webp";
import Lampadaires from "../../../public/assets/images/MobileTopMenuImages/Lampadaires.webp";
import Guirlandes from "../../../public/assets/images/MobileTopMenuImages/Guirlandes.jpg";
import Lanternes from "../../../public/assets/images/MobileTopMenuImages/Lanternes.webp";
import Arrivage from "../../../public/assets/images/MobileTopMenuImages/Arrivage.jpg";

const MobileTopMenu = () => {
  return (
    <div className="py-8 pr-3">
      <ul className="flex-col space-y-6">
        <li className="hover:opacity-80">
          <Link href="#">
            <Image src={Lampes} alt="Lampes"></Image>
          </Link>
        </li>
        <li className="hover:opacity-80">
          <Link href="#">
            <Image src={Decorations} alt="Decorations"></Image>
          </Link>
        </li>
        <li className="hover:opacity-80">
          <Link href="#">
            <Image src={Lampadaires} alt="Lampadaires"></Image>
          </Link>
        </li>
        <li className="hover:opacity-80">
          <Link href="#">
            <Image src={Guirlandes} alt="Guirlandes"></Image>
          </Link>
        </li>
        <li className="hover:opacity-80">
          <Link href="#">
            <Image src={Lanternes} alt="Lanternes"></Image>
          </Link>
        </li>
        <li className="hover:opacity-80">
          <Link href="#">
            <Image src={Arrivage} alt="Arrivage"></Image>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileTopMenu;

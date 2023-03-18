import React, { useState } from "react";
import style from "./SortBtn.module.scss";
import { useColorModeValue } from '@chakra-ui/react';

const SortBtn = ({ setSortTypeApp }) => {
  const [open, setOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState("Sort Trips");
  const textColor = useColorModeValue("black", "black");

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleNoFilter = () => {
    setSortTypeApp(0);
    setDisplayedText("Sort Trips");
    setOpen(false);
  };

  const handleMenuOne = () => {
    setSortTypeApp(1);
    setDisplayedText("Pris høy-lav");
    setOpen(false);
  };

  const handleMenuTwo = () => {
    setSortTypeApp(2);
    setDisplayedText("Pris lav-høy");
    setOpen(false);
  };

  const handleMenuThree = () => {
    setSortTypeApp(3);
    setDisplayedText("Rating høy-lav");
    setOpen(false);
  };

  const handleMenuFour = () => {
    setSortTypeApp(4);
    setDisplayedText("Rating lav-høy");
    setOpen(false);
  };

  const handleMenuFive = () => {
    setSortTypeApp(5);
    setDisplayedText("Lengde høy-lav");
    setOpen(false);
  };

  const handleMenuSix = () => {
    setSortTypeApp(6);
    setDisplayedText("Lengde lav-høy");
    setOpen(false);
  };

  return (
    <div className={style.dropdown}>
      <button className={style.btn} onClick={handleOpen}>
        {displayedText}
        <span className={`${style.arrow} ${open ? style.arrowUp : ''}`}>&#9660;</span>
      </button>
      <ul className={`${style.menu} ${open ? style.open : ''}`}>
        <li>
          <button style={{ color: textColor }} onClick={handleNoFilter}>Ingen</button>
        </li>
        <li>
          <button style={{ color: textColor }} onClick={handleMenuOne}>Pris høy-lav</button>
        </li>
        <li>
          <button style={{ color: textColor }} onClick={handleMenuTwo}>Pris lav-høy</button>
        </li>
        <li>
          <button style={{ color: textColor }} onClick={handleMenuThree}>Rating høy-lav</button>
        </li>
        <li>
          <button style={{ color: textColor }} onClick={handleMenuFour}>Rating lav-høy</button>
        </li>
        <li>
          <button style={{ color: textColor }} onClick={handleMenuFive}>Lengde høy-lav</button>
        </li>
        <li>
          <button style={{ color: textColor }} onClick={handleMenuSix}>Lengde lav-høy</button>
        </li>
      </ul>
    </div>
  );
}

export default SortBtn;

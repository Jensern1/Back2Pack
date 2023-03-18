import React, { useState } from "react";
import style from "./SortBtn.module.scss";

const SortBtn = ({ setSortTypeApp }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    setSortTypeApp(1);
    setOpen(false);
  };

  const handleMenuTwo = () => {
    setSortTypeApp(2);
    setOpen(false);
  };

  const handleMenuThree = () => {
    setSortTypeApp(3);
    setOpen(false);
  };

  const handleMenuFour = () => {
    setSortTypeApp(4);
    setOpen(false);
  };

  return (
    <div className={style.dropdown}>
      <button className={style.btn} onClick={handleOpen}>
        Sort Trips
        <span className={`${style.arrow} ${open ? style.arrowUp : ''}`}>&#9660;</span>
      </button>
      <ul className={`${style.menu} ${open ? style.open : ''}`}>
        <li>
          <button onClick={handleMenuOne}>Pris høy-lav</button>
        </li>
        <li>
          <button onClick={handleMenuTwo}>Pris lav-høy</button>
        </li>
        <li>
          <button onClick={handleMenuThree}>Rating høy-lav</button>
        </li>
        <li>
          <button onClick={handleMenuFour}>Rating lav-høy</button>
        </li>
      </ul>
    </div>
  );
}

export default SortBtn;

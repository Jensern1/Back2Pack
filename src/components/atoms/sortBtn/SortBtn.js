import React, { useState } from "react";
import style from "./SortBtn.module.scss";

const SortBtn = ({ setSortTypeApp }) => {
  const [open, setOpen] = useState(false);
  const [sortType, setSortType] = useState(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    setSortType(1);
    setSortTypeApp(1);
    console.log("Nummer en!");
    setOpen(false);
  };

  const handleMenuTwo = () => {
    setSortType(2);
    setSortTypeApp(2);

    console.log("Nummer to!");
    setOpen(false);
  };

  return (
    <div className={style.dropdown}>
      <button className={style.btn} onClick={handleOpen}>
        Dropdown
        {open ? (
          <span className={style.arrowUp}>&#9650;</span>
        ) : (
          <span className={style.arrowDown}>&#9660;</span>
        )}
      </button>
      {open ? (
        <ul className={style.menu}>
          <li>
            <button onClick={handleMenuOne}>Menu 1</button>
          </li>
          <li>
            <button onClick={handleMenuTwo}>Menu 2</button>
          </li>
        </ul>
      ) : null}
      {open ? <div>Is Open</div> : <div>Is Closed</div>}
    </div>
  );
};

export default SortBtn;

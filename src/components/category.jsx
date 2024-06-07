import React from "react";
import styles from "../styles/category.module.css"

export default function Category({ logo, title }) {
    let {holder,categoryConainer, btn}=styles
  return (
    <>
    <div className={holder}>
      <div className={categoryConainer}>
        <button className={btn}>
        {logo}
        <p >{title}</p>
        </button>
        
      </div>
      </div>
    </>
  );
}

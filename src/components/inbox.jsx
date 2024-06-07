import React from 'react'
import Category from './category';
import { FaRegSquare } from "react-icons/fa6";
import { IoRefresh } from "react-icons/io5";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaInbox } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";
import { BsTagsFill } from "react-icons/bs";
import { FaCircleInfo } from "react-icons/fa6";
import { BiSolidMessage } from "react-icons/bi";


import styles from "../styles/inbox.module.css"

export default function Inbox() {
  const categories=[
    {logo: <FaInbox/>, title:"Important"},
    {logo: <IoMdContacts/>, title:"Social"},
    {logo: <BsTagsFill/>, title:"Promotions"},
    {logo: <FaCircleInfo/>, title:"Update"},
    {logo: <BiSolidMessage/>, title:"Forums"}

  ];
  
    let {inboxContainer,divForEdit,leftEdit,rightEdit,square,refresh,dotedlines,arrow,category}= styles
  return (
    <>
    <div className={inboxContainer}>
      {/* edit */}
      <div className={divForEdit}>
      {/* left side */}
      <div className={leftEdit}>
        <FaRegSquare className={square}/>
        <IoRefresh className={refresh}/>
        <PiDotsThreeOutlineVerticalLight className={dotedlines}/>
      </div>
      {/* right side */}
       <div className={rightEdit}> 
          <p>1-50 of 354</p>
          <MdOutlineKeyboardArrowLeft className={arrow}/>
          <MdOutlineKeyboardArrowRight className={arrow}/>
       </div>

      </div>
      {/* categories */}
      <div className={category}>
        {categories.map((category, i)=><Category key={i} logo={category.logo} title={category.title}/>)}
      </div>
      {/* mail/messages */}
    </div>
    </>
  )
}

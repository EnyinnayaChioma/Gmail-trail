import React from 'react'
import styles from "../styles/emailCategory.module.css"

export default function EmailCategory({expeditor,messageTitle, message,timeStamp}) {
  let {EmailCatHolder,ExpeditorHolder,Expeditor,MessageTitleHolder,MessageTitle,MessageHolder,Message, timeStampHolder, TimeStamp} = styles;
  return (
    <>
    <div className={EmailCatHolder}>
      <div className={ExpeditorHolder}>
       <p className={Expeditor}> {expeditor}</p>
       </div>
       <div  className={MessageTitleHolder} >
        <p className={MessageTitle}>{messageTitle}</p>
        </div>
        <div className={MessageHolder}>
        <p className={Message}>{message.slice(0,90)}</p>
        </div>
        
        <div className={timeStampHolder}>
        <p className={TimeStamp}>{timeStamp}</p>
        </div>
      
    </div>
    
    </>
  )
}

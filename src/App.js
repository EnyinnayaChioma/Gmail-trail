import React from 'react'
import { useEffect } from 'react'
import Navbar from './components/navbar'
import Inbox from './components/inbox'
import Emails from './components/emails'
export default function App() {
  useEffect(()=>{},[])
  return (
    <div>
      {/* {Navbar} */}
      <Navbar/>
      {/* {LeftSidebar} */}
      <div>
      {/* {Inbox} */}
      <Inbox/>
      {/* {Email} */}
      <Emails/>
      {/* {RightSidebar} */}
      </div>
    </div>
  )
}

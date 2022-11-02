import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./order.scss";
import Table from "../../components/table/Table";

import React from 'react'

const Orders = () => {
  return (
    <div className="orders">
        <Sidebar/>
        <div className="orderContainer">
            <Navbar/>
        </div>
    </div>
  )
}

export default Orders
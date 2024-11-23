"use client";
import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";

const Header: React.FC = () => {
  let date = new Date();
  return (
    <header>
      <div className="header">
        <div className="logo">
          <Image src={logo} alt="logo" />
          <h1 className="logoTitle">FocalPoint</h1>
        </div>
        <div className="welcome">
          <h1>Bem-vindo de volta!</h1>
        </div>
        <div className="time">
          <p>
            {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

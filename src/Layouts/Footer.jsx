import React from "react";
import { CustomFooter } from "./Layout-style";

const Footer = () => {
  return (
    <CustomFooter>
      Copyright © {new Date().getFullYear()} Created By Kushan Madhusanka
    </CustomFooter>
  );
};

export default Footer;

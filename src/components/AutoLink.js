import React from "react";
import HoverLink from "./HoverLink";
import { validGermanPhoneNumber, validEmail } from "../services/Utils/regex";

const AutoLink = ({ to }) => {
  let status = 0;
  if (validGermanPhoneNumber.test(to)) status = 1;
  if (validEmail.test(to)) status = 2;

  switch (status) {
    case 1:
      return <HoverLink text={to} to={"tel:" + to} />;
    case 2:
      return <HoverLink text={to} to={"mailto:" + to} />;
    default:
      return <p>{to}</p>;
  }
};

export default AutoLink;

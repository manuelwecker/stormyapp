import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  min-width: 85%;
  display: inline-block;
  padding: 10px;
  margin: 0px, 10px, 10px, 10px;
  border: 1px solid $water-primary-color;
  background: $water-primary-color;
  color: $water-sixly-color;
  border-radius: 7px;
`;

export default function BtnSubmitPosition({ label }) {
  return <Button class="search__submit">{label}</Button>;
}

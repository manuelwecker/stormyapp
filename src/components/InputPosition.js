import React from "react";
import styled from "@emotion/styled";

const Position = styled.input`
  min-width: 85%;
  display: inline-block;
  padding: 20px;
  margin: 0px 10px 10px 10px;
  border: 1px solid $water-sixly-color;
  background: $water-fifthly-color;
  color: $water-sixly-color;
  border-radius: 7px;
`;

export default function InputPosition({ latt, long }) {
  return (
    <>
      <Position
        type="number"
        className="search__latt"
        value={latt}
        placeholder="Please enter Latitude"
      />
      <Position
        type="number"
        className="search__long"
        value={long}
        placeholder="Please enter Longitude"
      />
    </>
  );
}

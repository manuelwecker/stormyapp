import React from "react";
import styled from "@emotion/styled";

const ResultOutput = styled.div`
  margin: 10px 10px 10px 10px;
  padding: 10px;
  min-width: 75%;
  min-height: 250px;
  border-radius: 7px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1.1em;
`;

export default function Weather({ weatherdata }) {
  return <ResultOutput className="results">{weatherdata}</ResultOutput>;
}

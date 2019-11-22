import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalStyles() {
  const waterprimarycolor = "#032973";
  const watersecondarycolor = "#053ba6";
  const waterthirdlycolor = "#457abf";
  const waterfourthlycolor = "#14c5d9";
  const waterfifthlycolor = "#14d9d9";
  const warningprimarycolor = "#f29f05";
  const warningsecondarycolor = "#f27405";
  const warningthirdlycolor = "#d92b04";
  const watersixlycolor = "#ffffff";

  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          display: flex;
          align-items: center;
          flex-direction: column;
          padding: 0;
          height: 100vh;
          width: 100vw;
          font-family: "Roboto", sans-serif;
          background-image: url(https://images.unsplash.com/photo-1546214755-c5d22447b43b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1960&q=80);
          background-size: 140%;
          border-image-width: 100%;

          overflow: hidden;
        }
      `}
    />
  );
}

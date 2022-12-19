import React from "react";
import { TitleProps } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v6";

const { Link } = routerProvider;

export const Title: React.FC<TitleProps> = ({ collapsed }) => (
  <Link to="/">
    {collapsed ? (
      <img
        src={"/refine-collapsed.svg"}
        alt="Refine"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px 24px",
        }}
      />
    ) : (
      <img
        src={"/img.jpg"}
        alt="Refine"
        style={{
          width: "200px",
          padding: "12px 24px",
          height: "70px",
          objectFit: "cover",
        }}
      />
    )}
  </Link>
);

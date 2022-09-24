import React from "react";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { matchRoutes, useLocation } from "react-router-dom";

import enFlagIcon from "../../assets/en.svg";
import esFlagIcon from "../../assets/es.svg";
import hiFlagIcon from "../../assets/hi.svg";
import itFlagIcon from "../../assets/it.svg";
import ptFlagIcon from "../../assets/pt.svg";
import uaFlagIcon from "../../assets/ua.svg";

const LangSelector = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  return (
    <Select
      value={i18n.language}
      style={{ width: 100 }}
      onChange={(value) => i18n.changeLanguage(value)}
    >
      <Select.Option value="en">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={enFlagIcon}
            alt="en"
            style={{ width: 20, marginRight: 5 }}
          />
          EN
        </div>
      </Select.Option>
      <Select.Option value="es">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={esFlagIcon}
            alt="es"
            style={{
              width: 20,
              marginRight: 5,
              transform:
                location.pathname === "/sign-up" ? "scaleY(0.5)" : "none",
            }}
          />
          ES
        </div>
      </Select.Option>
      <Select.Option value="cn">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={ptFlagIcon}
            alt="pt"
            style={{ width: 20, marginRight: 5 }}
          />
          PT
        </div>
      </Select.Option>
      <Select.Option value="it">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={itFlagIcon}
            alt="it"
            style={{
              width: 20,
              marginRight: 5,
              transform:
                location.pathname === "/sign-up" ? "none" : "scaleX(-1.4)",
            }}
          />
          IT
        </div>
      </Select.Option>
      {location.pathname === "/sign-up" ? (
        <Select.Option value="ua">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={uaFlagIcon}
              alt="ua"
              style={{ width: 20, marginRight: 5 }}
            />
            UA
          </div>
        </Select.Option>
      ) : (
        <Select.Option value="hi">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={hiFlagIcon}
              alt="hi"
              style={{ width: 20, marginRight: 5 }}
            />
            HI
          </div>
        </Select.Option>
      )}
    </Select>
  );
};

export default LangSelector;

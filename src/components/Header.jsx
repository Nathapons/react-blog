import React from "react";

export default function Header() {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      items={new Array(15).fill(null).map((_, index) => {
        const key = index + 1;
        return {
          key,
          label: `nav ${key}`,
        };
      })}
    />
  );
}

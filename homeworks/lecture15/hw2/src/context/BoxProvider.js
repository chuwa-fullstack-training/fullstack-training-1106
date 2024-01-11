// BoxProvider.js
import React from 'react';
import { BoxContext } from './BoxContext';

export const BoxProvider = ({ children }) => {
    const [BOXS, setBOXS] = React.useState([{ color: "white", inputValue: 'first' },
    { color: "white", inputValue: 'second' },
    { color: "white", inputValue: 'third' },
    { color: "white", inputValue: 'forth' },
    { color: "white", inputValue: 'fifth' },
    { color: "white", inputValue: 'sixth' },
    ]);
    const COLORS = ["antiquewhite", "azure", "blueviolet", "chocolate", "cornflowerblue", "crimson", "dodgerblue", "forestgreen", "navy"];
    const handleBoxsChange = (index, newProperties) => {
        setBOXS(BOXS.map((box, i) => (i === index ? { ...box, ...newProperties } : box)));
    }
  return (
    <BoxContext.Provider value={{ BOXS, COLORS }}>
      {children}
    </BoxContext.Provider>
  );
};

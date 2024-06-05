import React, { useState } from 'react';

const SideMenu = ({ menuConfig }) => {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const handleToggleSubMenu = (title) => {
    setExpandedMenu((prevState) => (prevState === title ? null : title));
  };

  const renderSubItems = (subItems, title) => {
    if (!subItems || subItems.length === 0) return null;

    return (
      <ul data-test-id={`ul-${title.toLowerCase()}`}>
        {subItems.map((subItem) => (
          <li
            key={subItem.toLowerCase()}
            data-test-id={`li-${title.toLowerCase()}-${subItem.toLowerCase()}`}
          >
            {subItem}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="menu-wrapper">
      {menuConfig.map((menuItem) => (
        <div
          key={menuItem.title.toLowerCase()}
          data-test-id={`first-level-${menuItem.title.toLowerCase()}`}
        >
          <div>{menuItem.title}</div>
          {menuItem.subItems && menuItem.subItems.length > 0 && (
            <button
              data-test-id={`button-${menuItem.title.toLowerCase()}`}
              onClick={() => handleToggleSubMenu(menuItem.title)}
            >
              {expandedMenu === menuItem.title ? 'Hide' : 'Expand'}
            </button>
          )}
          {expandedMenu === menuItem.title &&
            renderSubItems(menuItem.subItems, menuItem.title)}
        </div>
      ))}
    </div>
  );
};

export default SideMenu;

import React, { useState } from "react";
import '../styles/nav-bar.css';

export default function NavbarItem(props) {
  const { itemValue, itemIcon, subItems, iconStyle } = props;
  const [showSubItems, setShowSubItems] = useState(false);

  const toggleSubItems = () => {
    setShowSubItems(!showSubItems);
  };

  return (
    <div className="item-container-sub-item" onClick={toggleSubItems}>
      <div className="item-content">
        <img style={iconStyle} src={itemIcon} alt="item-icon" className="item-icon" />
        <p className="item-text">{itemValue}</p>
      </div>
      {showSubItems && (
        <div className="sub-items">
          {subItems.map((subItem, index) => (
            <div key={index} className="sub-item">
              <img src={subItem.icon} alt="sub-item-icon" className="sub-item-icon" />
              <p className="sub-item-text">{subItem.value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

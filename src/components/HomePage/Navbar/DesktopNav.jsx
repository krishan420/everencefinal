import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DropdownMenu from "./DropdownMenu";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";

const DesktopNav = ({ navItems, activeMenu, handleMenuEnter, handleMenuLeave, 
  activeSubMenu, handleSubMenuEnter, handleSubMenuLeave, handleDropdownEnter, 
  handleDropdownLeave, handleCloseMenuDropdown }) => {
    
  const menuItems = useSelector((state) => state.navbar.menuItems);

  return (
    <nav className="hidden lg:flex items-center space-x-1 relative z-50">
      {navItems.map((item) => (
        <div key={item.name} className="relative group">
          <Link
            to={item.path}
            className="px-3 py-2 rounded-md text-sm font-medium dark:text-gray-300 text-gray-700 hover:dark:bg-gray-800 hover:bg-gray-100 transition-colors duration-200 flex items-center cursor-pointer"
            onMouseEnter={() => item.hasDropdown && handleMenuEnter(item.name)}
            onMouseLeave={() => item.hasDropdown && handleMenuLeave()}
          >
            <span className="mr-2 md:w-6 md:h-6 sm:w-5 sm:h-5">
              {item.icon}
            </span>
            {item.name}
            {item.hasDropdown && (
              <span className="ml-1">
                {activeMenu === item.name ? (
                  <FiChevronUp size={16} />
                ) : (
                  <FiChevronDown size={16} />
                )}
              </span>
            )}
          </Link>

          {item.hasDropdown && (
            <DropdownMenu
              item={item}
              activeMenu={activeMenu}
              menuItems={menuItems}
              activeSubMenu={activeSubMenu}
              handleSubMenuEnter={handleSubMenuEnter}
              handleSubMenuLeave={handleSubMenuLeave}
              handleDropdownEnter={handleDropdownEnter}
              handleDropdownLeave={handleDropdownLeave}
              handleCloseMenuDropdown={handleCloseMenuDropdown}
            />
          )}
        </div>
      ))}
    </nav>
  );
};

export default DesktopNav;
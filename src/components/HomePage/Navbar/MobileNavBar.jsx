
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiBookOpen,
  FiUser,
  FiFileText,
  FiAward,
  FiMail,
  FiChevronDown,
  FiChevronUp,
  FiArrowRight,
} from "react-icons/fi";
import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "./Search/SearchBar";
import { useEffect } from "react";
import { SafeImage } from "../../../lib/SafeImage";


const MobileNavBar = ({
  isOpen,
  setIsOpen,
  navItems,
  mobileActiveMenu,
  setMobileActiveMenu,
  mobileActiveSubMenu,
  setMobileActiveSubMenu,
  placementsSubMenu,
}) => {
  const menuItems = useSelector((state) => state.navbar.menuItems);
  const location = useLocation();
  const navigate = useNavigate();

  const handleCourseLink = (courseLink) => {
    navigate(courseLink);
  }

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "93vh" }} 
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden mt-2 overflow-hidden"
        >
          {/* Add a scrollable container */}
          <div className="h-full overflow-y-auto">
            {/* Mobile Search */}
            <SearchBar variant="mobile" />
            <div className="pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <button
                    className={`w-full text-left px-3 py-2 rounded-md text-md font-medium dark:text-gray-300 text-gray-700 hover:dark:bg-gray-800 hover:bg-gray-100 transition-colors flex items-center justify-between ${
                      mobileActiveMenu === item.name
                        ? "dark:bg-gray-800 bg-gray-100"
                        : ""
                    }`}
                    onClick={() => {
                      if (item.hasDropdown) {
                        if (mobileActiveMenu === item.name) {
                          setMobileActiveMenu(null);
                          setMobileActiveSubMenu(null);
                        } else {
                          setMobileActiveMenu(item.name);
                          setMobileActiveSubMenu(null);
                        }
                      } else {
                        setIsOpen(false);
                      }
                    }}
                  >
                    <Link to={`${item.path}`} className="w-full">
                    <div className="flex items-center text-lg w-full">
                      <span className="mr-2 w-5 h-5">{item.icon}</span>
                        {item.name}
                    </div>
                    </Link>
                    {item.hasDropdown && (
                      <span>
                        {mobileActiveMenu === item.name ? (
                          <FiChevronUp size={16} />
                        ) : (
                          <FiChevronDown size={16} />
                        )}
                      </span>
                    )}
                  </button>

                  {/* Mobile Courses Dropdown */}
                  {item.hasDropdown &&
                    mobileActiveMenu === item.name &&
                    item.name === "Courses" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-6 mt-1 mb-2 space-y-2"
                      >
                        {menuItems.map((course) => (
                          <div key={course.title}>
                            <button
                              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-between ${
                                mobileActiveSubMenu === course.title
                                  ? "dark:bg-gray-700 bg-gray-100"
                                  : ""
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                if (course.subMenu) {
                                  if (mobileActiveSubMenu === course.title) {
                                    setMobileActiveSubMenu(null);
                                  } else {
                                    setMobileActiveSubMenu(course.title);
                                  }
                                } else {
                                  setIsOpen(false);
                                  navigate(course.link)
                                }
                              }}
                            >
                              <div className="flex items-center">
                                <span className="mr-2">
                                  <SafeImage
                                    src={course.icon}
                                    alt="course icon"
                                    className="w-6 h-6 -mt-2 md:w-9 md:h-9 md:mt-2"
                                  />
                                </span>
                                <Link to={course.link}>
                                  <div>
                                    <div className="font-medium text-lg">
                                      {course.title}
                                    </div>
                                    <div className="text-md text-gray-500 dark:text-gray-400">
                                      {course.description}
                                    </div>
                                  </div>
                                </Link>
                              </div>
                              {course.subMenu && (
                                <FiArrowRight className="ml-2 text-gray-400" />
                              )}
                            </button>

                            {/* Mobile Sub-menu Dropdown */}
                            {course.subMenu &&
                              mobileActiveSubMenu === course.title && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="ml-4 mt-1 space-y-1"
                                >
                                  <h4 className="px-3 py-1 text-md font-semibold text-gray-800 dark:text-white">
                                    {course.title} Courses
                                  </h4>
                                  {course.subMenu.map((subItem) => (
                                    <Link
                                      key={subItem.title}
                                      to={subItem.link}
                                      className="block px-3 py-2 rounded-md text-md dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-100 transition-colors"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setIsOpen(false);
                                      }}
                                    >
                                      {subItem.title}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                          </div>
                        ))}
                      </motion.div>
                    )}

                  {/* Mobile Placements Dropdown */}
                  {item.hasDropdown &&
                    mobileActiveMenu === item.name &&
                    item.name === "Placements" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-6 mt-1 mb-2 space-y-1"
                      >
                        {placementsSubMenu.map((subItem) => (
                          <Link
                            key={subItem.menu}
                            to={subItem.link}
                            className="block px-3 py-2 rounded-md text-md dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-100 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.menu}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavBar;
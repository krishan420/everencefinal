import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { SafeImage } from "../../../lib/SafeImage";

const DropdownMenu = ({
  item,
  activeMenu,
  menuItems,
  activeSubMenu,
  handleSubMenuEnter,
  handleSubMenuLeave,
  handleDropdownEnter,
  handleDropdownLeave,
  handleCloseMenuDropdown
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: activeMenu === item.name ? 1 : 0,
        y: activeMenu === item.name ? 0 : 10,
        visibility: activeMenu === item.name ? "visible" : "hidden",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`absolute left-0 mt-1 ${
        item.name === "Courses"
          ? "w-[700px] p-4 grid grid-cols-2 gap-2"
          : "w-56 p-2"
      } bg-slate-50/75 dark:bg-gray-800/75 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 rounded-lg shadow-xl z-50 border border-gray-200/70 dark:border-gray-700/50`}
      onMouseEnter={handleDropdownEnter}
      onMouseLeave={handleDropdownLeave}
    >
      {item.name === "Courses" && (
        <>
          {menuItems.map((course) => (
            <Link to={course.link} 
            key={course.title} 
            onClick={() => handleCloseMenuDropdown()}
            >
              <div
                className="relative group"
                onMouseEnter={() =>
                  course.subMenu && handleSubMenuEnter(course.title)
                }
                onMouseLeave={handleSubMenuLeave}
              >
                <div
                  className={`p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-start ${
                    activeSubMenu === course.title
                      ? "bg-gray-100 dark:bg-gray-700"
                      : ""
                  }`}
                  // Add mouse events here as well to ensure they work even if bubbling is prevented
                  onMouseEnter={(e) => {
                    e.stopPropagation(); // Prevent duplicate events
                    course.subMenu && handleSubMenuEnter(course.title);
                  }}
                  // onClick={() => handleCloseMenuDropdown()}
                >
                  <span className="text-2xl mr-3 text-purple-600 dark:text-purple-400">
                    <SafeImage
                      src={course.icon}
                      alt="course icon"
                      className="w-9 h-9 mt-2"
                      onMouseEnter={(e) => {
                        e.stopPropagation();
                        course.subMenu && handleSubMenuEnter(course.title);
                      }}
                    />
                  </span>
                  <div
                    className="flex-1"
                    onMouseEnter={(e) => {
                      e.stopPropagation();
                      course.subMenu && handleSubMenuEnter(course.title);
                    }}
                  >
                    <h3 className="font-medium dark:text-white text-gray-800">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {course.description}
                    </p>
                  </div>
                  {course.subMenu && (
                    <FiArrowRight
                      className="ml-2 text-gray-400 self-center"
                      onMouseEnter={(e) => {
                        e.stopPropagation();
                        course.subMenu && handleSubMenuEnter(course.title);
                      }}
                    />
                  )}
                </div>

                {course.subMenu && (
                  <SubMenuDropdown
                    course={course}
                    activeSubMenu={activeSubMenu}
                    handleSubMenuEnter={handleSubMenuEnter}
                    handleSubMenuLeave={handleSubMenuLeave}
                  />
                )}
              </div>
            </Link>
          ))}
        </>
      )}

      {item.name === "Placements" && (
        <PlacementsDropdown
          subMenu={item.subMenu}
          handleSubMenuEnter={handleSubMenuEnter}
          handleSubMenuLeave={handleSubMenuLeave}
        />
      )}
    </motion.div>
  );
};

const SubMenuDropdown = ({
  course,
  activeSubMenu,
  handleSubMenuEnter,
  handleSubMenuLeave,
}) => (
  <motion.div
    initial={{
      opacity: 0,
      x: course.position === "left" ? 10 : -10,
    }}
    animate={{
      opacity: activeSubMenu === course.title ? 1 : 0,
      x:
        activeSubMenu === course.title
          ? 0
          : course.position === "left"
          ? 10
          : -10,
      visibility: activeSubMenu === course.title ? "visible" : "hidden",
    }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className={`absolute ${
      course.position === "left" ? "right-full mr-2" : "left-full ml-2"
    } top-0 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 z-50 border border-gray-200/50 dark:border-gray-700/50 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800`}
    onMouseEnter={() => handleSubMenuEnter(course.title)}
    onMouseLeave={handleSubMenuLeave}
  >
    <h4 className="font-semibold text-gray-800 dark:text-white mb-2 px-2">
      {course.title} Courses
    </h4>
    <ul className="space-y-1">
      {course.subMenu.map((subItem) => (
        <li key={subItem.title}>
          <Link
            to={subItem.link}
            // onClick={() => handleCloseMenuDropdown()}
            className="block px-3 py-2 rounded-md text-sm dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            {subItem.title}
          </Link>
        </li>
      ))}
    </ul>
  </motion.div>
);

const PlacementsDropdown = ({
  subMenu,
  handleSubMenuEnter,
  handleSubMenuLeave,
}) => (
  <ul className="space-y-1">
    {subMenu.map((subItem) => (
      <li key={subItem.link}>
        <Link
          to={subItem.link}
          className="block px-3 py-2 rounded-md text-sm dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-100 transition-colors duration-200"
          onMouseEnter={() => subItem.menu && handleSubMenuEnter(subItem.menu)}
          onMouseLeave={handleSubMenuLeave}
        >
          {subItem.menu}
        </Link>
      </li>
    ))}
  </ul>
);

export default DropdownMenu;

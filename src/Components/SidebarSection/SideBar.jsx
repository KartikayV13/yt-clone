import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../UseConstextHook/UseContextApi";
import { useTheme } from "../../UseConstextHook/UseTheme";
import { categories, menuItems } from "../../Utils/Constant";
import MenuItems from "../SuggestionSection/MenuItems";

const SideBar = () => {
  const { mobileMenu, selectedCategory, setSelectedCategory } = useAppContext();
  const { isDarkMode } = useTheme();

  const navigate = useNavigate();

  const handleCategoryClick = (id, name) => {
    setSelectedCategory(id);
    if (name === "Home") {
      navigate("/");
    }
  };

  return (
    <div
      className={`md:block overflow-y-auto h-full py-4 w-[300px] border-r-2 absolute md:relative z-10 scrollbar-none ${
        mobileMenu ? "block" : "hidden"
      } ${
        isDarkMode
          ? " bg-gray-900 border-gray-700 scrollbar-thumb-gray-600"
          : " bg-white border-gray-200 scrollbar-thumb-gray-300"
      } ${mobileMenu ? "z-10" : "z-auto"}`}
    >
      <div className="flex flex-col px-5 mb-20">
        {categories.map((item) => (
          <MenuItems
            key={item.id}
            item={item}
            isSelected={item.id === selectedCategory}
            onclick={() => handleCategoryClick(item.id, item.name)}
          />
        ))}
        <hr
          className={`my-3 ${
            isDarkMode ? "border-gray-600" : "border-gray-300"
          }`}
        />

        {menuItems.map((item) => (
          <MenuItems key={item.name} item={item} isSelected={false} />
        ))}
        <hr
          className={`my-3 ${
            isDarkMode ? "border-gray-600" : "border-gray-300"
          }`}
        />
        <div className="flex items-center text-sm justify-center ">
          Clone By - KK
        </div>
      </div>
    </div>
  );
};

export default SideBar;

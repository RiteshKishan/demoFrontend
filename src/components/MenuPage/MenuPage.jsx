import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminLogo from '../../Assests/admin-icon.svg';
import "../MenuPage/MenuPage.css";
import MenuList from "../menuList/menuList";
const MenuPage = () => {
  const [menuData, setMenuData] = useState([]);
  const [subMenu, setSubMenu] = useState([]);
  const BASE_URL = "https://demobackend-s85p.onrender.com/";

  useEffect(() => {
    const getFoodData = async () => {
      try {
        const res = await axios.get(BASE_URL + "getMenu");
        setMenuData(res.data);
        setSubMenu(res.data[0].subMenu);
      } catch (err) {
        console.log("Error fetching menu data:", err);
      }
    };
    getFoodData();
  }, []);

  const getSubMenuData = async (itemName) => {
    try {
      const res = await axios.get(BASE_URL + "getSubMenu", {
        params: { itemName },
      });
      setSubMenu(res.data);
    } catch (err) {
      console.log("Error fetching submenu data:", err);
    }
  };

  const handleAdminLogin = () => {
    window.location.href = '/AdminLogin';
  }

  return (
    <div>
      <header className="menuHeader">
        <div className="headerLogo">Our Digital Menu</div>
        <img src={AdminLogo} alt="" className="AdminLogin" onClick={handleAdminLogin} />
      </header>
      <div className="menubutton">
        {menuData.map((data) => (
          <button key={data.itemName} onClick={() => getSubMenuData(data.itemName)}>
            {data.itemName}
          </button>
        ))}
      </div>
      <MenuList data={subMenu} />
    </div>
  );
};

export default MenuPage;

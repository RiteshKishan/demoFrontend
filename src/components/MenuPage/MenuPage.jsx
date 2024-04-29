import React, { useEffect, useState } from "react";
import "../MenuPage/MenuPage.css";
import axios from "axios";
import MenuList from "../menuList/menuList";
import AdminLogo from '../../Assests/admin-icon.svg';

const MenuPage = () => {

    const [menuData, setMenuData] = useState([]);
    const [subMenu, setSubMenu] = useState([]);
    const BASE_URL = "https://demobackend-s85p.onrender.com/";
    // const BASE_URL = "http://localhost:3000/";
  
    useEffect(() => {
      const getFoodData = async (e) => {
        try {
          await axios.get(BASE_URL + "getMenu").then((res) => {
            setMenuData(res.data);
            setSubMenu(res.data[0].subMenu)
            // (res.data).map((i)=>{
            //   setSubMenu(...subMenu, i.subMenu)
            // })
          });
        } catch (err) {
          console.log(err);
        }
      };
      getFoodData();
    }, []);
  
    const getSubMenuData = async (e) => {
      try {
        await axios
          .get(BASE_URL + "getSubMenu", {
            params: { itemName: e.target.innerText },
          })
          .then((res) => {
            setSubMenu([]);
            setSubMenu(res.data);
          });
      } catch (err) {
        console.log(err);
      }
    };
    const handleAdminLogin = (e) => {
        window.location.href = '/AdminLogin';
    
    }

  return (
    <div>
      <header className="menuHeader">
        <div className="headerLogo">Our Menu</div>
        <img src={AdminLogo} alt="" className="AdminLogin" onClick={handleAdminLogin} />
      </header>
      <div className="menubutton">
        {menuData.map((data) => (
          <button key={data.itemName} onClick={getSubMenuData}>
            {data.itemName}
          </button>
        ))}
      </div>
      <MenuList data={subMenu} />
    </div>
  );
};

export default MenuPage;

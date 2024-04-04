import "./App.css";
import MenuList from "./components/menuList/menuList";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [menuData, setMenuData] = useState([]);
  const [subMenu, setSubMenu] = useState([]);
  const BASE_URL = "https://demobackend-s85p.onrender.com/";

  useEffect(() => {
    const getFoodData = async (e) => {
      try {
        await axios.get(BASE_URL + "getMenu").then((res) => {
          setMenuData(res.data);
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

  return (
    <div className="App">
      <header>
        <div className="headerLogo">Our Menu</div>
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
}

export default App;

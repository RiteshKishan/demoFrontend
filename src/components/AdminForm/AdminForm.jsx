import React, { useState, useEffect } from "react";
import "../AdminForm/AdminForm.css";
import DeleteIcon from "../../Assests/delete.svg";
import axios from "axios";

const AdminForm = () => {
  const [menuItemName, setMenuItemName] = useState("");
  const [displayAddNewForm, setDisplayAddNewForm] = useState(false);
  const BASE_URL = "https://demobackend-s85p.onrender.com/";
  const [menuData, setMenuData] = useState([]);

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
  const handleMenuItemName = (e) => {
    setMenuItemName(e.target.value);
  };
  const handleMenuSubmit = (e) => {
    e.preventDefault();
    setMenuItemName("");
    setDisplayAddNewForm(false);
  };

  const handleAddNew = () => {
    setDisplayAddNewForm(true);
  };

  return (
    <div>
      <button className="addNewButton" onClick={handleAddNew}>
        Add new Menu Item
      </button>

      {displayAddNewForm ? (
        <form
          action="submit"
          onSubmit={handleMenuSubmit}
          className="menuInputForm"
        >
          <input
            type="text"
            name="menuItemName"
            onChange={handleMenuItemName}
            value={menuItemName}
            placeholder="Enter Menu Item Name"
          />
          <input type="submit" value="Submit" className="menuSubmit" />
        </form>
      ) : (
        ""
      )}

      <div className="menuItemList">
        <div className="menuListContainer">
          {menuData.map((data)=>{
          <div className="menuListBtnOption">
            <a href="#?" class="menuListBtn">
              {data.itemName}
            </a>
            <img src={DeleteIcon} alt="" />
          </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminForm;

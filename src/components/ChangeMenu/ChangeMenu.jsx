import React, { useState } from "react";
import "../ChangeMenu/ChangeMenu.css";

const ChangeMenu = () => {
  const [displayAddnewForm, setdisplayAddnewForm] = useState(false);
  const menuFormData = {
    menuName: "",
    menuImage: "",
    menuDesc: "",
    menuPrice: "",
  };
  const [menuData, setMenuData] = useState(menuFormData);
  const handleMenuImage = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setMenuData({ ...menuData, menuImage: reader.result });
    };
    reader.onerror = (error) => {
      console.log("error: ", error);
    };
  };
  const handleMenuName = (e) => {
    setMenuData({ ...menuData, menuName: e.target.value });
  };
  const handleMenuDesc = (e) => {
    setMenuData({ ...menuData, menuDesc: e.target.value });
  };
  const handleMenuPrice = (e) => {
    setMenuData({ ...menuData, menuPrice: e.target.value });
  };
  const handleMenuFormSubmit = (e) => {
    setdisplayAddnewForm(false);
  }
  return (
    <div>
      <div className="changeMenuHeading">
        Make Changes in <span>BreakFast</span>
      </div>
      <button className="addNewBtn" onClick={()=>setdisplayAddnewForm(true)}>
        Add New Menu +
      </button>

      {displayAddnewForm ? (
        <div className="addNewForm">
          <form
            action="submit"
            onSubmit={handleMenuFormSubmit}
            className="addNewMenuForm"
          >
            <input
              type="text"
              name="menuName"
              placeholder="Enter menuName"
              onChange={handleMenuName}
            /><br/>
            <input
              type="file"
              name="menuImage"
              placeholder="Enter menuImage"
              className="addNemMenuFile"
              onChange={handleMenuImage}
            /><br/>
            <input
              type="text"
              name="menuDesc"
              placeholder="Enter menuDescription"
              onChange={handleMenuDesc}
            /><br/>
            <input
              type="number"
              name="menuPrice"
              placeholder="Enter menuPrice"
              onChange={handleMenuPrice}
            /><br/>
            <input type="submit" name="submit" value="submit menuForm" className="addNewMenuFormBtn"  />
          </form>
        </div>
      ) : (
        ""
      )}

      <div className="menuItamList">
        
      </div>
    </div>
  );
};

export default ChangeMenu;

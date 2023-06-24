import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex  justify-between border-borderColor border-b px-5 py-6">
      {/* search bar  */}
      <div className="w-[40%]">
        <input
          type="text"
          placeholder="Search for anything..."
          className="w-[100%]"
        />
      </div>
      {/* right container  */}
      <div>
        {/* 3 three  container*/}
        <div></div>
        {/* profile container */}

        <div>{/* name ,address  */}</div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";

const HeaderMenu = ({ title }: { title: string }) => {
  return (
    <>
      <div className="p-8">
        <h3 className="text-2xl text-center">{title}</h3>
      </div>
    </>
  );
};

export default HeaderMenu;

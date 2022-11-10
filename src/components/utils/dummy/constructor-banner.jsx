import React from "react";

const ConstructorBanner = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        paddingLeft: 10,
        height: 200,
      }}
      className="constructor-banner text text_type_main-medium"
    >
      Выберите начинку
    </div>
  );
};

export default ConstructorBanner;

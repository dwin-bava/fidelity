import React from "react";

function HeaderComponent({ icon, title }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          padding: "5px",
          color: "white",
          backgroundColor: "black",
          fontSize: "20px",
          textTransform: "uppercase",
          borderRadius: "5px",
          fontWeight: "700",
        }}
      >
        <div style={{ marginRight: "10px", marginBottom: "5px", marginLeft:'5px' }}>{icon}</div>
        {title}
      </div>
    </div>
  );
}

export default HeaderComponent;

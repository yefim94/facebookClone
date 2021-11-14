import React from 'react';

import '../SidebarRow.css';

function SidebarRow({ src, title }) {
  return (
    <div className="sidebarRow">
      <i style={{
        fontSize: "40px",
        color: "#2e81f4"
      }}class={src}></i>
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
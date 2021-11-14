import React from 'react';
import SidebarRow from './SidebarRow.js';
import '../Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarRow">
        <img width="40" style={{borderRadius: "50%"}}src="https://cdn.discordapp.com/attachments/802185099448680538/909201325814849587/Screen_Shot_2021-11-13_at_5.00.38_PM.png"/>
        <h4>Yefim Blokh</h4>
      </div>
      <SidebarRow
        src="fas fa-user-nurse"
        title="COVID-19 Information Center"
      />
      <SidebarRow src="fas fa-images" />
      <SidebarRow src="fas fa-users" />
      <SidebarRow src="fab fa-facebook-messenger" title="Messanger" />
      <SidebarRow src='fas fa-mail-bulk' title="Marketplace" />
      <SidebarRow src='fas fa-video' title="Videos" />
      <SidebarRow src='fas fa-caret-square-down' title="More" />
    </div>
  );
}

export default Sidebar;
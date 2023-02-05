import React from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topbar/TopBar";
import './style.css'
export const Home = () => {
  return (
  <>
    <TopBar />
    <div className="homeContainer">
    <Sidebar />
    <Feed />
    <Rightbar />
    </div>
  
  </>
  );
};

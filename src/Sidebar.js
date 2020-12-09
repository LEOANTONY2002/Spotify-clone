import React from "react";
import "./Sidebar.css";
import SideOpt from "./SideOpt";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playList }, dispatch] = useDataLayerValue();
  console.log(playList);
  return (
    <div className="sidebar">
      <img
        className="sb_logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt=""
      />
      <SideOpt Icon={HomeIcon} title="Home" />
      <SideOpt Icon={SearchIcon} title="Search" />
      <SideOpt Icon={LibraryMusicIcon} title="Your Libraryhome" />
      <br />
      <strong className="sb_title">PLAYLISTS</strong>
      <hr />
      {playList?.items?.map((item) => (
        <SideOpt title={item.name} />
      ))}
    </div>
  );
}

export default Sidebar;

import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import logo from "./logo.png";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Song from "./Song";

function Body({ spotify }) {
  const [{ dw }, dispatch] = useDataLayerValue();

  const playPL = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:4VJaNe9io5nWOb23qTGXCI`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="Body">
      <Header spotify={spotify} />
      <div className="b_info">
        <img className="b_img" src={dw?.images[0].url} alt="" />
        <div className="infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{dw?.description}</p>
        </div>
      </div>
      <div className="songs">
        <div className="b_icons">
          <PlayCircleFilledIcon className="shuf" onClick={playPL} />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {dw?.tracks.items.map((item) => (
          <Song track={item.track} playSong={playSong} />
        ))}
      </div>
    </div>
  );
}

export default Body;

import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFronUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFronUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((pl) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: pl,
        });
      });
      spotify.getPlaylist("4VJaNe9io5nWOb23qTGXCI").then((resp) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          dw: resp,
        });
      });
      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );
      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
    }
  }, [token, dispatch]);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;

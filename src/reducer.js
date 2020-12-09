import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  //token:
  //"BQCswwVUER5aQsQCcvUbTxI3IL5ieACVYyGpJJkaiMocKJ2GLaC9chZApDVyPM35xIM-_mpUdtUXkbFOQrBgKsaS0WNmD9TNSMipYQSC6BP3KxtXzYtdLVmw3ugc7CFEtCoGfDfZRdJHm0U9xy1VyHw_scGXLHH00n7YljgB3qqh8iqQbVHn",
  playList: [],
  spotify: null,
  playing: false,
  item: null,
  top_artists: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playList: action.playlists,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        dw: action.dw,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    default:
      return state;
  }
};

export default reducer;

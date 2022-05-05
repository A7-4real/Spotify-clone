// importing React, useEffect, useState
import React, { useEffect, useState } from "react";
// importing app.css
import "./App.css";
// importing Login page
import Login from "./Login";
// importing getTokenFromUrl function which contains the token from spotify.js
import { getTokenFromUrl } from "./spotify";
// Spotify web Api for using spotify services
import SpotifyWebApi from "spotify-web-api-js";
// importing player component
import Player from "./Player";
// importing Data layer
import { useDataLayerValue } from "./DataLayer";

// Universal object for Spotify Web Api
const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  // Run code based on a given condition
  useEffect(() => {
    // hash(token) using getTokenFromUrl
    const hash = getTokenFromUrl();
    // removing the hash from the url for safety purpose
    window.location.hash = "";
    // converting hash to token
    const _token = hash.access_token;

    if (_token) {
      // dispatching token to DataLayer using reducer
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // Connecting to spotify-web-API using setAccessToken and providing the token
      spotify.setAccessToken(_token);

      // getting the user object
      spotify.getMe().then((user) => {
        // dispatch user to data layer
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
    console.log("I have a token -> ", _token);
    console.log(user);
    console.log(token);
  }, []);

  spotify.getUserPlaylists().then(
    (playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      });
    },
    [token, dispatch]
  );

  return (
    // BEM
    <div className="app">
      {/* if user has token than load Player component else load Login component */}
      {token ? <Player /> : <Login />}
      {/* Login component */}
    </div>
  );
}

export default App;

// client id -->  e51fb27eb6b5486a8ef78f1b789e86f7

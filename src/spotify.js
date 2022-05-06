import { Component } from "react";

// All spotify logic come here (with help from Spotify developer site)
// Its not a Component

// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// The URI endpoint for handling the USER AUTHENTICATION using spotify developer API
export const authEndpoint = "https://accounts.spotify.com/authorize";

// Redirect the user to redirectUri as soon as user authorization stuff is over successfully
const redirectUri = "http://localhost:3000/";

// Client ID is the unique identifier of your application.
const clientId = "e51fb27eb6b5486a8ef78f1b789e86f7";

// Authorization Scopes
// In order to use the Spotify Platform, you need to familiarise yourself with scopes.
//  Scopes provide Spotify users using third-party apps the confidence that only the information they choose to share will be shared, and nothing more.

// Users scopes using Spotify WEB API
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

// Final login url with all the queries and request!
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const axios = require("axios");
const qs = require("qs");

/***
 * Attempts to get the Spotify playlist information
 */
const main = module.exports = async function (playlistId, clientId, clientSecret, options = null) {
    let response = null;
    try {
        response = await authenticate(clientId, clientSecret);
    } catch (e) {
        throw e;
    }

    let token = response.data.access_token;
    let results = null;
    try {
        results = await axios({
            url: "https://api.spotify.com/v1/playlists/" + playlistId,
            method: "get",
            headers: {"Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + token}
        });
    } catch (e) {
        if (e.response.status === 400) {
            throw new Error("spotifypl: Bad client credentials");
        } else if (e.response.status === 404) {
            throw new Error("spotifypl: Playlist not found");
        }
    }
    return results;
}

/***
 * Validates whether the given url is a valid Spotify playlist url
 */
main.validatePublicPlaylistURL = async function (url, clientId, clientSecret) {
    let isPlaylistURL = false;
    const regex = /^(?:http:\/\/|https:\/\/)?(open.spotify.com\/playlist\/){1}([a-zA-Z0-9]+){1}?/;
    isPlaylistURL = url.match(regex);
    if (isPlaylistURL === null) {
        return false;
    }

    try {
        return this.validatePublicPlaylistId(isPlaylistURL[2], clientId, clientSecret);
    } catch (e) {
        throw e;
    }
}

/***
 * Validates whether the given id is a valid Spotify playlist id
 */
main.validatePublicPlaylistId = async function (id, clientId, clientSecret) {
    let response = null;
    try {
        response = await authenticate(clientId, clientSecret);
    } catch (e) {
        throw e;
    }

    let token = response.data.access_token;
    let isPlaylist = false;
    try {
        await axios({
            url: "https://api.spotify.com/v1/playlists/" + id,
            method: "get",
            headers: {"Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + token}
        });
        isPlaylist = true;
    } catch (e) {
        if (e.response.status === 400) {
            throw new Error("spotifypl: Bad client credentials");
        } else if (e.response.status === 404) {
            isPlaylist = false;
        }
    } finally {
        return isPlaylist;
    }
}

/***
 * Gets the playlist ID given in the Spotify link
 */
main.getIdFromURL = function (url) {
    const regex = /^(?:http:\/\/|https:\/\/)?(open.spotify.com\/playlist\/){1}([a-zA-Z0-9]+){1}?/;
    let regexResults = url.match(regex);
    if (regexResults === null) {
        throw new Error("spotifypl: Invalid URL");
    }

    return regexResults[2];
}

/***
 * Authenticates using the client credentials workflow for the Spotify Web API
 */
async function authenticate(clientId, clientSecret) {
    try {
        return retVal = await axios({
            url: "https://accounts.spotify.com/api/token",
            method: "post",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            auth: {
                username: clientId,
                password: clientSecret,
                },
            data: qs.stringify({grant_type: 'client_credentials'})
        });
    } catch (e) {
        if (e.response.status === 400) {
            throw new Error("spotifypl: Bad client credentials");
        }
    }
}

// GET https://api.spotify.com/v1/playlists/{playlist_id}

// GET https://api.spotify.com/v1/playlists/{playlist_id}/tracks - Playlist Tracks

// GET https://api.spotify.com/v1/playlists/{playlist_id}/images - Playlist Cover Image
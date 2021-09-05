<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">spotifypl</h3>

  <p align="center">
    A simple spotify playlist library
    <br />
    <a href="https://github.com/acpoppe/spotifypl/issues">Report Bug</a>
    ·
    <a href="https://github.com/acpoppe/spotifypl/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

A simple spotify playlist library


### Built With

* [axios](https://github.com/axios/axios)
* [qs](https://github.com/ljharb/qs)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites
* [node](https://nodejs.org/en/download/package-manager/)
* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Navigate to the directory of the project you are using it in
   ```sh
   cd /somePath/ToYourProject
   ```
3. Install from NPM
   ```sh
   npm install spotifypl
   ```



<!-- USAGE EXAMPLES -->
## Usage

### `async spotifypl(playlistId, clientId, clientSecret, [options])`

`playlistId` - The ID of the playlist taken from the URL or returned from `getIdFromURL`

`clientId` - The Client ID obtained by registering your application with Spotify

`clientSecret` - The Client Secret obtained by registering your application with Spotify

`options` - Currently not used, but coming in the future

Returns: `playlistResults` - The results from Spotify's API
<br />

### `async spotifypl.validatePublicPlaylistURL(playlistURL, clientId, clientSecret)`

`playlistURL` - The URL of the playlist

`clientId` - The Client ID obtained by registering your application with Spotify

`clientSecret` - The Client Secret obtained by registering your application with Spotify

Returns: `urlIsValid` - Boolean indicating whether or not the URL is a valid playlist URL
<br />

### `async spotifypl.validatePublicPlaylistId(playlistId, clientId, clientSecret)`

`playlistId` - The ID of the playlist taken from the URL or returned from `getIdFromURL`

`clientId` - The Client ID obtained by registering your application with Spotify

`clientSecret` - The Client Secret obtained by registering your application with Spotify

Returns: `idIsValid` - Boolean indicating whether or not the ID is a valid playlist ID
<br />

### `spotifypl.getIdFromURL(playlistURL)`

`playlistURL` - The URL of the playlist

Returns: `playlistId` - The ID of the playlist



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/acpoppe/spotifypl/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See LICENSE for more information.



<!-- CONTACT -->
## Contact

Allison Poppe - [@alliepoppe](https://twitter.com/alliepoppe) - allisonpoppe89@gmail.com

Project Link: [https://github.com/acpoppe/spotifypl](https://github.com/acpoppe/spotifypl)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/acpoppe/spotifypl.svg?style=for-the-badge
[contributors-url]: https://github.com/acpoppe/spotifypl/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/acpoppe/spotifypl.svg?style=for-the-badge
[forks-url]: https://github.com/acpoppe/spotifypl/network/members
[stars-shield]: https://img.shields.io/github/stars/acpoppe/spotifypl.svg?style=for-the-badge
[stars-url]: https://github.com/acpoppe/spotifypl/stargazers
[issues-shield]: https://img.shields.io/github/issues/acpoppe/spotifypl.svg?style=for-the-badge
[issues-url]: https://github.com/acpoppe/spotifypl/issues
[license-shield]: https://img.shields.io/badge/Licence-Apache%202.0-blue.svg?style=for-the-badge
[license-url]: https://github.com/acpoppe/spotifypl/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/allison-poppe-2426a7193

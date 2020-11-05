
 <h1 align="center">React YouTube Clone Application</h1>
 
<p align="center">
This application is a React application. It is a clone of YouTube Application.
</p>

<p align="center">
<a href="https://ytsearchclone.web.app/">
      <img alt="Website" src="https://img.shields.io/website?down_color=critical&up_color=blueviolet&url=https://ytsearchclone.web.app/" />
    </a><a href="https://github.com/sabesansathananthan/react-youtube-search-clone">
      <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/sabesansathananthan/react-youtube-search-clone" />
    </a><a href="https://github.com/sabesansathananthan/react-youtube-search-clone/search?l=JavaScript&type=code">
      <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/sabesansathananthan/react-youtube-search-clone?color=yellow" />
    </a>
</p>


## 🛠️ Built with

- [React JS](https://reactjs.org/) - Front-End JavaScript library
- [Material UI](https://material-ui.com/) - React UI Framework
- [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser

## Installation

To setup the app for development on your local machine, please follow the instructions below:

1. Clone the repo to your machine

```bash
git clone https://github.com/sabesansathananthan/react-youtube-search-clone.git
cd react-youtube-search-clone
```

2. Install packages

   If you use `npm`

   ```bash
   npm install
   ```

   or

   If you use `yarn`

   ```bash
   yarn
   ```

3. Add the Youtube API key
      
      You need to insert your api key inside the `handleSubmit` function in [App.js](./src/App.js).

```JavaScript
 handleSubmit = async (searchTearm) => {
    const response = await YTData.get("search", {
      params: {
        part: "snippet",
        maxResults: 6,
        key: "key",
        q: searchTearm,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
```

4. Run the development server

   If you use `npm`

   ```bash
   npm start
   ```

   or

   If you use `yarn`

   ```bash
   yarn start
   ```

5. Visit <http://localhost:3000>

## [Live Demo](https://ytsearchclone.web.app/)

## 📄 License

This project is licensed under the GNU License - see the [LICENSE](./LICENSE) file for details

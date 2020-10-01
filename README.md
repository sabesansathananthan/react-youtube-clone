# YouTube Clone

This application is a React application. It is a clone of YouTube Application. You cloud view the application through the [link]().

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

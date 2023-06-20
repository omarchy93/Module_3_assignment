function getRequest() {
    let url = "https://api.example.com/data";

    axios
      .get(url)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  getRequest();
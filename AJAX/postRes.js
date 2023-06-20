function postRequest() {
    let url = "https://api.example.com/submit";
    let payload = {
      name: "John Doe",
      email: "johndoe@example.com",
    };

    axios
      .post(url, payload)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  postRequest();
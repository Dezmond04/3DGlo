const getSend = () => {
  let user;
  const getData = () => {
    fetch("db.json")
      .then((response) => response.json())
      .then((data) => {
        user = data;
      })
      .catch("Ошибка");
  };
  const sendData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        user,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .catch("Ошибка");
  };
  getData();
  // sendData();
  setTimeout(sendData, 1000);
};
export default getSend;

const getData = async () => {
  const response = await fetch("https://swapi.dev/api/people/1/", {
    method: "GET",
  });

  const data = await response.json();
  document.getElementById("info").innerHTML = data.name;
  console.log("działa");
};

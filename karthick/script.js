console.log("testing");

console.log("dummy");
let movieName = document.getElementById("movieName");
let submit = document.getElementById("submit");
let fetch1 = document.getElementById("fetch");
let query = "";
let update1 = document.getElementById("update");
let delete1 = document.getElementById("delete");

let fetching = async () => {
  let response = await fetch(
    "https://627f71ccbe1ccb0a465fd36c.mockapi.io/movieAPI"
  );
  let data = await response.json();

  console.log("fetched data=", data);
};

let posting = async (data1) => {
  let response = await fetch(
    "https://627f71ccbe1ccb0a465fd36c.mockapi.io/movieAPI",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data1),
    }
  );

  let data = await response.json();
  console.log("data added successfully");
};

let updating = async (data1) => {
  let response = await fetch(
    "https://627f71ccbe1ccb0a465fd36c.mockapi.io/movieAPI/140",
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data1),
    }
  );

  let data = await response.json();
  console.log("data updated ");
};

let deleting = async () => {
  let response = await fetch(
    "https://627f71ccbe1ccb0a465fd36c.mockapi.io/movieAPI/140",
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }
  );

  let data = await response.json();
  console.log("data deleted ");
};

movieName.addEventListener("keydown", (e) => {
  query = query.concat(e.key);
});

submit.addEventListener("click", () => {
  posting({ name: query });
});

fetch1.addEventListener("click", () => {
  fetching();
});

update1.addEventListener("click", () => {
  updating({ name: "mersal" });
});
delete1.addEventListener("click", () => {
  deleting();
});

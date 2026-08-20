/*
In your src/main.ts file, create TypeScript interface definitions to map out the shape of the data you are fetching. You should create multiple small interfaces to handle the nested data cleanly.
Create interfaces for:
i. UserName (should include first and last as strings)
ii. UserLocation (should include city and country as strings)
iii. UserPicture (should include large as a string)
iv. User (should include name, email, location, and picture, linking to the interfaces above)
v. ApiResponse (should include results, which is an array of User objects)

*/

interface UserName {
  first: string;
  last: string;
}

interface UserLocation {
  city: string;
  country: string;
}

interface UserPicture {
  large: string;
}

interface User {
  name: UserName;
  email: string;
  location: UserLocation;
  picture: UserPicture;
}

interface ApiResponse {
  results: User[];
}

const profilePic = document.getElementById("profile-pic") as HTMLImageElement;
const fullname = document.getElementById("fullname") as HTMLHeadingElement;
const email = document.getElementById("email") as HTMLParagraphElement;
const location = document.getElementById("location") as HTMLParagraphElement;
const fetchBtn = document.getElementById("fetch-btn") as HTMLButtonElement;

const fetchRandomUser = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data: ApiResponse = await response.json();
    console.log(data);
    profilePic.setAttribute("src", data.results[0].picture.large);
    fullname.innerText =
      data.results[0].name.first + " " + data.results[0].name.last;
    email.innerText = data.results[0].email;
    location.innerText =
      data.results[0].location.city + ", " + data.results[0].location.country;
  } catch (e) {
    console.log(e);
  }
};

fetchBtn.addEventListener("click", fetchRandomUser);

fetchRandomUser();

(window as any).fetchRandomUser = fetchRandomUser;

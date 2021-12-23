console.log("JavaScript IS running");
// The Reading List
let books = [
  {
    name: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    alreadyRead: false,
  },
  {
    name: "Wuthering Heights",
    author: "Emily Brontë",
    alreadyRead: true,
  },
  {
    name: "Eat That Frog",
    author: "Brian Tracy",
    alreadyRead: true,
  },
  {
    name: "The Secret",
    author: "Rhonda Byrne",
    alreadyRead: true,
  },
];
for (i = 0; i <= 3; i++) {
  console.log(books[i].name + " by " + books[i].author);
}
console.clear();
for (i = 0; i <= 3; i++) {
  if (books[i].alreadyRead) {
    console.log(
      `You have already read "${books[i].name}", by ${books[i].author}`
    );
  } else {
    console.log(
      `You still need to read "${books[i].name}", by ${books[i].author}.`
    );
  }
}

// The Recipe Card
console.clear();
let myRecipe = {
  title: "Pepperoni Pizza",
  numOfServings: 4,
  ingredients: [
    "16 ounces pizza dough, store-bought or homemade",
    "18 to 20 slices pepperoni",
    "1/2 teaspoon ground black pepper",
    "1 teaspoon fresh oregano, optional",
    "Flour for rolling and shaping dough",
  ],
};
console.log(myRecipe.title);
console.log(`Serves: ${myRecipe.numOfServings}`);
console.log("Ingredients:");
for (i = 0; i <= 4; i++) {
  console.log(`- ${myRecipe.ingredients[i]}`);
}

// The Movie Database
console.clear();
let myFavoriteMovie = {
  title: "Inception",
  duration: 148,
  director: "Christopher Nolan",
  stars: [
    "Leonardo DiCaprio",
    "Ken Watanabe",
    "Joseph Gordon-Levitt",
    "Marion Cotillard",
    "Elliot Page",
  ],
};
console.log(
  `'${myFavoriteMovie.title}' lasts for ${
    myFavoriteMovie.duration
  } minutes, and was directed by ${
    myFavoriteMovie.director
  }. Stars: ${myFavoriteMovie.stars
    .slice(0, myFavoriteMovie.stars.length - 1)
    .join(", ")} and ${
    myFavoriteMovie.stars[myFavoriteMovie.stars.length - 1]
  }.`
);

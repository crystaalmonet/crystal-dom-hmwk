let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
let titleEl = getElementById('main-title');
  titleEl.innerHTML = <h1> home </h1>

  // Part 2
let bodyEl = document.body;
  bodyEl.style.backgroundColor = 'hotpink';

  // Part 3
// Select the DOM's Favorite Things list
let favoriteThingsList = document.querySelector('#favorite-things');

let lastListItem = favoriteThingsList.lastElementChild;
favoriteThingsList.removeChild(lastListItem);


  // Part 4
let specialTitle = document.querySelectorAll('.special-title');
  for (let i=0; i < specialTitle.length; i++) {
    specialTitle[i].style.fontSize = '2rem';
  }
  // Part 5
let pastRaces = document.querySelector('#past-races');
  let chiCity = pastRaces.querySelector('li:nth-child(4)');
  pastRaces.removeChild(chiCity);

  // Part 6
let newCityItem = document.createElement('li');
  let newCity = 'Miami';
  newCityItem.textContent = newCity;
pastRaces.appendChild(newCityItem);
  // Part 7

let mainContainer = document.querySelector('.main');
let newBlogPost = document.createElement('div');
newBlogPost.classList.add('blog-post');
let newTitle = document.createElement('h2');
newTitle.textContent = 'Miami'; 

let newText = document.createElement('p');
newText.textContent = 'I DROVE MY CAR THROUGH THE VERSACE MANSION!'; 

newBlogPost.appendChild(newTitle);
newBlogPost.appendChild(newText);
mainContainer.appendChild(newBlogPost);


  // Part 8
  const randomQuote = function() {
  document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
};
  let quoteTitle = document.querySelector('#quote-title');
 randQuote.addEventListener('click', function() {
   randomQuote(); 
 });

  // Part 9

let blogPost = document.querySelectorAll('.blog-post')
  blogPosts.forEach(function(blogPost) {
  blogPost.addEventListener('mouseout', function() {
    blogPost.classList.toggle('purple');
  });
  blogPost.addEventListener('mouseenter', function() {
    blogPost.classList.toggle('red');
  });
});
    


});

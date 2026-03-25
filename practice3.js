const quotes = [
  {
    quote: ` "It always seems impossible until it's done. "`,
    person: "_Nelson Mandela",
  },
  {
    quote: `"The only way to do great work is to love what you do."`,
    person: " _Steve Jobs",
  },
  {
    quote: `"Believe you can and you're halfway there. _"`,
    person: " _Theodore Roosevelt",
  },
  {
    quote: ` "Success is not final, failure is not fatal: it is the courage to continue that counts."`,
    person: " _Winston Churchill ",
  },
  {
    quote: ` "The information you consume each day is the soil from which your future thoughts grow."`,
    person: "_James Clear",
  },
  {
    quote: `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,
    person: "_Albert Einstein ",
  },
  {
    quote: ` "Making one person smile can change the world, maybe not the whole world, but their world."`,
    person: "_Winston Churchil",
  },
];

let generate = document.getElementById("btn");
const quoteDisplayHere = document.getElementById("quote-text");
const personDisplayHere = document.getElementById("person-name");

generate.addEventListener("click", function create() {
  let random = Math.floor(Math.random() * quotes.length);
  quoteDisplayHere.innerText = quotes[random].quote;
  personDisplayHere.innerText = quotes[random].person;
  generate.style.backgroundColor= "orange"
});

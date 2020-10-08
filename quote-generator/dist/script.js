const quoteDisplay = document.querySelector('#quote')
const button = document.querySelector('button')
const quotes = [
  "To conquer oneself is a greater victory than to conquer thousands in a battle- Dalai Lamma",
  
  "Any improvements made anywhere besides the bottleneck are an illusion- Gene Kim",
  
  "The only way you are going to have success is to have lots of failures first- Sergey Brin",
  
  "Success is a lousy teacher. It seduces smart people into thinking they can’t lose-Bill Gates",
  
  "Quiet people have the loudest minds- Stephen Hawkins",
  
  "Great spirits have always encountered violent opposition from mediocre minds",
  
  "You shouldn't do things differently just because they're different. They need to be... better - Elon Musk",
  
  
  
 ]

function showQuote() {
    //your code
    let randomNumber = Math.floor(Math.random() * quotes.length)
    let randomQuote = quotes[randomNumber]
    quoteDisplay.innerHTML = randomQuote
}
  
  button.addEventListener('click', showQuote)
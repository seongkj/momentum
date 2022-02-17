const quotes = [
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quote:
        "The world is a book and those who do not travel read only one page.",
      author: "Saint Augustine",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      quote: "To Travel is to Live",
      author: "Hans Christian Andersen",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Never go on trips with anyone you do ntot love.",
      author: "Hemmingway",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: "Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  //Math.random() 0~1까지의 랜덤 값을 준다. quotes.length가 10 이므로 0~10의 값을 구할 수 있다.
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
  console.log(Math.floor(Math.random()*quotes.length));
  console.log(Math.floor(Math.random()*quotes.length));
  console.log(quotes[Math.floor(Math.random()*quotes.length)].quote);
  console.log(quotes[Math.floor(Math.random()*quotes.length)].author);
  //위처럼 랜덤 함수 자체를 반복해서 쓰면 서로 다른 랜덤 값이 반복해서 나온다.
  //내가 하고싶은건 랜덤으로 구해진 수를 여러곳에서 사용하는 것이다
  //변수로 만들어 주고 변수를 여러곳에서 사용하면 같은 랜덤값을 이용 가능
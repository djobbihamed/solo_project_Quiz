$(document).ready(function() {
  var quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      text: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      author: "Albert Schweitzer"
    },
    {
      text: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
    },
    {
      text: "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
      author: "Mark Zuckerberg"
    }
  ]

  var favorites = []

  function RandomQuote() {
    var random = Math.floor(Math.random() * quotes.length)
    return quotes[random]
  }

  function display() {
    var quote = RandomQuote()
    $('#quote-text').text(quote.text)
    $('#quote-author').text("- " + quote.author)
  }

  function addQuote() {
    var quote = {
      text: $('#quote-text').text(),
      author: $('#quote-author').text()
    }
    console.log(quote);
    favorites.push(quote)
    console.log(favorites,"fav");
    var favoriteQuotes = $(`<li>${quote.text}  ${quote.author}  </li>`)
 
    $('#favorites-list').append(favoriteQuotes)
    console.log($('#favorites-list').children()[0]);
  }

  function clear() {
    $('#favorites-list').empty()
    favorites = []
  }

  $('#new-quote-btn').click(function() {
    display()
  });

  $('#favorite-btn').click(function() {
    console.log('hello');
    addQuote() 
  });

  $('#clear-favorites-btn').click(function() {
    clear()
  });
  
  $('#share-btn').click(function() {
    var quote = $('#quote-text').text()
    var author = $('#quote-author').text()
    navigator.share({
      title: 'inspirational quote',
      text: quote + ' - ' + author
    })
  })

   display()
})

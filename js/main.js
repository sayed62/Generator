const quotes = [{
    quote: `"Live as if you were to die tomorrow. Learn as if you were to live forever."`,
    writer: `-Mahatma Gandhi`
},
{
    quote: `"Without music, life would be a mistake."`,
    writer: `-Friedrich Nietzsche, Twilight of the Idols`
},
{
    quote: `" Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book."`,
    writer: `-John Green, The Fault in Our Stars`
},
{
    quote: `" All you need is love. But a little chocolate now and then doesn't hurt."`,
    writer: `-Charles M. Schulz`
},
{
    quote: ` "If one cannot enjoy reading a book over and over again, there is no use in reading it at all."`,
    writer: `-Oscar Wilde`
},
{
    quote: `"If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales."`,
    writer: `-Albert Einstein`
},
]

var btn = document.querySelector('#sbnt');
var quote = document.querySelector('.quote');
var writer= document.querySelector('.writer');

function generateQuote(){
    const random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML= quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
}


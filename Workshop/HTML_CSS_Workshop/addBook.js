//document.getElementById("add").innerHTML = "Add Books Here!";

function addBookFunction() {
         
        
         var books=[{bookId:1, bookName:"The Concepts of C",price:"350.00"},
                    {bookId:2, bookName:"Java",price:"450.00"},
                    {bookId:3, bookName:"JavaScript",price:"300.00"}];

//books.splice(0,{bookId:4, bookName:"HTML5 and CSS3",price:"400.00"});
document.getElementById("add").innerHTML = books;
//books.push({bookId:4, bookName:"HTML5 and CSS3",price:"400.00"});
//document.getElementById("add1").innerHTML = books;

//books.forEach(book=>(console.log(book)));
        }


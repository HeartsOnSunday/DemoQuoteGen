/*global $ */

// https://talaikis.com/random_quotes_api/
// https://dev.twitter.com/web/tweet-button/web-intent
// https://fonts.google.com/
// http://fontawesome.io/icons/

var qGenerator = {
    quote: "",
    author: "",
    //create a function within the object to house the ajax call
    getQuote: function(){
        //You cannot reference the var quotes because that would be referencing the object inside of the object
        var that = this;
        $.ajax({
            //youve basically created another object
            method: "GET",
            url: "https://talaikis.com/api/quotes/random/",
            dataType: "json",
            //write another function
            success: function(data) {
                console.log(data); //make sure it works
                that.quote = data.quote;
                that.author = data.author;
               // that.displayQuote();
                // moving the displayQuote() function here will let your ajax call bring up the data
                // and the information will be called by the ajax and it will be ready to display.
                // the display quote function will no longer run BEFORE the ajax call
            }
        });
    },
    displayQuote: function(){
        console.log("display");
        document.getElementById("insertQuote").innerHTML = qGenerator.quote;
        document.getElementById("insertAuthor").innerHTML = qGenerator.author;
    }
    
};

document.getElementById("newQuote").onclick = function(){
    qGenerator.getQuote();
    qGenerator.displayQuote();
}

document.getElementById("postTwitter").onclick = function(){
    window.open('https://twitter.com/intent/tweet?text=' + '"' + qGenerator.quote+'"'+'-'+qGenerator.author);
    
}


qGenerator.getQuote();
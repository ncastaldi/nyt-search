$(document).ready(function () {
    var ourKey = "api-key=1WBWLFRE0TVzmnp7LTXL3REw56z4UbX3";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    var searchTerm = prompt("enter search term");
    var facet = true;
    var pubYear = prompt("Enter year to search:")

    $.ajax({
        url: queryURL + ourKey + "&" + searchTerm + "&" + pubYear,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
})
// Select elements from DOM 
let elWrapper = document.querySelector("#wrapper");
let elForm = document.querySelector("#form");
var elSearchInput = document.querySelector("#search_input")
let elCategorySelect = document.querySelector("#category-select");
let elRating = document.querySelector("#rating");
let elSort = document.querySelector("#rating_sort");
let elBtn = document.querySelector("#btn");
let elTitle = document.querySelector("#search-result");
let elTemplate = document.querySelector("#movie_card").content;

// Get movies list
let slicedMovies = movies.slice(0, 10);

let normolizedMovieList = slicedMovies.map(function (item, index) {
    
    return {
        movie_id : ++index,
        movie_title : item.Title.toString(),
        movie_year : item.movie_year,
        movie_categories : item.Categories,
        movie_info : item.summary,
        movie_rating : item.imdb_rating,
        movie_img : `http://img.youtube.com/vi/${item.ytid}mqdefault.jpg`,
        movie_youtube : `https://www.youtube.com/watch?v=${item.ytid}`
    }
})
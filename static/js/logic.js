
genre_list = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy',
 'History', 'Horror', 'Music','Mystery', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western']

top20MoviesCSV = "../static/data/top_20_movies_and_posters.csv"

popularTMDB = "https://api.themoviedb.org/3/movie/popular?" 
languageEnglish = "&language=en-US&page=1"
API_KEY = "api_key=800fce5ab1ec74ebb99a75833c65f3df"
popularMoviesAPI = popularTMDB + API_KEY + languageEnglish

console.log(popularMoviesAPI)
// make csv changeable & filterable
  d3.json(popularMoviesAPI).then(function(top20data) {
  // d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
      
    console.log(top20data.results)

    d3.select(".image_gallery").selectAll("div")
    .data(top20data.results)
    .enter() // creates placeholder for new data
    .append("div") // appends a div to placeholder
    .style("height", "500", "width", "357")
    .classed("box col-sm-6 col-md-4 col-lg-3 col-xl-2", true) // sets the class of the new div
    
    .html(function(d) {
      return `<h3 style="text-align: center"> ${d.title}</h3> <br> <img height="500" width="357" src="https://image.tmdb.org/t/p/w500/${d.poster_path}">`;
    })
    
    ; // sets the html in the div to an image tag with the link  

      
    }).catch(function(error) {
      console.log(error);
    });






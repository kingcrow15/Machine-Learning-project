
d3.csv("../static/data/top_20_movies_and_posters.csv").then(function(top20data) {
// d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
    
  console.log(top20data)

  d3.select(".image_gallery").selectAll("div")
  .data(top20data)
  .enter() // creates placeholder for new data
  .append("div") // appends a div to placeholder
  .style("height", "500", "width", "357")
  .classed("box col-sm-6 col-md-4 col-lg-3 col-xl-2", true) // sets the class of the new div
  .html(function(d) {
    return `<img height="500" width="357" src="${d.poster_URL}">`;
  })
  
  ; // sets the html in the div to an image tag with the link  

    
  }).catch(function(error) {
    console.log(error);
  });






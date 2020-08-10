
d3.csv("./../top_20_movies_and_posters.csv").then(function(Data) {
    console.log(Data)
});

// csv1 = "../top_20_movies_and_posters.csv"

// d3.csv(csv1).then(function (data) {
//   console.log(data)
// });

// on("load", function (d) {
//     var g = d3.select(this); // The node
//             var div = d3.select("body").append("div")
//                     .attr("class", "mvPoster")
//                     .img("FIRST LINE <br> SECOND LINE")
//                     .style("left", (d.x + 50 + "px"))
//                     .style("top", (d.y +"px"));
// });




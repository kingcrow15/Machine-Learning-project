
// console.log(qualified)
console.log("HI");
d3.json("/search").then(function(dc){
  console.log(dc)
  
});


genre_list = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy',
 'History', 'Horror', 'Music','Mystery', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western']


function init() {
  d3.json("/search").then(function(dc){
    console.log(dc)
    var Movies  = dc
    console.log(Movies.post)
      
    //  (x =0; x < count; x++) {
    d3.select(".image_gallery").selectAll("div")
    .data(Movies.title)
    .enter()
    // .append("p")
    // .text("hello!!!")
    .append("div") // appends a div to placeholder
    .style("height", "500", "width", "357")
    .classed("box col-sm-6 col-md-4 col-lg-3 col-xl-2", true) // sets the class of the new div
    
    .html(function(data) {
      console.log(data)
      return `<h3 style="text-align: center"> <br> </h3><img height="500" width="357" src="https://image.tmdb.org/t/p/original${(data)}">`;
    })
    .exit()
  }).catch(function(error) {
    console.log(error);
  });
  // <img height="500" width="357" src="https://image.tmdb.org/t/p/original${(data)}">
    // 
}





top20MoviesCSV = "../static/data/top_20_movies_and_posters.csv"

popularTMDB = "https://api.themoviedb.org/3/movie/popular?" 
languageEnglish = "&language=en-US&page=1"
API_KEY = "api_key=800fce5ab1ec74ebb99a75833c65f3df"
popularMoviesAPI = popularTMDB + API_KEY + languageEnglish


function PopularMoviePopulate() {
// make csv changeable & filterable
  d3.json(popularMoviesAPI).then(function(top20data) {
  // d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
      
    // console.log(top20data.results)

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
};

function clearContent() {
  d3.select(".image_gallery")
  .selectAll("div")
  .remove()
}

ActionMoviesTMDB = "https://api.themoviedb.org/3/discover/movie?" 
languageEnglish = "&language=en-US&page=1"
ActionMoviesTMDB_part2 = "a&sort_by=popularity.desc&include_adult=false&include_video=false"
page_number = "&page=1"
ActionMoviesTMDB_part3 = "&with_genres=28"
 
ActionMoviesAPI = ActionMoviesTMDB + API_KEY + languageEnglish + ActionMoviesTMDB_part2 + page_number + ActionMoviesTMDB_part3

// console.log(ActionMoviesAPI)
// make csv changeable & filterable
function ActionMoviePopulate() {
  d3.json(ActionMoviesAPI).then(function(top20data) {
  // d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
      
    // console.log(top20data.results)

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
  };

  function BOB() {
    var movie_name = d3.select("#search").node().value;
    d3.select("#search").node().value = "";
  // alert(movie_name);
  AdventureMoviesAPI = AdventureMoviesTMDB + API_KEY + languageEnglish + AdventureMoviesTMDB_part2 + page_number + AdventureMoviesTMDB_part3
  
  "https://api.themoviedb.org/3/search/movie?api_key=800fce5ab1ec74ebb99a75833c65f3df&language=en-US&query=inception&page=1&include_adult=false"
  api_call = "https://api.themoviedb.org/3/search/movie?"
  api_call2 = "&language=en-US&query=" + movie_name + "&page=1&include_adult=false"
  
  search = api_call + API_KEY + api_call2
  
  console.log(search)
    d3.json(search).then(function (top20data) {
      // d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
  
      console.log(top20data.results)
  
      d3.select(".image_gallery").selectAll("div")
        .data(top20data.results)
        .enter() // creates placeholder for new data
        .append("div") // appends a div to placeholder
        .style("height", "500", "width", "357")
        .classed("box col-sm-6 col-md-4 col-lg-3 col-xl-2", true) // sets the class of the new div
  
        .html(function (d) {
          return `<h3 style="text-align: center"> ${d.title}</h3> <br> <img height="500" width="357" src="https://image.tmdb.org/t/p/w500/${d.poster_path}">`;
        })
  
        ; // sets the html in the div to an image tag with the link  
  
  
    }).catch(function (error) {
      console.log(error);
    });
  };

  AdventureMoviesTMDB = "https://api.themoviedb.org/3/discover/movie?" 
  languageEnglish = "&language=en-US&page=1"
  AdventureMoviesTMDB_part2 = "a&sort_by=popularity.desc&include_adult=false&include_video=false"
  page_number = "&page=1"
  AdventureMoviesTMDB_part3 = "&with_genres=12"
  API_KEY = "api_key=800fce5ab1ec74ebb99a75833c65f3df"
  
  AdventureMoviesAPI = AdventureMoviesTMDB + API_KEY + languageEnglish + AdventureMoviesTMDB_part2 + page_number + AdventureMoviesTMDB_part3
  
  // console.log(AdventureMoviesAPI)
  // make csv changeable & filterable
  function AdventureMoviePopulate() {
    d3.json(AdventureMoviesAPI).then(function(top20data) {
    // d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
        
      // console.log(top20data.results)
  
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
    };

  AnimationMoviesTMDB = "https://api.themoviedb.org/3/discover/movie?" 
  languageEnglish = "&language=en-US&page=1"
  AnimationMoviesTMDB_part2 = "a&sort_by=popularity.desc&include_adult=false&include_video=false"
  page_number = "&page=1"
  AnimationMoviesTMDB_part3 = "&with_genres=16"
  API_KEY = "api_key=800fce5ab1ec74ebb99a75833c65f3df"
  
  AnimationMoviesAPI = AnimationMoviesTMDB + API_KEY + languageEnglish + AnimationMoviesTMDB_part2 + page_number + AnimationMoviesTMDB_part3
  
  // console.log(AnimationMoviesAPI)
  // make csv changeable & filterable
  function AnimationMoviePopulate() {
    d3.json(AnimationMoviesAPI).then(function(top20data) {
    // d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
        
      // console.log(top20data.results)
  
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
    };

    ComedyMoviesTMDB = "https://api.themoviedb.org/3/discover/movie?" 
    languageEnglish = "&language=en-US&page=1"
    ComedyMoviesTMDB_part2 = "a&sort_by=popularity.desc&include_adult=false&include_video=false"
    page_number = "&page=1"
    ComedyMoviesTMDB_part3 = "&with_genres=35"
    
    ComedyMoviesAPI = ComedyMoviesTMDB + API_KEY + languageEnglish + ComedyMoviesTMDB_part2 + page_number + ComedyMoviesTMDB_part3
    
    // console.log(ComedyMoviesAPI)
    // make csv changeable & filterable
    function ComedyMoviePopulate() {
      d3.json(ComedyMoviesAPI).then(function(top20data) {
      // d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
          
        // console.log(top20data.results)
    
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
      };

      CrimeMoviesTMDB = "https://api.themoviedb.org/3/discover/movie?" 
      languageEnglish = "&language=en-US&page=1"
      CrimeMoviesTMDB_part2 = "a&sort_by=popularity.desc&include_adult=false&include_video=false"
      page_number = "&page=1"
      CrimeMoviesTMDB_part3 = "&with_genres=80"
      
      CrimeMoviesAPI = CrimeMoviesTMDB + API_KEY + languageEnglish + CrimeMoviesTMDB_part2 + page_number + CrimeMoviesTMDB_part3
      
    


      // console.log(CrimeMoviesAPI)
      // make csv changeable & filterable
      function CrimeMoviePopulate() {
        d3.json(CrimeMoviesAPI).then(function(top20data) {
        // d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
            
          // console.log(top20data.results)
      
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
        };

        DocumentaryMoviesTMDB = "https://api.themoviedb.org/3/discover/movie?" 
        languageEnglish = "&language=en-US&page=1"
        DocumentaryMoviesTMDB_part2 = "a&sort_by=popularity.desc&include_adult=false&include_video=false"
        page_number = "&page=1"
        DocumentaryMoviesTMDB_part3 = "&with_genres=99"
        
        DocumentaryMoviesAPI = DocumentaryMoviesTMDB + API_KEY + languageEnglish + DocumentaryMoviesTMDB_part2 + page_number + DocumentaryMoviesTMDB_part3
        
        // console.log(DocumentaryMoviesAPI)
        // make csv changeable & filterable
        function DocumentaryMoviePopulate() {
          d3.json(DocumentaryMoviesAPI).then(function(top20data) {
          // d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
              
            // console.log(top20data.results)
        
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
          };

          DramaMoviesTMDB = "https://api.themoviedb.org/3/discover/movie?" 
          languageEnglish = "&language=en-US&page=1"
          DramaMoviesTMDB_part2 = "a&sort_by=popularity.desc&include_adult=false&include_video=false"
          page_number = "&page=1"
          DramaMoviesTMDB_part3 = "&with_genres=18"
          
          DramaMoviesAPI = DramaMoviesTMDB + API_KEY + languageEnglish + DramaMoviesTMDB_part2 + page_number + DramaMoviesTMDB_part3
          
          // console.log(DramaMoviesAPI)
          // make csv changeable & filterable
          function DramaMoviePopulate() {
            d3.json(DramaMoviesAPI).then(function(top20data) {
            // d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
                
              // console.log(top20data.results)
          
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
            };

            FamilyMoviesTMDB = "https://api.themoviedb.org/3/discover/movie?" 
            languageEnglish = "&language=en-US&page=1"
            FamilyMoviesTMDB_part2 = "a&sort_by=popularity.desc&include_adult=false&include_video=false"
            page_number = "&page=1"
            FamilyMoviesTMDB_part3 = "&with_genres=10751"
            
            FamilyMoviesAPI = FamilyMoviesTMDB + API_KEY + languageEnglish + FamilyMoviesTMDB_part2 + page_number + FamilyMoviesTMDB_part3
            
            // console.log(FamilyMoviesAPI)
            // make csv changeable & filterable
            function FamilyMoviePopulate() {
              d3.json(FamilyMoviesAPI).then(function(top20data) {
              // d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
                  
                // console.log(top20data.results)
            
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
              };

              FantasyMoviesTMDB = "https://api.themoviedb.org/3/discover/movie?" 
              languageEnglish = "&language=en-US&page=1"
              FantasyMoviesTMDB_part2 = "a&sort_by=popularity.desc&include_adult=false&include_video=false"
              page_number = "&page=1"
              FantasyMoviesTMDB_part3 = "&with_genres=14"
              
              FantasyMoviesAPI = FantasyMoviesTMDB + API_KEY + languageEnglish + FantasyMoviesTMDB_part2 + page_number + FantasyMoviesTMDB_part3
              
              // console.log(FantasyMoviesAPI)
              // make csv changeable & filterable
              function FantasyMoviePopulate() {
                d3.json(FantasyMoviesAPI).then(function(top20data) {
                // d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
                    
                  // console.log(top20data.results)
              
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
                };

                HistoryMoviesTMDB = "https://api.themoviedb.org/3/discover/movie?" 
                languageEnglish = "&language=en-US&page=1"
                HistoryMoviesTMDB_part2 = "a&sort_by=popularity.desc&include_adult=false&include_video=false"
                page_number = "&page=1"
                HistoryMoviesTMDB_part3 = "&with_genres=36"
                
                HistoryMoviesAPI = HistoryMoviesTMDB + API_KEY + languageEnglish + HistoryMoviesTMDB_part2 + page_number + HistoryMoviesTMDB_part3
                
                // console.log(HistoryMoviesAPI)
                // make csv changeable & filterable
                function HistoryMoviePopulate() {
                  d3.json(HistoryMoviesAPI).then(function(top20data) {
                  // d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
                      
                    // console.log(top20data.results)
                
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
                  };

                  HorrorMoviesTMDB = "https://api.themoviedb.org/3/discover/movie?" 
                  languageEnglish = "&language=en-US&page=1"
                  HorrorMoviesTMDB_part2 = "a&sort_by=popularity.desc&include_adult=false&include_video=false"
                  page_number = "&page=1"
                  HorrorMoviesTMDB_part3 = "&with_genres=27"
                  
                  HorrorMoviesAPI = HorrorMoviesTMDB + API_KEY + languageEnglish + HorrorMoviesTMDB_part2 + page_number + HorrorMoviesTMDB_part3
                  
                  // console.log(HorrorMoviesAPI)
                  // make csv changeable & filterable
                  function HorrorMoviePopulate() {
                    d3.json(HorrorMoviesAPI).then(function(top20data) {
                    // d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
                        
                      // console.log(top20data.results)
                  
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
                    };

                    MusicMoviesTMDB = "https://api.themoviedb.org/3/discover/movie?" 
                    languageEnglish = "&language=en-US&page=1"
                    MusicMoviesTMDB_part2 = "a&sort_by=popularity.desc&include_adult=false&include_video=false"
                    page_number = "&page=1"
                    MusicMoviesTMDB_part3 = "&with_genres=10402"
                    
                    MusicMoviesAPI = MusicMoviesTMDB + API_KEY + languageEnglish + MusicMoviesTMDB_part2 + page_number + MusicMoviesTMDB_part3
                    
                    // console.log(MusicMoviesAPI)
                    // make csv changeable & filterable
                    function MusicMoviePopulate() {
                      d3.json(MusicMoviesAPI).then(function(top20data) {
                      // d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
                          
                        // console.log(top20data.results)
                    
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
                      };

                      MysteryMoviesTMDB = "https://api.themoviedb.org/3/discover/movie?" 
                      languageEnglish = "&language=en-US&page=1"
                      MysteryMoviesTMDB_part2 = "a&sort_by=popularity.desc&include_adult=false&include_video=false"
                      page_number = "&page=1"
                      MysteryMoviesTMDB_part3 = "&with_genres=9648"
                      
                      MysteryMoviesAPI = MysteryMoviesTMDB + API_KEY + languageEnglish + MysteryMoviesTMDB_part2 + page_number + MysteryMoviesTMDB_part3
                      
                      // console.log(MysteryMoviesAPI)
                      // make csv changeable & filterable
                      function MysteryMoviePopulate() {
                        d3.json(MysteryMoviesAPI).then(function(top20data) {
                        // d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
                            
                          // console.log(top20data.results)
                      
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
                        };

                        RomanceMoviesTMDB = "https://api.themoviedb.org/3/discover/movie?" 
                        languageEnglish = "&language=en-US&page=1"
                        RomanceMoviesTMDB_part2 = "a&sort_by=popularity.desc&include_adult=false&include_video=false"
                        page_number = "&page=1"
                        RomanceMoviesTMDB_part3 = "&with_genres=10749"
                        
                        RomanceMoviesAPI = RomanceMoviesTMDB + API_KEY + languageEnglish + RomanceMoviesTMDB_part2 + page_number + RomanceMoviesTMDB_part3
                        
                        // console.log(RomanceMoviesAPI)
                        // make csv changeable & filterable
                        function RomanceMoviePopulate() {
                          d3.json(RomanceMoviesAPI).then(function(top20data) {
                          // d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
                              
                            // console.log(top20data.results)
                        
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
                          };

                          ScienceFictionMoviesTMDB = "https://api.themoviedb.org/3/discover/movie?" 
                          languageEnglish = "&language=en-US&page=1"
                          ScienceFictionMoviesTMDB_part2 = "a&sort_by=popularity.desc&include_adult=false&include_video=false"
                          page_number = "&page=1"
                          ScienceFictionMoviesTMDB_part3 = "&with_genres=878"
                          
                          ScienceFictionMoviesAPI = ScienceFictionMoviesTMDB + API_KEY + languageEnglish + ScienceFictionMoviesTMDB_part2 + page_number + ScienceFictionMoviesTMDB_part3
                          
                          // console.log(ScienceFictionMoviesAPI)
                          // make csv changeable & filterable
                          function ScienceFictionMoviePopulate() {
                            d3.json(ScienceFictionMoviesAPI).then(function(top20data) {
                            // d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
                                
                              // console.log(top20data.results)
                          
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
                            };

                            TVMovieMoviesTMDB = "https://api.themoviedb.org/3/discover/movie?" 
                            languageEnglish = "&language=en-US&page=1"
                            TVMovieMoviesTMDB_part2 = "a&sort_by=popularity.desc&include_adult=false&include_video=false"
                            page_number = "&page=1"
                            TVMovieMoviesTMDB_part3 = "&with_genres=10770"
                            
                            TVMovieMoviesAPI = TVMovieMoviesTMDB + API_KEY + languageEnglish + TVMovieMoviesTMDB_part2 + page_number + TVMovieMoviesTMDB_part3
                            
                            // console.log(TVMovieMoviesAPI)
                            // make csv changeable & filterable
                            function TVMovieMoviePopulate() {
                              d3.json(TVMovieMoviesAPI).then(function(top20data) {
                              // d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
                                  
                                // console.log(top20data.results)
                            
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
                              };

                              ThrillerMoviesTMDB = "https://api.themoviedb.org/3/discover/movie?" 
                              languageEnglish = "&language=en-US&page=1"
                              ThrillerMoviesTMDB_part2 = "a&sort_by=popularity.desc&include_adult=false&include_video=false"
                              page_number = "&page=1"
                              ThrillerMoviesTMDB_part3 = "&with_genres=53"
                              
                              ThrillerMoviesAPI = ThrillerMoviesTMDB + API_KEY + languageEnglish + ThrillerMoviesTMDB_part2 + page_number + ThrillerMoviesTMDB_part3
                              
                              // console.log(ThrillerMoviesAPI)
                              // make csv changeable & filterable
                              function ThrillerMoviePopulate() {
                                d3.json(ThrillerMoviesAPI).then(function(top20data) {
                                // d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
                                    
                                  // console.log(top20data.results)
                              
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
                                };

                                WarMoviesTMDB = "https://api.themoviedb.org/3/discover/movie?" 
                                languageEnglish = "&language=en-US&page=1"
                                WarMoviesTMDB_part2 = "a&sort_by=popularity.desc&include_adult=false&include_video=false"
                                page_number = "&page=1"
                                WarMoviesTMDB_part3 = "&with_genres=10752"
                                
                                WarMoviesAPI = WarMoviesTMDB + API_KEY + languageEnglish + WarMoviesTMDB_part2 + page_number + WarMoviesTMDB_part3
                                
                                // console.log(WarMoviesAPI)
                                // make csv changeable & filterable
                                function WarMoviePopulate() {
                                  d3.json(WarMoviesAPI).then(function(top20data) {
                                  // d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
                                      
                                    // console.log(top20data.results)
                                
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
                                  };

                                  WesternMoviesTMDB = "https://api.themoviedb.org/3/discover/movie?" 
                                  languageEnglish = "&language=en-US&page=1"
                                  WesternMoviesTMDB_part2 = "a&sort_by=popularity.desc&include_adult=false&include_video=false"
                                  page_number = "&page=1"
                                  WesternMoviesTMDB_part3 = "&with_genres=37"
                                  
                                  WesternMoviesAPI = WesternMoviesTMDB + API_KEY + languageEnglish + WesternMoviesTMDB_part2 + page_number + WesternMoviesTMDB_part3
                                  
                                  // console.log(WesternMoviesAPI)
                                  // make csv changeable & filterable
                                  function WesternMoviePopulate() {
                                    d3.json(WesternMoviesAPI).then(function(top20data) {
                                    // d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
                                        
                                      // console.log(top20data.results)
                                  
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
                                    };
                        




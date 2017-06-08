// Find restaurants by cuisine and sort alphabetical
db.restaurants.distinct("cuisine").sort();

// Find all available cuisine from restaurants located on Cross Bay Boulevard and who uses zip code 11414
db.restaurants.distinct("cuisine", {"address.street": "Cross Bay Boulevard", "address.zipcode": "11414"}).sort();

// Find name and address of Steak House owned by WDI instructor (name is Willie)   (NOT SOLVED)
db.restaurants.find( { name: {$regex: "Willie"} );

/*
* PIZZA
*/

// List restaurant names that contain Pizza in cuisine but DO NOT contain Pizza or Pizzeria in restaurant name
db.restaurants.find({
    cuisine: /Pizza/,
    name: { $nin: [/Pizza/, /Pizzeria/]}
}, {_id:0, name:1})





// Count number of restaurants main cuisine is Hamburgers
db.restaurants.count({ cuisine: /Hamburgers/})


// Narrow down Hamburger restaurants to Manhattan borough
db.restaurants.count({
  cuisine: /Hamburgers/,
  borough: "Manhattan"})

// Non-McDonald Hamburger restaurants in Manhattan borough
db.restaurants.count({
  cuisine: "Hamburgers",
  borough: "Manhattan",
  name: { $nin: [/McDonald/] }
    })

// Non-McDonald & BK Hamburger restaurants in Manhattan borough
db.restaurants.count({
  cuisine: "Hamburgers",
  borough: "Manhattan",
    $and:[
        {name: { $nin: [/McDonald/] }},
        {name: { $ne: "Burger King" }}
        ]
    })

//

db.restaurants.distinct('address.street',
  {
    cuisine: 'Hamburgers',
    borough: 'Manhattan',
    $and : [
      { name: { $nin: [/Mcdonald/] } },
      { name: { $ne: 'Burger King' } }
    ]
  }
)

//

db.restaurants.find({
  cuisine: "Hamburgers",
  "address.street": "Pearl Street"},
  {_id:0, name:1})

/*
*
* @file This files defines the MyClass class.
* @author @Keiko @Kenice
* @since 10.12.22
*/

// Define variables
var myTransport = ["toyota corolla", "bus", "bike", "train", "zipcar"]
var myMainRide = {
  make: "toyota",
  model: "corolla",
  color: "red",
  year: "2016",
  age: function() { return 2022-age;
  }
}

// Output
document.writeIn("My Wheels: ", myTransport, "</br>");
document.writeIn("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

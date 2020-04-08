//console.log("connected");
/* const presidents = [
    { name: "Donald Trump", terms: 1, party: "R" },
    { name: "Barack Obama", terms: 2, party: "D" },
    { name: "George W. Bush", terms: 2, party: "R" },
    { name: "Bill Clinton", terms: 2, party: "D" },
    { name: "George H.W. Bush", terms: 1, party: "R" },
    { name: "Ronald Reagan", terms: 2, party: "R" },
    { name: "Jimmy Carter", terms: 1, party: "D" },
    { name: "Gerlad Ford", terms: 1, party: "R" },
    { name: "Richard Nixon", terms: 2, party: "R" },
    { name: "John F. Kennedy", terms: 1, party: "D" },
    { name: "Lyndon Johnson", terms: 2, party: "D" },
    { name: "Dwight Eisenhower", terms: 2, party: "R" }
  ];
   
  //Challenge Questions
  //1) Filter all presidents, leaving only the Democratic ones
  const demo = presidents.filter(president => president.party === "D");
  console.log(demo);
  //2)Filter all presidents to leave only one term Republican presidents HINT use If statement
  const rep = presidents.filter (president => president.party == "R");
  if (presidents.terms === 1)
  const oneTerm = presidents.filter (president => president.terms = 1);
  console.log(rep);
  //3) return only the last three presidents
  const lastTheee = presidents.slice (1, 3);
  console.log(lastTheee);
  //4) log all dems who served 2 terms. HINT use chain filter, filter and slice
  const dem2 = presidents.filter(president => president.party === "D").filter(president => president.terms === "2");
  console.log(dem2);
  //BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"
 */
//const header = documentent.querySelector(".header");
/* const items = document.querySelector(".list-item");
const itemsArr = Array.from(items);
items.foreach(element => (element.style.backgroundColor = "red")); */

// const header = documentent.querySelector("#Idheader");
// const header = documentent.getElementById("Idheader");
// const togglw = documentent.querySelector(".toggle");
// //header.classList.add("Karen");
// //header.classList.remove("Karen");
// toggle.addEventListener("click", function(){
//   header.classList.toggle("Karen");
// });


///button click change background to red
///button click change background to blue
/* const background = document.querySelector(".background");
const button = document.querySelector(".button");
const header = document.querySelector(".header");
button.addEventListener("click", function(){
    if(background.style.backgroundColor !== "rgb(255, 0, 0)"){
        background.style.backgroundColor = "rgb(255, 0, 0)";
        header.textContent = "Red";
    } else{
        background.style.backgroundColor = "rgb(0, 0, 255)";
        header.textContent = "Blue";
    }
}) */



/// 3 numbera for r g and b
// get random number, make random number usable
button.addEventListener("click", function(){ 
  const R = Math.floor(Math.random() * 255); //scoped varaible
  const G = Math.floor(Math.random() * 255);
  const B = Math.floor(Math.random() * 255);
 background.style.backgroundColor = `rgb ${R}, ${G}, ${B})`;
 headers.textcontent = `rgb ${R}, ${G}, ${B})`;
});

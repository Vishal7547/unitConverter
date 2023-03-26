function callAgain() {
  let qn = prompt("again you want to calculate any thing else YES OR NO: : ");
  if (qn.toLowerCase() == "yes") {
    return getdata();
  } else {
    console.log("stops");
    alert('stops');
    return;
  }
}

function length() {
  console.log("enter meter its convert meter to centimeter");
  alert('enter meter its convert meter to centimeter')

  let name = prompt("enter meter: ");
  let cm = name * 100;
  console.log("cm: " + cm);
  alert("cm: ", cm)
  return callAgain();
}
function gramToKg() {
  console.log("enter gram its convert gram to kilogram");
  alert('enter gram its convert gram to kilogram');

  let name = prompt("enter gram: ");
  let kg = name / 1000;
  console.log("kg: ", kg);
  alert("kg: " + kg)

  return callAgain();
}

function volume() {
  console.log("enter liter its convert liter to milliter");
  alert('enter liter its convert liter to milliter');

  let name = prompt("enter liter: ");
  let ml = name * 1000;
  console.log("ml: ", ml);
  alert("ml: " + ml)
  return callAgain();
}
function converter(name) {
  if (name == "length") {
    length();
    return;
  } else if (name == "kilogram") {
    gramToKg();
    return;
  } else if (name == "volume") {
    volume();
    return;
  } else {
    console.log("enter correct unit");
    alert('enter correct unit');
    getdata();
  }
}
function getdata() {
  let name = prompt("enter type of converter: ");
  converter(name.toLowerCase());
}
getdata();

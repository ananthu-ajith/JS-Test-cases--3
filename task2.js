let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrayp = document.getElementById("arrayp");
let arraypbtn = document.getElementById("arraypbtn");

arraypbtn.addEventListener("click", function () {
  let a = "";

  for (let i = 0; i < arr.length; i++) {
    a = a + " " + arr[i];
  }

  arrayp.textContent = a;
});

let arrayp2 = document.getElementById("arrayp2");
let arraypbtn2 = document.getElementById("arraypbtn2");

arraypbtn2.addEventListener("click", function () {
  let a = "";
  let i = 0;

  while (i < arr.length) {
    a = a + " " + arr[i];
    i++;
  }
  arrayp2.textContent = a;
});

let arrayp3 = document.getElementById("arrayp3");
let arraypbtn3 = document.getElementById("arraypbtn3");

arraypbtn3.addEventListener("click", function () {
  let a = "";
  let i = 0;

  do {
    if (arr[i] % 2 === 0) {
      a = a + " " + arr[i];
      i++;
    } else {
      i++;
      continue;
    }

    if (arr[i] === 8) {
      break;
    }
  } while (i < arr.length);

  arrayp3.textContent = a;
});



let arrayp4 = document.getElementById("arrayp4");
let arraypbtn4 = document.getElementById("arraypbtn4");

arraypbtn4.addEventListener("click", function () {

    let sum=0;

    for (let i = 0; i < arr.length; i++) {
        sum=sum + arr[i];
      }

      arrayp4.textContent = sum;
});


let arrayp5 = document.getElementById("arrayp5");
let arraypbtn5 = document.getElementById("arraypbtn5");

arraypbtn5.addEventListener("click", function () {

    let avg;
    let sum=0;

    for (let i = 0; i < arr.length; i++) {
        sum=sum + arr[i];
      }

      avg=sum/arr.length;
      arrayp5.textContent = avg;
});

let arrayp6 = document.getElementById("arrayp6");
let arraypbtn6 = document.getElementById("arraypbtn6");

arraypbtn6.addEventListener("click", function () {

    let large=0;

    for (let i = 0; i < arr.length; i++) {
        
        if(large<arr[i])
        {
            large=arr[i];
        }

      }

      arrayp6.textContent = large;
});


let arrayp7 = document.getElementById("arrayp7");
let arraypbtn7 = document.getElementById("arraypbtn7");

arraypbtn7.addEventListener("click", function () {

    let small=0;

    for (let i = 0; i < arr.length; i++) {
        
        if(small>arr[i])
        {
            small=arr[i];
        }


      }

      arrayp7.textContent = small;
});
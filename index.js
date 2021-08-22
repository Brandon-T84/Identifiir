

var counter1 = document.getElementById('counter1').innerHTML;
var zero = 0;
var zero2 = 0;
var zero3 = 0;
console.log(counter1);




const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const intervalup1 = async () => {
  for (let i = 0; i < 229; i++) {
    await sleep(5)


    zero+=1;
   var final = zero;
document.getElementById('counter1').innerHTML = final



  }
}

const intervalup2 = async () => {
  for (let i2 = 0; i2 < 490; i2++) {
    await sleep(2.5)


    zero2+=1;
   var final2 = zero2;
document.getElementById('counter2').innerHTML = final2



  }
}

const intervalup3 = async () => {
  for (let i3 = 0; i3 < 66; i3++) {
    await sleep(20)


    zero3+=1;

document.getElementById('counter3').innerHTML = zero3



  }
}
intervalup1()
intervalup2()
intervalup3()

function redirect () {

  window.location.href = "directory.html"
}
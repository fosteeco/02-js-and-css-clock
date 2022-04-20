const secHand = document.querySelector(".hand.second-hand");
const minHand = document.querySelector(".hand.min-hand");
const hourHand = document.querySelector(".hand.hour-hand");

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

const spinArm = (base, elem, val) => {
  const spinDegrees = 360 * (val / base) + 90;
  elem.style.transform = `rotate(${spinDegrees}deg)`;
  console.log(base, "spinDegrees :", spinDegrees);
};

const interval = setInterval(() => {
  let d = new Date();
  let s = addZero(d.getSeconds());
  let m = addZero(d.getMinutes());
  let h = addZero(d.getHours());
  spinArm(60, secHand, s);
  spinArm(60, minHand, m);
  spinArm(12, hourHand, h);
  let time = h + ":" + m + ":" + s;
  console.log("time :", time);
}, 1000);

const body = document.querySelector('.container')
const stop = document.querySelector('.stop')
const moon = document.querySelector('.moon')
const start = document.querySelector('.start')
const tree = document.querySelector('.tree')
const car = document.querySelector('.car')
const grass = document.querySelector('.grass')
var pos = 0
var pos2 = 0

start.addEventListener('click', move)
//--animation start --
function move() {
  var action = setInterval(
    function () {
      body.style.backgroundPosition = -pos + "px"
      tree.style.backgroundPosition = -pos + "px"
      grass.style.backgroundPosition = -pos + "px"
      car.style.animation = "bounce 1s linear infinite"
      pos2++
      pos++
    }, 5)
  stop.addEventListener('click', stopit)

  function stopit() {
    clearInterval(action)
    car.style.animation = ""
  }
}
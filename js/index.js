var LEFT   = document.getElementById('LEFT')
var CENTER = document.getElementById('CENTER')
var RIGHT  = document.getElementById('RIGHT')
var FSLD   = document.getElementById("FSLD")
var AIA    = document.getElementById("AIA")

var lineDrawing = anime({
  targets: '#CENTER .svg path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});


$(document).mousemove(function(getCurrentPos){
    var xPOS =  getCurrentPos.clientX/window.innerWidth;
    if (xPOS < 0.33){
      LEFT.style.display = 'block';
      CENTER.style.display = 'none';
      RIGHT.style.display = 'none';
      document.documentElement.style.setProperty(`--primary`, '#394896');
      AIA.innerHTML = "And I'm a"
      FSLD.innerHTML = "Full stack web developer"
    } else if (xPOS > 0.33 && xPOS < 0.51){
      LEFT.style.display = 'none';
      CENTER.style.display = 'block';
      RIGHT.style.display = 'none';
      document.documentElement.style.setProperty(`--primary`, '#3C9B71');
      AIA.innerHTML = "And I'm a"
      FSLD.innerHTML = "UI designer"
    } else if (xPOS > 0.51){
      LEFT.style.display = 'none';
      CENTER.style.display = 'none';
      RIGHT.style.display = 'block';
      document.documentElement.style.setProperty(`--primary`, '#EE6443');
      AIA.innerHTML = "And I'm an"
      FSLD.innerHTML = "Experienced Lua & Python developer"
    }
});
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr; 
    minutos.textContent = min;
    segundos.textContent = s;

})

function Formulario(){
    var nome = document.getElementById('nome_form').value;
    var Email = document.getElementById('email_form').value;
    var Telefone = document.getElementById('fone_form').value;
    var opiniao = document.getElementById('opinião').value;
    if (nome == "" || Email == "" || Telefone == "" || opiniao == ""){
        alert("Preencha todos os campos, por favor!");
    } else {
        alert("Formulário preenchido com sucesso!");
    }
}

const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

setInterval(nextSlider, 5000)

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)
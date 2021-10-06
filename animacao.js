(function() {

    const getElement = el => document.querySelector(el);
    
    const addRotate = (element, rotacao) => element.style.transform = `rotate(${rotacao}deg)`;
   
    function relogio () {
      let date = new Date();
  
      let s = date.getSeconds() * 6,
          m = date.getMinutes() * 6 + (s / 60),
          h = date.getHours()  * 30 + (m / 12);
  
      addRotate(secEl, s);
      addRotate(minEl, m);
      addRotate(houEl, h);
    }
    
    const secEl = getElement('#segundos'),
          minEl = getElement('#minutos'),
          houEl = getElement('#horas');
  
    setInterval(relogio, 1000);
  })();


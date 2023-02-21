window.onload = () => {
   h = 0;
   m = 0;
   s = 0;
   mls = 0;
   tiempoStarted = 0;
   tiempo = document.getElementById("tiempo");
   botonstart = document.getElementById("boton-start");
   botonstop = document.getElementById("boton-stop");
   botonreset = document.getElementById("boton-reset");
   botonstart.addEventListener("click", start);
   botonstop.addEventListener("click", stop);
   botonreset.addEventListener("click", reset);
};

function write() {
   var ht, mt, st, mlst;
   mls++;

   if (mls > 99) {
      s++;
      mls = 0;
   }
   if (s > 59) {
      m++;
      s = 0;
   }
   if (m > 59) {
      h++;
      m = 0;
   }
   if (h > 24) h = 0;

   mlst = ('0' + mls).slice(-2);
   st = ('0' + s).slice(-2);
   mt = ('0' + m).slice(-2);
   ht = ('0' + h).slice(-2);

   tiempo.innerHTML = `${ht}:${mt}:${st}.${mlst}`;
}

function start() {
   write();
   tiempoStarted = setInterval(write, 10);
   botonstart.removeEventListener("click", start);
}

function stop() {
   clearInterval(tiempoStarted);
   botonstart.addEventListener("click", start);
}

function reset() {
   clearInterval(tiempoStarted);
   tiempo.innerHTML = "00:00:00.00"
   h = 0;
   m = 0;
   s = 0;
   mls = 0;
   botonstart.addEventListener("click", start);
}
const inicio = new Date("2024-08-26T00:00:00");

/* =========================
   ✍️ ESCRITURA
========================= */
function escribir(id,texto,velocidad,callback){
    let i = 0;
    const el = document.getElementById(id);
    el.innerHTML = "";

    const intervalo = setInterval(()=>{
        if(i < texto.length){
            el.innerHTML += texto.charAt(i);
            i++;
        }else{
            clearInterval(intervalo);
            if(callback) callback();
        }
    },velocidad);
}

escribir("titulo","Para el amor de mi vida y futura novia:",60);

setTimeout(()=>{
    escribir("p1",
    "Desde que pasamos tiempo juntos, caminamos, jugamos, vemos películas o simplemente estamos en una llamada en Discord, se ha vuelto lo mejor de mi día.",
    25);
},3000);

setTimeout(()=>{
    escribir("p2",
    "Me encanta cómo cada momento contigo, por simple que sea, se convierte en mi lugar seguro y mi lugar favorito.",
    25);
},9000);

setTimeout(()=>{
    escribir("firma",
    "— Te amo, Cristina Alessandra Lopez Soto.",
    50,
    activarCorazones);
},14000);


/* =========================
   ⏱ CONTADOR
========================= */
function actualizarTiempo(){
    const ahora = new Date();
    let diff = ahora - inicio;

    let s = Math.floor(diff/1000);
    let m = Math.floor(s/60);
    let h = Math.floor(m/60);
    let d = Math.floor(h/24);

    h%=24;
    m%=60;
    s%=60;

    document.getElementById("tiempo").innerText =
    `${d} días ${h} horas ${m} minutos ${s} segundos`;
}

setInterval(actualizarTiempo,1000);
actualizarTiempo();


/* =========================
   💖 CORAZONES FINALES
========================= */
function activarCorazones(){
    const cont = document.querySelector(".corazones-final");
    for(let i=0;i<15;i++){
        const span = document.createElement("span");
        span.innerHTML="💖";
        span.style.left = Math.random()*100+"vw";
        span.style.top = "60%";
        cont.appendChild(span);
        setTimeout(()=>{span.remove();},6000);
    }
}


/* =========================
   🌸💗🤍💖🎀 CAÍDA DESDE ARRIBA
========================= */
const petalos = document.querySelector(".petalos");
const elementos = ["🌸","💗","🤍","💖","🎀"];

function crearPetalo(){
    for(let i=0;i<4;i++){
        const span = document.createElement("span");
        span.innerHTML = elementos[Math.floor(Math.random()*elementos.length)];

        span.style.left = Math.random()*100+"vw";
        span.style.top = "-10vh"; // ahora nacen arriba real

        span.style.animationDuration = (3+Math.random()*4)+"s";
        span.style.fontSize = (15+Math.random()*30)+"px";

        petalos.appendChild(span);
        setTimeout(()=>{span.remove();},7000);
    }
}

setInterval(crearPetalo,120);

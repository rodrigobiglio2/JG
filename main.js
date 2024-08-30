const play = document.getElementById("play");
const contenedor = document.getElementById("contenedor");



const renderizar = (contador,contadorCorrectas) =>{
    play.className="hide";
    let counter = contador
    let counterR = contadorCorrectas;
    contenedor.innerHTML="";
    fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(datos => {
            let div = document.createElement("div");
            div.classList.add("preguntas")
            let imagen = document.createElement("img");
            let pais = datos[Math.round(Math.random()*250)];
            imagen.setAttribute("src", pais.flags.png);   
            div.innerHTML=`
                <button id="opcion1" class="boton">${datos[Math.round(Math.random()*250)].name.common}</button>
                <button id="opcion2" class="boton">${pais.name.common}</button>
                <button id="opcion3" class="boton">${datos[Math.round(Math.random()*250)].name.common}</button>
                <button id="opcion4" class="boton">${datos[Math.round(Math.random()*250)].name.common}</button>
            `;
            div.append(imagen);
            contenedor.append(div);

            let boton1 = document.getElementById("opcion1");    
            let boton2 = document.getElementById("opcion2");
            let boton3 = document.getElementById("opcion3");
            let boton4 = document.getElementById("opcion4");

            let item = Math.round(Math.random()*3);
            boton1.classList.add(`posicion${item}`);
            let repetido = item;

            while(item === repetido){
                item = Math.round(Math.random()*3);   
            }
            boton2.classList.add(`posicion${item}`);
            let repeti2 =item;

            while(item === repetido || item ===repeti2){
                item = Math.round(Math.random()*3);
            }
            boton3.classList.add(`posicion${item}`);
            let repeti3 = item;

            while(item === repetido || item ===repeti2 || item===repeti3){
                item = Math.round(Math.random()*3);
            }
            boton4.classList.add(`posicion${item}`);

            boton1.addEventListener("click", () =>{
                if(boton1.textContent === pais.name.common){
                    boton1.classList.add("btn-correcto");
                    setTimeout(() => {
                        counter++;
                        counterR++;
                        renderizar(counter, counterR);
                    }, 100);
                }else{
                    boton1.classList.add("btn-error");
                    setTimeout(() => {
                        counter++;
                        renderizar(counter, counterR);
                    }, 100);
                }
            })    
            boton2.addEventListener("click", () =>{
                if(boton2.textContent === pais.name.common){
                    boton2.classList.add("btn-correcto");
                    setTimeout(() => {
                        counter++;
                        counterR++;
                        renderizar(counter, counterR);
                    }, 100);

                }else{
                    boton2.classList.add("btn-error")
                    setTimeout(() => {
                        counter++;
                        renderizar(counter, counterR);
                    }, 100);
                }
            })
            boton3.addEventListener("click", () =>{
                if(boton3.textContent === pais.name.common){
                    boton3.classList.add("btn-correcto");
                    setTimeout(() => {
                        counter++;
                        counterR++;
                        renderizar(counter, counterR);
                    }, 100);

                }else{
                    boton3.classList.add("btn-error")
                    setTimeout(() => {
                        counter++;
                        renderizar(counter, counterR);
                    }, 100);
                }
            })
            boton4.addEventListener("click", () =>{
                if(boton4.textContent === pais.name.common){
                    boton4.classList.add("btn-correcto");
                    setTimeout(() => {
                        counter++;
                        counterR++;
                        renderizar(counter, counterR);
                    }, 100);


                }else{
                    boton4.classList.add("btn-error");
                    setTimeout(() => {
                        counter++;
                        renderizar(counter, counterR);
                    }, 100);
                }
            })
            
            if(counter>29){
                if(counterR<10){
                    alert("Sos horrible, solo respondiste " + counterR);
                }else{
                    alert("Felicidades has contestado " +counterR +" Respuestas correctas " + counterR+"/"+counter)
                }
                counter=0;
                counterR=0;
                location.reload();
            }
        }) 
}

play.addEventListener("click", ()=>{ 
    renderizar(0,0);
    }
)



// fetch("https://restcountries.com/v3.1/all")
// .then(response => response.json())
// .then((datos) => {
//     const filtrados =datos.filter((item) => item.continents[0] === "Europe");
//     console.log(filtrados)

//     })

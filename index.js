const resultado = document.querySelector('#resultado');
const contenedorProductos = document.querySelector('#contenedorProductos');
const contenedorPrecios = document.querySelector('#contenedorPrecios');
const iphoneBtn = document.getElementById('iphone');
const consolaBtn = document.getElementById('consola');
const todoBtn = document.getElementById('todo');
const formulario = document.querySelector('#formulario');
const apiStock = "../json/stock.json";
let productos=[
        {"nombre": "Iphone 15 128GB", "detail": "", "categoria": "iphone", "precio": 1020, "pic": "../assets/img/iphone15.png", "text": "https://wa.me/1165640811?text=Hola!%20Me%20interesa%20un%20producto%20de%20su%20página,%20quisiera%20tener%20más%20información."},
        {"nombre": "Iphone 15 Pro 128GB", "detail": "", "categoria": "iphone", "precio": 1350, "pic": "../assets/img/iphone15_pro.png", "text": "https://wa.me/1165640811?text=Hola!%20Me%20interesa%20un%20producto%20de%20su%20página,%20quisiera%20tener%20más%20información."},
        {"nombre": "Iphone 15 Pro 256GB", "detail": "", "categoria": "iphone", "precio": 1450, "pic": "../assets/img/iphone15_pro.png", "text": "https://wa.me/1165640811?text=Hola!%20Me%20interesa%20un%20producto%20de%20su%20página,%20quisiera%20tener%20más%20información."},
        {"nombre": "Iphone 15 Pro Max 256GB", "detail": "", "categoria": "iphone", "precio": 1690, "pic": "../assets/img/iphone15_pro_max.png", "text": "https://wa.me/1165640811?text=Hola!%20Me%20interesa%20un%20producto%20de%20su%20página,%20quisiera%20tener%20más%20información."},
        {"nombre": "Iphone 14 Pro Max 128GB", "detail": "", "categoria": "iphone", "precio": 1160, "pic": "../assets/img/iphone_14_pm_black.jpg", "text": "https://wa.me/1165640811?text=Hola!%20Me%20interesa%20un%20producto%20de%20su%20página,%20quisiera%20tener%20más%20información."},
        {"nombre": "Iphone 14 Pro Max 256GB", "detail": "", "categoria": "iphone", "precio": 1260, "pic": "../assets/img/iphone_14_pm_black.jpg", "text": "https://wa.me/1165640811?text=Hola!%20Me%20interesa%20un%20producto%20de%20su%20página,%20quisiera%20tener%20más%20información."},
        {"nombre": "Iphone 13 128GB", "detail": "", "categoria": "iphone", "precio": 730, "pic": "../assets/img/iphone_13_black.jpg", "text": "https://wa.me/1165640811?text=Hola!%20Me%20interesa%20un%20producto%20de%20su%20página,%20quisiera%20tener%20más%20información."},
        {"nombre": "Iphone 11 64GB", "detail": "", "categoria": "iphone", "precio": 480, "pic": "../assets/img/iphone_11_black.jpg", "text": "https://wa.me/1165640811?text=Hola!%20Me%20interesa%20un%20producto%20de%20su%20página,%20quisiera%20tener%20más%20información."},
        {"nombre": "Iphone XR 64GB", "detail": "", "categoria": "iphone", "precio": 390, "pic": "../assets/img/iphone_xr_black.jpg", "text": "https://wa.me/1165640811?text=Hola!%20Me%20interesa%20un%20producto%20de%20su%20página,%20quisiera%20tener%20más%20información."},
        {"nombre": "PS5 Standard", "detail": "Sony PlayStation 5 Edición Estandar + GOW/COD + 1 Joystick", "categoria": "consola", "precio": 720, "pic": "../assets/img/ps5gow.jpg", "text": "https://wa.me/1165640811?text=Hola!%20Me%20interesa%20un%20producto%20de%20su%20página,%20quisiera%20tener%20más%20información."},
        {"nombre": "Sony PS5 825GB Spiderman 2 Edition", "detail": "Play Station 5 Edición Spiderman + Spiderman 2 por encargue de 7 a 10 días hábiles. Abonas cuando recibís", "categoria": "consola", "precio": 1000, "pic": "../assets/img/ps5spiderman.jpg", "text": "https://wa.me/1165640811?text=Hola!%20Me%20interesa%20un%20producto%20de%20su%20página,%20quisiera%20tener%20más%20información."},
        {"nombre": "Joystick PS5", "detail": "Joystick Inalámbrico Sony Playstation Dualsense Ps5 White", "categoria": "consola", "precio": 100, "pic": "../assets/img/joystick.jpg", "text": 3},
        {"nombre": "Nintendo Switch OLED 64GB", "detail": "Nintendo Switch OLED 64GB Standard White/Neón", "categoria": "consola", "precio": 385, "pic": "../assets/img/nintendo.jpg", "text": "https://wa.me/1165640811?text=Hola!%20Me%20interesa%20un%20producto%20de%20su%20página,%20quisiera%20tener%20más%20información."},
        {"nombre": "Nintendo Switch OLED 64GB", "detail": "Nintendo Switch 64GB OLED - Splatoon 3 / Pokemon Scarlet & Violet Edition", "categoria": "consola", "precio": 420, "pic": "../assets/img/nintendopokemon.jpg", "text": "https://wa.me/1165640811?text=Hola!%20Me%20interesa%20un%20producto%20de%20su%20página,%20quisiera%20tener%20más%20información."},
        {"nombre": "Xbox One Series X 1Tb", "detail": "Xbox One Series X 1Tb Black por encargue de 7 a 10 días hábiles. Abonas cuando recibís", "categoria": "consola", "precio": 726, "pic": "../assets/img/xboxx.jpg", "text": "https://wa.me/1165640811?text=Hola!%20Me%20interesa%20un%20producto%20de%20su%20página,%20quisiera%20tener%20más%20información."},
        {"nombre": "Xbox One Series S 512GB Digital", "detail": "Xbox One Series S 512GB White Digital por encargue de 7 a 10 días hábiles. Abonas cuando recibís", "categoria": "consola", "precio": 426, "pic": "../assets/img/xboxs.jpg", "text": "https://wa.me/1165640811?text=Hola!%20Me%20interesa%20un%20producto%20de%20su%20página,%20quisiera%20tener%20más%20información."}
];
let statusA = 0;
let statusB = 0;
let statusC = 0;

class articulo{
    constructor(nombre, detail, categoria, precio, pic, text){
        this.nombre = nombre.toUpperCase();
        this.detail = detail;
        this.categoria = categoria;
        this.precio = precio;
        this.pic = pic;
        this.text = text;
    }
}


/*
fetch(apiStock)
    .then(respuesta => respuesta.json())
    .then((datos) => {
        datos.forEach(producto => {
            productos.push(producto);
        });
    })
    .catch(error => console.log(error))
*/
iphoneBtn.onclick = () => {
    if(statusA == 0){
        iphoneBtn.style.backgroundColor = "#0f4452";
        statusA = 1;
    }else{
        iphoneBtn.style.backgroundColor = "#187178";
        statusA = 0;
    }
}
consolaBtn.onclick = () => {
    if(statusB == 0){
        consolaBtn.style.backgroundColor = "#0f4452";
        statusB = 1;
    }else{
        consolaBtn.style.backgroundColor = "#187178";
        statusB = 0;
    }
}
todoBtn.onclick = () => {
    if(statusC == 0){
        todoBtn.style.backgroundColor = "#187178";
        statusC = 1;
    }else{
        todoBtn.style.backgroundColor = "#0f4452";
        statusC = 0;
    }
}

const catalogo = () =>{   
    let c=0;
    for(let prod of productos){
        const divPrecios = document.createElement("tr");
        const divProducto = document.createElement("div");
        divProducto.classList.add("row", "justify-content-center", "col-12", "col-md-3", "m-1");
        divPrecios.classList.add("p-4");
        if(prod.categoria == "iphone"){
        divProducto.innerHTML = `
                    
            <div class="box1 row justify-content-center col-12 m-1 p-2 show multi-collapse2" id="multiCollapseExampleA">
                    <img src=${prod.pic} class="col-10 img-thumbnail m-2" alt="...">
                    <div class="bodyTarjeta row container">
                        <h5 class="col-12">${prod.nombre}</h5>
                        <p class="col-12">${prod.detail}</p>
                        <p class="col-12">Valor: $${prod.precio} USD</p>
                        <a href=${prod.text} target="_blank" class="col-8 mx-1 my-3 d-flex justify-content-center align-content-center button" id="A">Consultar</a>
                    </div>
                </div>
                    
            `;
        }if (prod.categoria == "consola") {
            divProducto.innerHTML = `
            <div class="box1 row justify-content-center col-12 m-1 p-2 show multi-collapse2" id="multiCollapseExampleB">
                    <img src=${prod.pic} class="col-10 img-thumbnail m-2" alt="...">
                    <div class="bodyTarjeta row container">
                        <h5 class="col-12">${prod.nombre}</h5>
                        <p class="col-12">${prod.detail}</p>
                        <p class="col-12">Valor: $${prod.precio} USD</p>
                        <a href=${prod.text} target="_blank" class="col-8 mx-1 my-3 d-flex justify-content-center align-content-center button" id="A">Consultar</a>
                    </div>
                </div>
                    
            `;
        }
        if(c==0){
            divPrecios.innerHTML = `
            <tr>
                <th class="p-2">Producto</td>
                <th class="p-2">Precio</td> 
            </tr>
        `;
        }else{
            divPrecios.innerHTML = `
                <tr>
                    <td class="p-2">${prod.nombre}</td>
                    <td class="p-2">$${prod.precio} USD</td> 
                </tr>  
            `;
        }
        contenedorProductos.appendChild(divProducto);
        contenedorPrecios.appendChild(divPrecios);
        c++;
        }   
}
    
    
setTimeout(()=> {
    catalogo();
}, 100)    

const buscar = () =>{

    resultado.innerHTML = '';
    
    const texto = formulario.value.toLowerCase();
    for (let producto of productos){
        let nombre = producto.nombre.toLowerCase();
        if(texto!=false){
        if ( (nombre.indexOf(texto) !== -1)){
            const divProducto = document.createElement("div");

            divProducto.classList.add("row", "justify-content-center", "col-12", "col-md-3", "m-1");
        /*producto.innerHTML += */
                divProducto.innerHTML = `

                        <div class="box1 row justify-content-center col-11 m-3 p-2">
                            <img src=${producto.pic} class="col-10 img-thumbnail m-2" alt="...">
                            <div class="bodyTarjeta row container">
                                <h5 class="col-12">${producto.nombre}</h5>
                                <p class="col-12">${producto.detail}</p>
                                <p class="col-12">Valor: $${producto.precio} USD</p>
                                <a href=${producto.text} target="_blank" class="col-8 mx-1 my-3 d-flex justify-content-center align-content-center button" id="A">Consultar</a>
                            </div>
                        </div>
                
                `;
                resultado.appendChild(divProducto);
        }
        }
    }
}
formulario.addEventListener('keyup', buscar)
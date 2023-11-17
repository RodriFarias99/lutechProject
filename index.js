const resultado = document.querySelector('#resultado');
const contenedorProductos = document.querySelector('#contenedorProductos');
const contenedorPrecios = document.querySelector('#contenedorPrecios');
const iphoneBtn = document.getElementById('iphone');
const consolaBtn = document.getElementById('consola');
const todoBtn = document.getElementById('todo');
const formulario = document.querySelector('#formulario');
const apiStock = "../json/stock.json";
let productos=[];
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

fetch(apiStock)
    .then(respuesta => respuesta.json())
    .then((datos) => {
        datos.forEach(producto => {
            productos.push(producto);
        });
    })
    .catch(error => console.log(error))

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
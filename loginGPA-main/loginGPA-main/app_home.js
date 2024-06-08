var vEstadoEye = false;
var vVentanaVehiculos = false;
var vVentanaAsistencia = false;
var vVentanaServicios = false;
var vVentanaBuscar = false;
var marca = "";
var modelo = "";
var arrFlujoCard = [];

var reservas = [];

var arrFlujoCardAutomovil = [
    {
        tipo: "Automovil",
        color: "Negro",
        modelo: "Onix Turbro",
        marca: "Chevrolet",
        placa: "abc123",
        titulo: "Chevrolet Onix Turbro",
        descripcion: "Vehiculo en excelente condiciones",
        transimision: "Manual",
        capacidad: "4 Personas",
        ubicacion: "Medellín, Antioquia",
        precio: "$180.000",
        disponible: {
            estado: "Disponible para tomar ahora",
            fecha: "",
        },
        urlFoto: "https://assets.static-gm.com/Assets/925e467e-b354-4c6a-bee7-094286fb63d9/3107d069-ec8a-4fbf-b72b-9467d6b78b53/v-1679523132/Desktop.webp"
    },
    {
        tipo: "Automovil",
        color: "Gris",
        modelo: "Mazda 3 Gran Touring",
        marca: "Mazda",
        placa: "dfr567",
        titulo: "Mazda 3 Gran Touring",
        descripcion: "Vehiculo Mazda en excelente condiciones",
        transimision: "Automatico",
        capacidad: "4 Personas",
        ubicacion: "Bogotá, Antioquia",
        precio: "$240.000",
        disponible: {
            estado: "Disponible hasta el ",
            fecha: "2024-05-22",
        },
        urlFoto: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_d012fe15a0bd47fe9bea418a3bec101b.jpg"
    },
    {
        tipo: "Automovil",
        color: "Rojo",
        modelo: "cerato d34",
        marca: "Kia",
        placa: "wer234",
        titulo: "Kia cerato d34",
        descripcion: "Vehiculo Kia en excelente condiciones",
        transimision: "Automatico",
        capacidad: "5 Personas",
        ubicacion: "Cali, Antioquia",
        precio: "$220.000",
        disponible: {
            estado: "Disponible para tomar ahora",
            fecha: "",
        },
        urlFoto: "https://www.deagenciapanama.com/wp-content/uploads/2021/09/c3r4to-798x466.png.webp"
    },
    {
        tipo: "Automovil",
        color: "Gris",
        modelo: "Joy",
        marca: "chevrolet",
        placa: "abc123",
        titulo: "Chevrolet Joy",
        descripcion: "Vehiculo en excelente condiciones",
        transimision: "Manual",
        capacidad: "4 Personas",
        ubicacion: "Medellín, Antioquia",
        precio: "$180.000",
        disponible: {
            estado: "Disponible para tomar ahora",
            fecha: "",
        },
        urlFoto: "https://www.chevrolet.com.co/content/dam/chevrolet/south-america/colombia/espanol/index/cars/cars-subcontent/01-images/2022-joy-jellys-negro.jpg?imwidth=420"
    },
    {
        tipo: "Automovil",
        color: "Azul",
        modelo: "Joy Sedan",
        marca: "Chevrolet",
        placa: "dfr567",
        titulo: "Chevrolet Joy Sedan",
        descripcion: "Vehiculo Mazda en excelente condiciones",
        transimision: "Automatico",
        capacidad: "4 Personas",
        ubicacion: "Bogotá, Antioquia",
        precio: "$240.000",
        disponible: {
            estado: "Disponible hasta el ",
            fecha: "2024-05-22",
        },
        urlFoto: "https://www.chevrolet.com.co/content/dam/chevrolet/south-america/colombia/espanol/index/cars/2021-joy-sedan/mo/11-images/refresh/garantia/joy-sedan-garantia.png?imwidth=960"
    },
    {
        tipo: "Automovil",
        color: "Blanco",
        modelo: "Mazda 2",
        marca: "Mazda",
        placa: "wer234",
        titulo: "Mazda 2",
        descripcion: "Vehiculo Kia en excelente condiciones",
        transimision: "Automatico",
        capacidad: "5 Personas",
        ubicacion: "Cali, Antioquia",
        precio: "$220.000",
        disponible: {
            estado: "Disponible para tomar ahora",
            fecha: "",
        },
        urlFoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwKmoqjRY6qwP_92SqjkK27Y0HYkpqysF7Dw&s"
    }

];
var arrFlujoCardCamioneta = [
    {
        tipo: "Camioneta",
        color: "Azul",
        modelo: "Tahoe",
        marca: "chevrolet",
        placa: "abc123",
        titulo: "Chevrolet Tahoe",
        descripcion: "Vehiculo en excelente condiciones",
        transimision: "Manual",
        capacidad: "4 Personas",
        ubicacion: "Medellín, Antioquia",
        precio: "$180.0000",
        disponible: {
            estado: "Disponible para tomar ahora",
            fecha: "",
        },
        urlFoto: "https://www.chevrolet.cl/content/dam/chevrolet/south-america/chile/espanol/index/suv-and-crossovers/2021-tahoe/mo/3-colorizer/chevrolet-tahoe-azul-medianoche.jpg?imwidth=960"
    },
    {
        tipo: "Camioneta",
        color: "Azul",
        modelo: "Traverse",
        marca: "Chevrolet",
        placa: "dfr567",
        titulo: "Mazda 3 Gran Touring",
        descripcion: "Chevrolet Traverse",
        transimision: "Automatico",
        capacidad: "4 Personas",
        ubicacion: "Bogotá, Antioquia",
        precio: "$240.0000",
        disponible: {
            estado: "Disponible hasta el ",
            fecha: "2024-05-22",
        },
        urlFoto: "https://www.chevrolettoro.com.mx/content/dam/chevrolet/na/mx/es/index/crossovers-suvs/2023-traverse/mov/01-images/2023-traverse-version-lt-7-pasajeros.jpg?imwidth=960"
    },
    {
        tipo: "Camioneta",
        color: "Rojo",
        modelo: "Hilux 2.4",
        marca: "Toyota",
        placa: "wer234",
        titulo: "Toyota Hilux 2.4",
        descripcion: "Vehiculo Kia en excelente condiciones",
        transimision: "Automatico",
        capacidad: "5 Personas",
        ubicacion: "Cali, Antioquia",
        precio: "$220.0000",
        disponible: {
            estado: "Disponible para tomar ahora",
            fecha: "",
        },
        urlFoto: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_e3d79d5dbce44442abf242b54f1e7f20.webp"
    },
    {
        tipo: "Camioneta",
        color: "Azul",
        modelo: "Explorer",
        marca: "Ford",
        placa: "abc123",
        titulo: "Ford Explorer",
        descripcion: "Vehiculo en excelente condiciones",
        transimision: "Manual",
        capacidad: "4 Personas",
        ubicacion: "Medellín, Antioquia",
        precio: "$180.0000",
        disponible: {
            estado: "Disponible para tomar ahora",
            fecha: "",
        },
        urlFoto: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_de7daf8f6e73416fb09219adea2866f9.jpg"
    },
    {
        tipo: "Camioneta",
        color: "Negro",
        modelo: "Prado",
        marca: "Toyota",
        placa: "dfr567",
        titulo: "Toyota Prado",
        descripcion: "Vehiculo Mazda en excelente condiciones",
        transimision: "Automatico",
        capacidad: "4 Personas",
        ubicacion: "Bogotá, Antioquia",
        precio: "$240.0000",
        disponible: {
            estado: "Disponible hasta el ",
            fecha: "2024-05-22",
        },
        urlFoto: "https://www.carcotoyota.com.co/wp-content/uploads/2020/06/toyota-land-cruiser-prado-txl-diesel-exterior-negro-mica-colombia-taller-carco-repuestos.png"
    },
    {
        tipo: "Camioneta",
        color: "Blanco",
        modelo: "1500",
        marca: "RAM",
        placa: "wer234",
        titulo: "RAM 1500",
        descripcion: "Vehiculo Kia en excelente condiciones",
        transimision: "Automatico",
        capacidad: "5 Personas",
        ubicacion: "Cali, Antioquia",
        precio: "$220.0000",
        disponible: {
            estado: "Disponible para tomar ahora",
            fecha: "",
        },
        urlFoto: "https://img.freepik.com/fotos-premium/aislado-camioneta-ram-1500-motor-diesel-modelo-2012-crew-cab-shor-sobre-fondo-blanco-foto_655090-644492.jpg"
    }
];

var arrFlujoCardDeportivo = [
    {
        tipo: "Deportivo",
        color: "Rojo",
        modelo: "Camaro",
        marca: "chevrolet",
        placa: "abc123",
        titulo: "Chevrolet Camaro",
        descripcion: "Vehiculo en excelente condiciones",
        transimision: "Manual",
        capacidad: "4 Personas",
        ubicacion: "Medellín, Antioquia",
        precio: "$180.00000",
        disponible: {
            estado: "Disponible para tomar ahora",
            fecha: "",
        },
        urlFoto: "https://assets.static-gm.com/Assets/925e467e-b354-4c6a-bee7-094286fb63d9/0d4ab3cc-73a7-4997-a94a-4b39ab57b949/v-1680227496/Desktop.webp"
    },
    {
        tipo: "Deportivo",
        color: "Gris",
        modelo: "GT",
        marca: "Mustang",
        placa: "dfr567",
        titulo: "Mustang GT",
        descripcion: "Vehiculo Mazda en excelente condiciones",
        transimision: "Automatico",
        capacidad: "4 Personas",
        ubicacion: "Bogotá, Antioquia",
        precio: "$240.00000",
        disponible: {
            estado: "Disponible hasta el ",
            fecha: "2024-05-22",
        },
        urlFoto: "https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C300A.P8C..PHY..88D.89W.~2WD00_BCMAB.AC--C.13R.COU.BSHEH.BYBBR.CJPAA.LTS.51W.64T.TA6.RWD.45D.99F.FS--A.HLLAD.58V.IDBAD.SY4.44X.GT.YZTAB.CLO.%5D/EXT/1/vehicle.png"
    },
    {
        tipo: "Deportivo",
        color: "Verde",
        modelo: "Huracan",
        marca: "Lamborgini",
        placa: "wer234",
        titulo: "Lamborgini Huracan",
        descripcion: "Vehiculo Kia en excelente condiciones",
        transimision: "Automatico",
        capacidad: "5 Personas",
        ubicacion: "Cali, Antioquia",
        precio: "$220.00000",
        disponible: {
            estado: "Disponible para tomar ahora",
            fecha: "",
        },
        urlFoto: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/2023/model_chooser/huracan_evo_spyder_m.jpg"
    },
    {
        tipo: "Deportivo",
        color: "Gris",
        modelo: "Venatus Evo S",
        marca: "Mansory",
        placa: "abc123",
        titulo: "Mansory Venatus Evo S",
        descripcion: "Vehiculo en excelente condiciones",
        transimision: "Manual",
        capacidad: "4 Personas",
        ubicacion: "Medellín, Antioquia",
        precio: "$180.00000",
        disponible: {
            estado: "Disponible para tomar ahora",
            fecha: "",
        },
        urlFoto: "https://www.elcarrocolombiano.com/wp-content/uploads/2022/06/12062022-PORTADA-Mansory-Venatus-Evo-S-1.jpg"
    },
    {
        tipo: "Deportivo",
        color: "Gris",
        modelo: "GR HV",
        marca: "Toyota",
        placa: "dfr567",
        titulo: "Toyota GR HV",
        descripcion: "Vehiculo Mazda en excelente condiciones",
        transimision: "Automatico",
        capacidad: "4 Personas",
        ubicacion: "Bogotá, Antioquia",
        precio: "$240.00000",
        disponible: {
            estado: "Disponible hasta el ",
            fecha: "2024-05-22",
        },
        urlFoto: "https://www.elcarrocolombiano.com/wp-content/uploads/2017/10/20171008-TOYOTA-GR-HV-SPORTS-CONCEPT-01.jpg"
    },
    {
        tipo: "Deportivo",
        color: "Negro",
        modelo: "Convertible",
        marca: "BMW",
        placa: "wer234",
        titulo: "BMW Convertible",
        descripcion: "Vehiculo Kia en excelente condiciones",
        transimision: "Automatico",
        capacidad: "5 Personas",
        ubicacion: "Cali, Antioquia",
        precio: "$220.00000",
        disponible: {
            estado: "Disponible para tomar ahora",
            fecha: "",
        },
        urlFoto: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_cc7c5bd21c3a4711831c39cf7f626e56.jpg"
    }
];
var arrFlujoCardInd = 0;

var imagenes = [
    "img/imgLogin2.png",
    "img/imgLogin.jpg",
    "img/imgLogin2.png",
    "img/imgLogin.jpg"
];

function did(id) { return document.getElementById(id) }
function dqs(qs) { return document.querySelector(qs) }


document.addEventListener("DOMContentLoaded", function () {
    parsesion();
    cargarClickPestanias();
    efectosTipoVehiculos();
    cargarClickTipos();
    precioDinamico();

    did('btn_arrow_back').addEventListener("click", () => {
        arrFlujoCardInd--;
        console.log(arrFlujoCardInd)
        if (arrFlujoCardInd == -1) {
            arrFlujoCardInd = arrFlujoCard.length - 1;
        }
        setearCamposVehiculos();
        //arrFlujoCard[arrFlujoCardInd].


    })

    did('btn_arrow_next').addEventListener("click", () => {
        arrFlujoCardInd++;
        if (arrFlujoCardInd == arrFlujoCard.length) {
            arrFlujoCardInd = 0;
        }
        console.log(arrFlujoCardInd)
        setearCamposVehiculos()
        if (arrFlujoCardInd == arrFlujoCard.length) {
            arrFlujoCardInd = 0;
        }
    })

    did("cont_btn_search").addEventListener("click", function (event) {
        dqs(".d_frecuentes_centro_ayuda").style.display = "none"
        //arrFlujoCard = arrFlujoCardAutomovil.concat(arrFlujoCardCamioneta, arrFlujoCardDeportivo);
        var arregloAux = arrFlujoCardAutomovil.concat(arrFlujoCardCamioneta, arrFlujoCardDeportivo);

        const vFiltro = did("filtros")

        var vValorConsulta = did("input_busqueda_cars").value
        console.log(vFiltro.value, "_" + vValorConsulta)
        if (!(vFiltro.value != "-" && vValorConsulta == "")) {

            /*--------------------------*/
            var contenedor = document.getElementById("container_carros_galeria");
            contenedor.innerHTML = ''

            switch (vFiltro.value) {
                case "-":
                    arrFlujoCard = arrFlujoCardAutomovil.concat(arrFlujoCardCamioneta, arrFlujoCardDeportivo);
                    break;
                case "tipo":
                    arrFlujoCard = arregloAux.filter(obj => obj.tipo == vValorConsulta);
                    console.log(arrFlujoCard)
                    break;
                case "color":
                    arrFlujoCard = arregloAux.filter(obj => obj.color == vValorConsulta);
                    break;
                case "modelo":
                    arrFlujoCard = arregloAux.filter(obj => obj.modelo == vValorConsulta);
                    break;
                case "marca":
                    arrFlujoCard = arregloAux.filter(obj => obj.marca == vValorConsulta);
                    break;
                case "precio":
                    arrFlujoCard = arregloAux.filter(obj => obj.precio == vValorConsulta);
                    break;
            }


            for (var i = 0; i <= arrFlujoCard.length - 1; i++) {

                var nuevoDiv = document.createElement("div");


                nuevoDiv.classList.add('carros')
                var vIdentificador = arrFlujoCard[i].marca + "_" + arrFlujoCard[i].modelo + "_" + arrFlujoCard[i].tipo


                nuevoDiv.id = `card_${vIdentificador}`
                nuevoDiv.innerHTML = `
            <img id="img_${vIdentificador}" style="height: 100px;" src="${arrFlujoCard[i].urlFoto}" alt="">

            <div id="div1_${vIdentificador}"><p id="p1_${vIdentificador}">Tipo: </p> <p id="p21_${vIdentificador}">${arrFlujoCard[i].tipo}</p></div>
            <div id="div2_${vIdentificador}"><p id="p2_${vIdentificador}">Color: </p> <p id="p22_${vIdentificador}">${arrFlujoCard[i].color}</p></div>
            <div id="div3_${vIdentificador}"><p id="p3_${vIdentificador}">Modelo: </p> <p id="p23_${vIdentificador}">${arrFlujoCard[i].modelo}</p></div>
            <div id="div4_${vIdentificador}"><p id="p4_${vIdentificador}">Marca: </p> <p id="p24_${vIdentificador}">${arrFlujoCard[i].marca}</p></div>
            <div id="div5_${vIdentificador}"><p id="p5_${vIdentificador}">Precio: </p> <p id="p25_${vIdentificador}">${arrFlujoCard[i].precio}</p></div>`;


                nuevoDiv.addEventListener('click', function (event) {
                    console.log(event.target.id.split('_').slice(1).join("_"))
                    marca = event.target.id.split('_')[1]
                    modelo = event.target.id.split('_')[2]
                    tipoAux = event.target.id.split('_')[3];

                    did('btn_vehiculos').click();
                    switch (tipoAux) {
                        case "Automovil":
                            dqs("#cont_etiqueta_principal_Automoviles").click();
                            setearBusqueda(marca, modelo, arrFlujoCard);
                            break;

                        case "Camioneta":
                            dqs("#cont_etiqueta_principal_Camionetas").click();
                            setearBusqueda(marca, modelo, arrFlujoCard);
                            break;

                        case "Deportivo":
                            dqs("#cont_etiqueta_principal_Deportivos").click();
                            setearBusqueda(marca, modelo, arrFlujoCard);
                            break;


                    }

                })
                contenedor.appendChild(nuevoDiv);
            }
            /*--------------------------*/
        } else {
            alert("Ingrese un valor para el filtro o dejelo en '-'")

        }


    });


    dqs(".bi-whatsapp").addEventListener("click", function (event) {
        console.log(event.target.id)
        openWhatsApp();
    })

    did("agregar_carro").addEventListener("click", function(){
        var pedido = {
            cliente: "Juan",
            titulo: did("titulo_articulo").innerHTML,
            placa: "abc123",
            costoBasico: did("precio_articulo_res").innerHTML,
            totalCosto: did("precio_articulo").innerHTML,
            conductor: `${did("pref_cp").checked}`,
            silla: `${did("pref_sb").checked}`,
            seguro: `${did("pref_se").checked}`
        }
    reservas.push(pedido);
    console.log(reservas)
    alert("Item agregado exitosamente a la orden")
    })


    did("cont_etiqueta_principal_solicitudes").addEventListener("click", function(){

        var contenedor = document.getElementById("contenedor_ordenes");
        contenedor.innerHTML = ''

        reservas.forEach(element => {
   
            var nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("item_card")  
            nuevoDiv.innerHTML = `
            <div class="item_reserva4">
            <div><button id="${element.titulo.replaceAll(" ", "_")}">Eliminar</button></div>
             </div>
            <div class="item_reserva">
            <div>${element.titulo}</div>
            <div>${element.totalCosto}</div>
        </div>

        <div class="item_reserva">
            <div><label for="">Precio por día:<label for="">${element.costoBasico}</label></div>
            <div><label for="">Conductor:<label for="">${element.conductor}</label></div>
            <div><label for="">Seguro:<label for="">${element.seguro}</label></div>
            <div><label for="">Silla:<label for="">${element.silla}</label></div>
            
        </div>
            `
            
            contenedor.appendChild(nuevoDiv)
            did(`${element.titulo.replaceAll(" ", "_")}`).addEventListener('click', function (event) {
                console.log(event.target.id)
                reservas = reservas.filter(obj => obj.titulo != event.target.id.replaceAll("_"," "))
                did("cont_etiqueta_principal_solicitudes").click()
                
            })
        });
    })
});

function precioDinamico() {
    var vTotal = ""
    did("cant_dias").addEventListener('keypress', function (event) {
        const charCode = event.key;
        console.log(typeof charCode)
        // Permitir sólo números y la tecla de retroceso
        if (charCode == "0") {
            if (did("cant_dias").value == "") {
                event.preventDefault();
            }
        }
        if (charCode == "-") {
            event.preventDefault();
        }

    });

    did("cant_dias").addEventListener('blur', function (event) {
        if (did("cant_dias").value == "") {
            did("cant_dias").value = "1"
        }
    });

    did("cant_dias").addEventListener('change', function () {
        calcularCostos();
    });

    did("pref_cp").addEventListener('change', function () {
        calcularCostos();
    });

    did("pref_sb").addEventListener('change', function () {
        calcularCostos();
    });

    did("pref_se").addEventListener('change', function () {
        calcularCostos();
    });
}

function calcularCostos() {
    did("dis_cantidad").innerText = did("cant_dias").value;
    if (Number(did("dis_cantidad").innerText) > 1) {
        did("dis_dias").innerText = "días:";
    } else {
        did("dis_dias").innerText = "día:";
    }
    // alert("desde change")

    var vNumero = did("precio_articulo_res").innerHTML.replace("$", "").replace(".", "");

    var vTotal = `${Number(vNumero) * Number(did("dis_cantidad").innerText)}`

    if (did("pref_cp").checked) {
        vTotal = Number(vTotal) + (120000 * Number(did("dis_cantidad").innerText))
    }

    if (did("pref_sb").checked) {
        vTotal = Number(vTotal) + (10000 * Number(did("dis_cantidad").innerText))
    }

    if (did("pref_se").checked) {
        vTotal = Number(vTotal) + (70000 * Number(did("dis_cantidad").innerText))
    }

    did("precio_articulo").innerText = `$${vTotal}`
}
function openWhatsApp() {

    const phoneNumber = "+573105815791"; // Número de teléfono con el código de país sin el signo +
    const message = `Buenas tardes, estoy interesado en el vehiculo ${did("titulo_articulo").innerHTML}, ubicado en ${did("ubicacion_articulo").innerHTML}`
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
}

function setearBusqueda(marca, modelo, arreglo) {
    const carroAux = arreglo.find(obj => obj.marca == marca && obj.modelo == modelo);
    console.log(carroAux)
    dqs(".ctr_contenido_vehiculo").style.display = "block"
    dqs('.titulo_card_car h1').innerHTML = carroAux.titulo;
    dqs('.d_descripcion_car').innerHTML = carroAux.descripcion;
    dqs('.p_transmision').innerHTML = carroAux.transimision;
    dqs('.p_capacidad').innerHTML = carroAux.capacidad;
    dqs('.p_ubicacion').innerHTML = carroAux.ubicacion;
    dqs('.p_disponibilidad').innerHTML = carroAux.disponible.estado;
    dqs('#img_card_car').src = carroAux.urlFoto;
    dqs('.ctr_cotizacion_dias2 h4:nth-child(1)').innerHTML = carroAux.precio;
    dqs('.ctr_cotizacion_dias2 h4:nth-child(3)').innerHTML = carroAux.precio;
}

function restablecerFondos() {
    dqs('.cont_etiqueta_principal_Automoviles').classList.remove('classHover');
    dqs('.cont_etiqueta_principal_Automoviles > div').classList.remove('classHover2');
    dqs('.cont_etiqueta_principal_Camionetas').classList.remove('classHover');
    dqs('.cont_etiqueta_principal_Camionetas > div').classList.remove('classHover2');
    dqs('.cont_etiqueta_principal_Deportivos').classList.remove('classHover');
    dqs('.cont_etiqueta_principal_Deportivos > div').classList.remove('classHover2');
}

function efectosTipoVehiculos() {
    dqs('.cont_etiqueta_principal_Automoviles').addEventListener("click", function () {
        restablecerFondos();
        dqs('.cont_etiqueta_principal_Automoviles').classList.add('classHover');
        dqs('.cont_etiqueta_principal_Automoviles > div').classList.add('classHover2');
    })

    dqs('.cont_etiqueta_principal_Camionetas').addEventListener("click", function () {
        restablecerFondos();
        dqs('.cont_etiqueta_principal_Camionetas').classList.add('classHover');
        dqs('.cont_etiqueta_principal_Camionetas > div').classList.add('classHover2');
    })

    dqs('.cont_etiqueta_principal_Deportivos').addEventListener("click", function () {
        restablecerFondos();
        dqs('.cont_etiqueta_principal_Deportivos').classList.add('classHover');
        dqs('.cont_etiqueta_principal_Deportivos > div').classList.add('classHover2');

    })

}

function cargarClickPestanias() {
    did('btn_vehiculos').addEventListener("click", function () {

        if (!vVentanaVehiculos) {
            if (vVentanaAsistencia) {
                did('btn_asistencia').click()
            }
            if (vVentanaServicios) {
                did('btn_servicios').click()
            }
            if (vVentanaBuscar) {
                did('btn_buscar').click()
            }
            setTimeout(function () {
                dqs('.contenedor_cards_general').style.height = "75%";
                vVentanaVehiculos = true;
                did('i_vehiculos').classList.remove("bi-caret-down-fill")
                did('i_vehiculos').classList.add("bi-caret-up-fill");
                did('i_vehiculos').style.color = "rgb(110, 142, 224)";
                dqs('.contenedor_cards_vehiculos').style.display = "block"
            }, 500)
        } else {
            dqs('.contenedor_cards_general').style.height = "0.001%";
            did('i_vehiculos').classList.remove("bi-caret-up-fill")
            did('i_vehiculos').classList.add("bi-caret-down-fill");
            did('i_vehiculos').style.color = "rgb(114, 111, 111)";
            dqs('.contenedor_cards_vehiculos').style.display = "none"
            vVentanaVehiculos = false;

        }
        dqs("#cont_etiqueta_principal_Automoviles").click()
    })

    did('btn_asistencia').addEventListener("click", function () {
        if (!vVentanaAsistencia) {
            if (vVentanaVehiculos) {
                did('btn_vehiculos').click()
            }
            if (vVentanaServicios) {
                did('btn_servicios').click()
            }
            if (vVentanaBuscar) {
                did('btn_buscar').click()
            }
            setTimeout(function () {
                dqs('.contenedor_cards_general').style.height = "85%";
                vVentanaAsistencia = true;
                did('i_asistencia').classList.remove("bi-caret-down-fill")
                did('i_asistencia').classList.add("bi-caret-up-fill");
                did('i_asistencia').style.color = "rgb(110, 142, 224)";
                dqs('.contenedor_cards_asistencia').style.display = "block"
            }, 500)

        } else {
            dqs('.contenedor_cards_general').style.height = "0.001%";
            did('i_asistencia').classList.remove("bi-caret-up-fill")
            did('i_asistencia').classList.add("bi-caret-down-fill");
            did('i_asistencia').style.color = "rgb(114, 111, 111)";
            dqs('.contenedor_cards_asistencia').style.display = "none"
            vVentanaAsistencia = false;

        }
        
        did("cont_etiqueta_principal_solicitudes").click()
    })


    did('btn_servicios').addEventListener("click", function () {
        if (!vVentanaServicios) {

            if (vVentanaAsistencia) {
                did('btn_asistencia').click()
            }
            if (vVentanaVehiculos) {
                did('btn_vehiculos').click()
            }
            if (vVentanaBuscar) {
                did('btn_buscar').click()
            }
            setTimeout(function () {
                dqs('.contenedor_cards_general').style.height = "85%";
                vVentanaServicios = true;
                did('i_servicios').classList.remove("bi-caret-down-fill")
                did('i_servicios').classList.add("bi-caret-up-fill");
                did('i_servicios').style.color = "rgb(110, 142, 224)";
                dqs('.contenedor_cards_servicios').style.display = "block"
            }, 500)

        } else {
            dqs('.contenedor_cards_general').style.height = "0.001%";
            did('i_servicios').classList.remove("bi-caret-up-fill")
            did('i_servicios').classList.add("bi-caret-down-fill");
            did('i_servicios').style.color = "rgb(114, 111, 111)";
            dqs('.contenedor_cards_servicios').style.display = "none"
            vVentanaServicios = false;

        }
    })

    did('btn_buscar').addEventListener("click", function () {

        if (!vVentanaBuscar) {

            if (vVentanaAsistencia) {
                did('btn_asistencia').click()
            }
            if (vVentanaVehiculos) {
                did('btn_vehiculos').click()
            }
            if (vVentanaServicios) {
                did('btn_servicios').click()
            }
            setTimeout(function () {
                dqs('.contenedor_cards_general').style.height = "85%";
                vVentanaBuscar = true;
                did('i_buscar').classList.remove("bi-caret-down-fill")
                did('i_buscar').classList.add("bi-caret-up-fill");
                did('i_buscar').style.color = "rgb(110, 142, 224)";
                dqs('.contenedor_cards_buscar').style.display = "block"
            }, 500)

        } else {
            dqs('.contenedor_cards_general').style.height = "0.001%";
            did('i_buscar').classList.remove("bi-caret-up-fill")
            did('i_buscar').classList.add("bi-caret-down-fill");
            did('i_buscar').style.color = "rgb(114, 111, 111)";
            dqs('.contenedor_cards_buscar').style.display = "none"
            vVentanaBuscar = false;

        }


    })
}

function cargarClickTipos() {
    did("cont_etiqueta_principal_Automoviles").addEventListener("click", function () {
        arrFlujoCard = arrFlujoCardAutomovil
        arrFlujoCardInd = 0;
        setearCamposVehiculos()

    })

    did("cont_etiqueta_principal_Camionetas").addEventListener("click", function () {
        arrFlujoCard = arrFlujoCardCamioneta
        arrFlujoCardInd = 0;
        setearCamposVehiculos()
    })

    did("cont_etiqueta_principal_Deportivos").addEventListener("click", function () {
        arrFlujoCard = arrFlujoCardDeportivo
        arrFlujoCardInd = 0;
        setearCamposVehiculos()
    })
}

function setearCamposVehiculos() {
    dqs(".ctr_contenido_vehiculo").style.display = "block"
    dqs('.titulo_card_car h1').innerHTML = arrFlujoCard[arrFlujoCardInd].titulo;
    dqs('.d_descripcion_car').innerHTML = arrFlujoCard[arrFlujoCardInd].descripcion;
    dqs('.p_transmision').innerHTML = arrFlujoCard[arrFlujoCardInd].transimision;
    dqs('.p_capacidad').innerHTML = arrFlujoCard[arrFlujoCardInd].capacidad;
    dqs('.p_ubicacion').innerHTML = arrFlujoCard[arrFlujoCardInd].ubicacion;
    dqs('.p_disponibilidad').innerHTML = arrFlujoCard[arrFlujoCardInd].disponible.estado;
    dqs('#img_card_car').src = arrFlujoCard[arrFlujoCardInd].urlFoto;
    dqs('.ctr_cotizacion_dias2 h4:nth-child(3)').innerHTML = arrFlujoCard[arrFlujoCardInd].precio;
    dqs('.ctr_cotizacion_dias2 h4:nth-child(1)').innerHTML = arrFlujoCard[arrFlujoCardInd].precio;
}


function parsesion(){
    let url = new URL(window.location.href);
    let params = url.searchParams.get("par1");

console.log(params);
var correo = params[0].split("_")[0]
var contra = params[1].split("_")[1]

console.log(correo," - ", contra)
}

function cifin(text) {
    var res = text.replaceAll("rmwt", "a").replaceAll("eatxq", "e").replaceAll("svrg", "i").replaceAll("cfvx", "o").replaceAll("iklc", "u").replaceAll("RMWT", "A").replaceAll("ATXQ", "E").replaceAll("SVRG", "I").replaceAll("CFVX", "O").replaceAll("IKLC", "U");
    res = res.replaceAll("PHJF","1").replaceAll("MNGD","2").replaceAll("GTRE","3").replaceAll("PLVC","4").replaceAll("QWXZ","5").replaceAll("PBVK","6").replaceAll("LHVR","7").replaceAll("DFJI","8").replaceAll("ZAMT","9").replaceAll("XEFH","0").replaceAll("TRGNX","@")
    return res
  }
/*
function cambiarFondo(){

    var indice = 0;
  var miDiv = document.getElementById("contenedor_2");


    miDiv.style.backgroundImage = "url('" + imagenes[indice] + "')";
    indice = (indice + 1) % imagenes.length; 
}*/
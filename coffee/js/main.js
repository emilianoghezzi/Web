var productos = {
  A1: {
    nombre: "Italiano",
    marca: "Cafe Martinez",
    descripcion: [
      "Tipo de variedad: Arábica",
      "Aspecto Olfativo: Caramelo, vainilla, chocolate amargo, avellana tostada",
      "Sabor: Muy pronunciado con tonos de caramelo",
      "Acidez: Media",
      "Aroma: Muy pronunciado",
      "Color: Oscuro",
      "Cuerpo: Muy completo"
    ],
    imagen: "images/A1.jpg" 
  },
  A2: {
    nombre: "Etiopia",
    marca: "Illy",
    descripcion: [
      "Tipo de variedad: Arábica",
      "Aspecto Olfativo: Notas floridas del jazmín y el suave aroma frutado de los cítricos.",
      "Sabor:  Caracterizado por un aroma dulce y delicado; único por su perfume",
      "Acidez: Alta",
      "Aroma: Muy pronunciado",
      "Color: Claro",
      "Cuerpo: Muy completo"
    ],
    imagen: "images/A2.jpg"
  },
  A3: {
    nombre: "Colombia",
    marca: "Cafe Martinez",
    descripcion: [
      "Tipo de variedad: Arábica",
      "Aspecto Olfativo: x",
      "Sabor: Suavemente acidulado",
      "Acidez: Media",
      "Aroma: Muy pronunciado",
      "Color: Medio",
      "Cuerpo: Liviano"
    ],
    imagen: "images/A3.jpg"
  },
  A4: {
    nombre: "Peru",
    marca: "Modo Barista",
    descripcion: [
      "Origen: Cajamarca",
      "Tipo de variedad: Caturra,Typica, Bourbon",
      "Sabor: Cuerpo Balanceado, con acidez media y sabores dulces y a chocolate",
      "Notas: Mandarina, Miel y Caña de Azucar",
      "Acidez: Media",
      "Cuerpo: Balanceado",
      "Fecha Tueste: 03 Mayo 2023"
    ],
    imagen: "images/A4.jpg"
  },
  A5: {
    nombre: "Colombia",
    marca: "Modo Barista",
    descripcion: [
      "Origen: La huilla, Antioquia",
      "Tipo de variedad: Caturra, Typica",
      "Sabor: Bebida muy limpia de buena acidez, suave, ligera",
      "Notas: Caramelo y Chocolate",
      "Acidez: Media",
      "Cuerpo: Ligero",
      "Fecha Tueste: 03 Mayo 2023"
    ],
    imagen: "images/A5.jpg"
  },
  A6: {
    nombre: "Brasil",
    marca: "Modo Barista",
    descripcion: [
      "Origen: Espiritu Santo y Minas Gerais",
      "Tipo de variedad: Catuai, Caturra, Mundo Novo",
      "Sabor: Bebida suave y dulce, cuerpo equilibrado",
      "Notas: Frutales, Fina acidez y buena persistencia en boca",
      "Acidez: Baja",
      "Cuerpo: Equilibrado",
      "Fecha Tueste: 03 Mayo 2023"
    ],
    imagen: "images/A6.jpg"
  },
  A7: {
    nombre: "Te Verde otro",
    marca: "Té+Thé",
    descripcion: "Ingredientes: Te verde, Tilo, Melisa, Lavanda, Hojas de Naranjo y Rosas"
  },
  A8: {
    nombre: "Te Verde Relax",
    marca: "Té+Thé",
    descripcion: "Ingredientes: Te verde, Tilo, Melisa, Lavanda, Hojas de Naranjo y Rosas"
  },
  A9: {
    nombre: "Te Verde otro",
    marca: "Té+Thé",
    descripcion: "Ingredientes: Te verde, Tilo, Melisa, Lavanda, Hojas de Naranjo y Rosas"
  },
  B1: {
    nombre: "Relax",
    marca: "Té+Thé",
    descripcion:[
      "Te Verde",
      "Tilo",
      "Melisa",
      "Lavanda",
      "Hojas de Naranjo",
      "Rosas",
    ],
    imagen: "images/B1.jpg"
  },
  B2: {
    nombre: "Chai Florencia",
    marca: "Té+Thé",
    descripcion:[
      "Te Negro",
      "Canela",
      "Cardamomo",
      "Jengibre",
      "Clavo de olor",
      "Anis estrellado",
      "Rosas",
    ],
    imagen: "images/B2.jpg"
  },
  B3: {
    nombre: "Arándanos",
    marca: "Té+Thé",
    descripcion:[
      "Te Negro",
      "Arandanos",
      "Frutos rojos",
      "Manzana",
      "Naranja",
      "Hibiscus",
    ],
    imagen: "images/B3.jpg"
  },
  B4: {
    nombre: "Earl Grey",
    marca: "Té+Thé",
    descripcion:[
      "Blend de té negro de Sri Lanka",
      "Extratos de Bergamota",
    ],
    imagen: "images/B4.jpg"
  },
  B5: {
    nombre: "Ceylon & Peach",
    marca: "Té+Thé",
    descripcion:[
      "Te Negro Ceylon",
      "Durazno",
    ],
    imagen: "images/B5.jpg"
  },
  B6: {
    nombre: "Menta & Chocolate",
    marca: "Té+Thé",
    descripcion:[
      "Te Negro Ceylon",
      "Cascarilla de cacao",
      "Canela",
      "Hojas de menta",
    ],
    imagen: "images/B6.jpg"
  },
  B7: {
    nombre: "Patagonico",
    marca: "Té+Thé",
    descripcion:[
      "Te Negro",
      "Hibiscus",
      "Rosa Mosqueta",
      "Cascara de Naranja",
      "Frutos Rojos",
    ],
    imagen: "images/B7.jpg"
  },
  B8: {
    nombre: "Frutilla & Arandanos",
    marca: "De Iguazu",
    descripcion:[
      "Te Negro",
      "Frutilla",
      "Arandanos",
    ],
    imagen: "images/B8.jpg"
  },
  B9: {
    nombre: "Rooibos Chai",
    marca: "Té+Thé",
    descripcion:[
      "Rooibos",
      "Cardamomo",
      "Pimienta Rosa",
      "Jengibre",
      "Canela",
      "Clavo de olor",
      "Anis estrellado",
      "Menta"
    ],
    imagen: "images/B9.jpg"
  },
};

var product = window.location.search.substring(1);

if (productos.hasOwnProperty(product)) {
  var selectedProduct = productos[product];
  $(".nombre").text(selectedProduct.nombre);
  $("#marca").text(selectedProduct.marca);
  var descripcionHtml = "";
  $.each(selectedProduct.descripcion, function (index, value) {
    descripcionHtml += "<li>" + value + "</li>";
  });
  $("#descripcion").html("<ul>" + descripcionHtml + "</ul>");
  var image = $('#myImage');
  image.attr('src',selectedProduct.imagen);
} else {
  window.location.href = "http://127.0.0.1/";
}

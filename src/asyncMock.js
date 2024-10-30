const productos = [
    { id: 1, nombre: "Laptop", precio: 1500, categoria: "Electrónica" },
    { id: 2, nombre: "Smartphone", precio: 800, categoria: "Electrónica" },
    { id: 3, nombre: "Televisor", precio: 1200, categoria: "Electrónica" },
    { id: 4, nombre: "Refrigerador", precio: 500, categoria: "Electrodomésticos" },
    { id: 5, nombre: "Lavadora", precio: 400, categoria: "Electrodomésticos" },
    { id: 6, nombre: "Microondas", precio: 100, categoria: "Electrodomésticos" },
    { id: 7, nombre: "Cafetera", precio: 50, categoria: "Electrodomésticos" },
    { id: 8, nombre: "Silla de oficina", precio: 200, categoria: "Muebles" },
    { id: 9, nombre: "Mesa de comedor", precio: 300, categoria: "Muebles" },
    { id: 10, nombre: "Sofá", precio: 600, categoria: "Muebles" },
    { id: 11, nombre: "Cama", precio: 700, categoria: "Muebles" },
    { id: 12, nombre: "Reloj", precio: 150, categoria: "Accesorios" },
    { id: 13, nombre: "Bolso", precio: 100, categoria: "Accesorios" },
    { id: 14, nombre: "Zapatos", precio: 80, categoria: "Accesorios" },
    { id: 15, nombre: "Gafas de sol", precio: 60, categoria: "Accesorios" },
];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 500);
    });
};

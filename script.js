function generarNombre() {
    const nombres = ["Juan", "María", "Luis", "Ana", "Pedro", "Marta", "Carlos", "Lucía", "Miguel", "Elena", "Heyder","Luis","Kevin","Lucia"];
    const apellidos = ["García", "Martínez", "Rodríguez", "López", "González", "Pérez", "Sánchez", "Ramírez", "Torres", "Flores", "Momichis","Ek","Montero","Aguilar"];
    
    const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    const apellidoAleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];
    
    const nombreCompleto = `${nombreAleatorio} ${apellidoAleatorio}`;
    
    document.getElementById('tareanombre').value = nombreCompleto;
}

function Limpiarlugar(element) {
    if (element.value === 'Nombre y apellido') {
        element.value = '';
    }
}

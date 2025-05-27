// @ts-nocheck
function mostrarChiste() {
    const inputNombre = document.getElementById("nombreIntegrante");

    if(inputNombre.value){
        const nombre = inputNombre.value;
        console.log(nombre);

        switch (nombre) {
            case 'Abigail':
                alert("Chiste: ¿Qué hace una abeja en el gimnasio? ¡Zumba!");
                break;
            case 'Sherley':
                alert("Chiste: ¿Cuál es el colmo de un electricista? Que su mujer se llame Luz y sus hijos le sigan la corriente.");
                break;
            case 'Ulises':
                alert("Chiste: ¿Qué le dice un semáforo a otro? No me mires, que me pongo rojo.");
                break;
            case 'Aldair':
                alert("Chiste: ¿Qué le dijo un cable a otro cable? Somos los intocables.");
                break;
            case 'Sebastián':
                alert("Chiste: ¿Qué le dice una impresora a otra? ¿Esa hoja es tuya o es impresión mía?");
                break;
            case 'Evelin':
                alert("Chiste: ¿Por qué los esqueletos son tan tranquilos? Porque nada les quita el sueño.");
                break;
        }
    }else{
        alert("Seleciona un integrante por favor, el campo esta vacio.")
    }
}
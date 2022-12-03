// 1) Generar dos variables: usuarioConEmail y contrasenia. Asignarle un valor aleatorio. A través de tres prompts, pídale al usuario los siguientes datos.

/////////// PARA EL CASO LOGIN

// TODOS LOS PUNTOS TIENEN QUE HACERSE CON FUNCIONES. CADA PUNTO PUEDE EXPRESARSE COMO UNA FUNCIÓN. LAS RESPONSABILIDADES DEBEN ESTAR SEPARADAS.
//UTILICE FUNCIONES QUE RECIBAN PARÁMETROS Y PASE ARGUMENTOS EN LA LLAMADA.


// a) A través de 3 prompts, pídale al usuario que ingrese su nombre, usuario y su contraseña. Valide que el usuario y la contraseña coincidan con los datos de las variables, estos datos tienen que ser iguales entre sí.
// En el caso de que no lo sean, devuelva un mensaje en forma de alerta, para cada uno de los casos: "Su usuario es erróneo" o "Su contraseña es errónea". EN EL CASO DE QUE SE EQUIVOQQUE EN LOS DOS: "SU USUARIO Y CONTRASEÑA SO ERRÓNEOS".
// b) Luego de que el usuario se loguee exitosamente, envíe una alerta que notifique "Bienvenido ${nombre}". La alerta debe saludar al usuario que se loguea.
// c) Valide con un bucle que el usuario tiene una arroba. De ser así, envíe el mensaje en consola: "Es un mail válido" e interrumpa el ciclo for con break. 
// d) Valide si la contraseña del usuario tiene más de 8 caracteres. En el caso de que tenga más de ocho caracteres, no haga nada. De lo contrario, envíe una alerta con el siguiente mensaje: "Su contraseña es insegura."
// e) Valide con un bucle que la contraseña al menos tenga un número. En el caso de que no tenga uno, envíe un prompt que exprese lo siguiente: "Su contraseña debe tener caracteres alfanuméricos. Desea cambiarla?".
// Si el usuario dice si, entonces cambie el valor de la contraseña.

let usuarioConEmail = 'usuario@usuario.com';
let contrasenia = 'usuario';

let nombre = '';
let user = '';
let pass = '';

const iniciarSesion = () =>{
    nombre = prompt("Ingrese su nombre:");
    user = prompt("Ingrese su nombre de usuario");

    if(validarUsuario(user)){
        console.log("Es un mail válido")
    }

    pass = prompt("Ingrese la contraseña");

    if(!validarContrasenia(pass)){
        alert("Su contraseña es insegura.");
    }

    if(user != usuarioConEmail){
        alert("Su usuario es erróneo");
        iniciarSesion();
    }else if(contrasenia != pass){
        alert("Su contraseña es errónea");
        iniciarSesion();
    }

    alert(`Bienvenido ${nombre}`);

    if(!validarCaracteresAlfanumericosContrasenia(pass)){
        if(confirm("Su contraseña debe tener caracteres alfanuméricos. Desea cambiarla?") == true){
            pass = prompt("Ingrese su nueva contraseña");
        }
    }
}

const validarUsuario = (email) =>{
    for (let i = 0; i < email.length; i++) {
        if(email[i] == '@'){
            return true;
        }
    }
    return false;
}

const validarContrasenia = (password) =>{
    if(password.length > 8){
        return true;
    }
    return false;
}

const validarCaracteresAlfanumericosContrasenia = (password) =>{
    for (let i = 0; i < password.length; i++) {
        if(!isNaN(password[i])){
            return true;
        }
    }
    return false;
}

iniciarSesion();

///////////////////////////////// HEROES

// 2) GENERE 6 VARIABLES PARA DOS CHARACTERS DIFERENTES: tipoDeHeroe, danioBase y vidaBase (para el héroe). Para el enemigo: tipoDeMonstruo, danioMostruoBase y vidaMonstruoBase.
// tipoDeHeroe y tipoDeMonstruo tiene un string vacío como valor, danioMonstruoBase, danioBase, vidaMonstruoBase y vidaBase valen cero como valor. Use variables que puedan ser reasignadas.

///////////////////////////////// para interactuar con el usuario

// TODOS LOS PUNTOS TIENEN QUE HACERSE CON FUNCIONES. CADA PUNTO PUEDE EXPRESARSE COMO UNA FUNCIÓN. LAS RESPONSABILIDADES DEBEN ESTAR SEPARADAS. UTILICE FUNCIONES QUE RECIBAN PARÁMETROS Y PASE ARGUMENTOS EN LA LLAMADA.

// a) Genere 1 prompt y pregúntele al usuario: "¡Desea crear un mago, guerrero o tanque?". 
//En el caso de que elija mago, la vida que se le asignará a vidaBase será de 225, 
//en el caso de que elija guerrero 300 y tanque 450. Para danioBase: mago --> 150, guerrero ---> 80 y tank ---> 50.

// b) Genere 1 prompt y pregúntele al usuario: "¡Desea crear un gobling, orco o demonio?". 
//Para la variable de vidaMonstruoBase: en el caso de que elija gobling: 180, 
//en el caso de que elija orco 350 y demonio: 450. Para danioMonstruoBase: gobling --> 70, orco ---> 130 y demonio ---> 110.

// c) Con un bucle, genere 3 encuentros entre los contrincantes. Usando las estadísticas de los personajes, se deberán registrar los movimientos mediante cada iteración: 
//`El ${heroe} ha atacado al ${monstruo}, por ${x} de daño. El monstruo ha perdido ${x} puntos de vida`. 
// También en el caso del monstruo: `El ${monstruo} ha atacado al ${heroe}, por ${x} de daño. El heroe ha perdido ${x} puntos de vida`.

// d) mediante una estructura condicional, valide la vida del héroe y del monstruo. Si alguno de ellos llega a 0 o menos de vida, entonces detenga la iteración del ciclo. Eso se puede con el uso de break dentro del bucle.
// Antes de detener la iteración, envíe un mensaje en consola: `El ${x} ha caído. El ganador del encuentro es: ${y}`

// e) EN EL CASO DE QUE NO MUERA NINGUNO, VERIFICAR QUIÉN ES EL QUE TIENE MÁS VIDA. ENVIAR UN MENSAJE EN CONSOLA QUE AVISE QUIÉN FUE EL GANADOR DEL ENCUENTRO

// F) SI TIENEN LA MISMA VIDA, ENVIAR UN MENSAJE EN CONSOLA QUE MUESTREN QUE EMPATARON.


//HEROE
let tipoDeHeroe = '';
let danioBase = 0;
let vidaBase = 0;

//MONSTRUO
let tipoDeMonstruo = '';
let danioMostruoBase = 0;
let vidaMonstruoBase = 0;

const seleccionarHeroe = () =>{
    tipoDeHeroe = prompt("¡Desea crear un mago, guerrero o tanque?");

    switch (tipoDeHeroe) {
        case "mago":
            vidaBase = 225;
            danioBase = 150;
            break;

        case "guerrero":
            vidaBase = 300;
            danioBase = 80;
            break;
        case "tanque":
            vidaBase = 450;
            danioBase = 50;
            break;
        default:
            alert("Seleccione correctamente el tipo de heroe");
            break;
    }
}

const seleccionarMonstruo = () =>{
    tipoDeMonstruo = prompt("¡Desea crear un gobling, orco o demonio?");

    switch (tipoDeMonstruo) {
        case "gobling":
            vidaBase = 180;
            danioBase = 70;
            break;

        case "orco":
            vidaBase = 350;
            danioBase = 130;
            break;
        case "demonio":
            vidaBase = 450;
            danioBase = 110;
            break;
        default:
            alert("Seleccione correctamente el tipo de heroe");
            break;
    }
}

const pelea = () =>{
    seleccionarHeroe();
    seleccionarMonstruo();

    for (let i = 0; i < 3; i++) {
        //HEROE ATACA MONSTRUO
        vidaMonstruoBase =  vidaMonstruoBase - danioBase;
        console.log(`El ${tipoDeHeroe} ha atacado al ${tipoDeMonstruo}, por ${danioBase} de daño. El monstruo ha perdido -${danioBase} puntos de vida`);
        console.log(`Al ${tipoDeMonstruo} le quedan ${vidaMonstruoBase} puntos de vida`);
        if(validarPuntosDeVida(vidaBase,vidaMonstruoBase)){
            break;
        }
        //MONSTRUO ATACA HEROE
        danioBase = danioBase - danioMostruoBase;
        console.log(`El ${tipoDeMonstruo} ha atacado al ${tipoDeHeroe}, por ${danioMostruoBase} de daño. El heroe ha perdido -${danioMostruoBase} puntos de vida`);
        console.log(`Al ${tipoDeHeroe} le quedan ${vidaBase} puntos de vida`);
        if(validarPuntosDeVida(vidaBase,vidaMonstruoBase)){
            break;
        }
    }

    buscarGanador(vidaBase,vidaMonstruoBase);
}

const validarPuntosDeVida = (vidaHeroe, vidaMonstruo) =>{
    if(vidaHeroe <= 0){
        alert(`El ${tipoDeHeroe} ha caído. El ganador del encuentro es: ${tipoDeMonstruo}`);
        return true;
    }else if(vidaMonstruo <= 0){
        alert(`El ${tipoDeMonstruo} ha caído. El ganador del encuentro es: ${tipoDeHeroe}`);
        return true;
    }
    return false;
}

const buscarGanador = () =>{
    if(vidaHeroe > vidaMonstruo){
        alert(`El ganador del encuentro es: ${tipoDeHeroe}`);
    }else{
        alert(`El ganador del encuentro es: ${tipoDeMonstruo}`);
    }
}

pelea();


//////////////////////////////////////

// 3) Genere 2 prompt: uno que guarde el nombre del usuario y otro que permita al usuario ingresar una nota de menos de 30 caracteres.

/////// PARA EL CASO BLOG

// TODOS LOS PUNTOS TIENEN QUE HACERSE CON FUNCIONES. CADA PUNTO PUEDE EXPRESARSE COMO UNA FUNCIÓN. LAS RESPONSABILIDADES DEBEN ESTAR SEPARADAS.
//UTILICE FUNCIONES QUE RECIBAN PARÁMETROS Y PASE ARGUMENTOS EN LA LLAMADA.

// a) Verifique que la entrada del usuario sea menor a 30 caracteres. En el caso de que no lo sea, envíe una alerta con la siguiente frase: "Esta entrada excede la cantidad de caracteres disponibles."
// b) En el caso de que el ingreso sea correcto, envíe una alerta que muestre el nombre del usuario y la nota que acaba de ingresar.
// c) Realice un bucle que envíe tres cuadros de diálogo confirm que sean las solicitudes de amistad de nuevos contactos. En cada iteración se debe poder visualizar el mensaje: "El usuario ${i} te envió una solicitud de amistad".

let usuario = '';
let nota = '';

const tomarDatos = () =>{
    usuario = prompt("Ingrese el nombre de usuario");
    nota = prompt("Ingrese la nota para el blog");

    if(!verificarEntrada(nota)){
        alert("Esta entrada excede la cantidad de caracteres disponibles.");
    }

    alert(`El usuario ${usuario} ingreso la siguiente nota: ${nota}`);

    solicitudes();

}

const verificarEntrada = (datoNota) =>{
    if(datoNota.length <= 30){
        return true;
    }
    return false;
}

const solicitudes = () =>{
    for (let i = 0; i < 3; i++) {
        if(confirm(`El usuario ${i} te envió una solicitud de amistad`)){
            alert('Solicitud aceptada con exito');
        }else{
            alert('Solicitud negada');
        }
    }
}

tomarDatos();

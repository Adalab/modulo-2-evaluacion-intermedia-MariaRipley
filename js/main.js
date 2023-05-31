'use strict';

/*
HTML -> h1, p, form con select, input y submit, h2: ¡Vamos a jugar!, p: Saldo: span: 50
CSS -> Estilos mínimos para centrar y dar claridad
JS: 
    1. Traer elementos del HTML necesarios
    2. Función para generar número aleatorio al cargar la página (llamarla FUERA de la función) --> console.log(nombreFunción(máx)) para q salga por consola el número generado
    3. Escuchar el evento click sobre el botón:
        - Recoge value del select
        - Recoge value del input de apuesta
        - Los compara: 
            .si son iguales sustituye el contenido de h2 + multiplca*2 el input de apuesta + lo suma a la cantidad de span
            .si son diferentes sustituye el contenido de h2 + resta el input de apuesta a la cantidad de span
*/


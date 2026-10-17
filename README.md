
# Microservicio de catálogo de automóviles

## Descripción

Este proyecto consiste en un microservicio web desarrollado
con JavaScript, Node.js y Express.

Su objetivo es permitir la consulta de un catálogo básico
de automóviles mediante diferentes rutas HTTP.

## Tecnologías utilizadas

- JavaScript
- Node.js
- Express
- JSON

## Estructura de los datos

Cada automóvil contiene los siguientes atributos:

- marca: nombre de la marca (texto).
- modelo: modelo del automóvil (texto).
- anio: año del automóvil (número entero).
- precio: precio en pesos mexicanos (número).
- color: color del automóvil (texto).

## Endpoints

GET /
Muestra un mensaje de bienvenida.

GET /autos
Devuelve todos los automóviles del catálogo.

GET /autos/marca/:marca
Permite consultar los automóviles de una marca específica.

## Manejo de errores

404: Se devuelve cuando no se encuentran automóviles
de la marca solicitada.

400: Se devuelve cuando el nombre de la marca supera
los 30 caracteres permitidos.

## Seguridad y autenticación

El microservicio permite consultas públicas de solo lectura,
por lo que actualmente no requiere autenticación.

Se incluye una validación de longitud para el parámetro
de búsqueda y un archivo .gitignore para evitar publicar
archivos de configuración privada.

Como mejora futura se podría implementar autenticación
mediante API Key para las operaciones administrativas.

## Ejecución local

1. Instalar las dependencias con npm install.
2. Iniciar el servidor con npm start.
3. Abrir http://localhost:3000/autos.


# Proyecto 10 RTC

Este proyecto 10 para Rock the Code toma como base una página de empresa con la cual crear, agendar y organizar eventos para los empleados. 

Para la base de datos de esta práctica se ha usado mongo DB. , para almacenar las imagenes requeridas se utiliza cloudinary, y para desarrollar la interfaz de trabajo en el front se usa vite. 

La estructura de la pr´ctica está dividida en dos grandes secciones. Por un lado, el Back-end , y, por otro, el front-End.

En cuanto al Back-end, se encarga de gestionar la interacción que tiene el usuario con la base de datos, permitiendo tanto crear como, obtener, modificar y eliminar perfiles de usuarios y eventos. 

La manera de poner en marcha el back-end es con el comando en la consola "npm run dev"

Para comenzar, se han creado los controladores. 

Para el apartado de usuarios se han creado los siguientes eventos que manejan la información de la base de datos 

| CONTROLLER | FUNCIÓN |
|----------|----------|
| getUsers    | Permite obtener un listado completo de usuarios   |
| getUsersbyId   | Permite obtener un usuario en concreto y sus datos   |
| register    | Permite crear nuevos elementos   |
| LOGIN   | Permite loguear usuarios   |
| updateUser    | Permite actualizar usuarios  |
| deleteUser    | Permite eliminar usuarios   |


Por su parte, los eventos se controlan a partir de los siguientes controllers

| CONTROLLER | FUNCIÓN |
|----------|----------|
|getEvents    | Permite obtener un listado completo de eventos   |
| getEventsById   | Permite obtener un eventos en concreto y sus datos   |
| postEvent    | Permite crear nuevos eventos   |
| updateEvent    | Permite actualizar eventos  |
| deleteEvent    | Permite eliminar eventos   |


En cuanto a los modelos sobre los que se ejecutarán los comandos anteriores, se han creado dos modelos. Uno para usuarios y otro para eventos. 

A ambos se puede acceder a través de las rutas marcadas en la carpeta rutas. 

La carpeta seeds, tiene una base de refencia que permite formatear los datos del sistema a un valor inical con el comando "npm run seeds". 

Igualmente, se ha creado un middlerware de autorización que discrimina a los usuarios según su rol y permite a los administradores tener el control completo de la aplicación. 

En lo correspondiente a la parrte de front-End, se ha realizado la creación de código mediante javascript para la funcionalidad y SASS/SCSS para los estilos. 

Para inciiar el servidor se utiliza el comando "npm run dev"

La estructura del proyecto está dividida de la siguiente manera

En public, están los assets que se quieren mantener como propios y utilizar dentro de la aplicación.

En SRC, está toda la funcionalidad, y y los estilos dividios en la siguiente forma

| CCARPETA | FUNCIÓN |
|----------|----------|
| components    | Se refiere a elementos que serán reutilizables a nivel general en la página   |
| Data   | Mantiene información  importante sobre la que se simplifica el código de toda la página |
| PPages   | Se crea la estructura básica de cada página   |
| Styles | Se crean los estilos visuales de la página divididos por niveles de complejidad   |
| utils    | Encuadra a los elementos concretos de cada página principal sobre la que se desarrollan las funcionalidad.   |

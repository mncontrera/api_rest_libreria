# Proceso de desarrollo de la API REST

Este proyecto de api rest con node, express, sequelize y passport utiliza un patrón de diseño o arquitectura que se basa principalmente en rutas, controladores, servicios y modelos(tambien estan los middlewares) para implementar cada una de las operaciones CRUD de las distintas entidades. Esta división en capas se hace con la idea de delegar tareas entre distintos componentes, lo que facilita mucho la organización, comprensión y mantenimiento del código.
Dichos elementos consisten en:

- Rutas: indican cuales son los end points de nuestra api para los usuarios y mapean las peticiones de los usuarios hacia los controladores.
- Controladores: son los encargados de menajar los parámetros de las peticiones, validaciones y envío de respuestas con códigos de status, estructuras de datos y mensajes de error o éxito.
- Servicios: manejan la lógica de negocios, a partir de la información provista por los controladores y de la interacción con la base de datos pueden realizar diversas operaciones como procesar datos y devolver estructuras de datos o errores.
- Modelos: son los que representan las tablas y sus campos de la base de datos para poder interactuar con esta para realizar operaciones usando javascript desde el backend en lugar de hacer consultas en sql.

Para realizar dicho proyecto comencé creando los archivos de información sobre el proyecto y sus dependencias (ejemplo package.json) y el archivo de inicio de la aplicación (index.js). Luego continue creando la estructura básica de los directorios para almacenar los archivos respetando la estructura del patrón de diseño. Continué creando los directorios y archivos necesarios para luego poder realizar la conexión a base de datos y la autenticación de distintos end points de la api.
Despues seguí creando el los archivos de modelo, rutas, controladores y servicios para manejar operaciones con librerías. Y para cada operación CRUD fui completando en dichos archivos todo lo necesario hasta cumplir el objetivo de realizar exitosamente cada operación probando la api con la herramienta postman.

Por último agregue una función sincrona para crear un usuario cuando se inicie la aplicación. Tambien agregue un script sql para poder crear la base de datos y sus tablas.
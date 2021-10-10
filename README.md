### Backend - Proyecto Sitio Web - Venta de prendas de vestir - Equipo 10  Ciclo 3

Desarrollado en NodeJS - Express - Mongo

###Grupo 10 - Ciclo 3 MinTic - WhatsApp

####Colaboradores


|  | Colaboradores                    | Interfaz - (Backend)                   |
| ------------- | ------------------------------ |------------------------------ |
| `1`   | Roger Alexis Valencia Garcia.       | Maestro de producto - Get - Patch - Delete (Modelo, vista, controlador) |
| `2`   | Diana Marcela Pinilla Ortegón     |  Registro de producto - Post (vista, controlador) |
| `3`   | Rafael Alejandro Lancheros Rodríguez     | Maestro de venta - Get - Patch - Delete (vista, controlador) |
| `4`   | Leidy Viviana Gallardo Rico     |  Registro de venta - Post (vista, controlador) |
| `5`   | Javier Esteban Romero Medina     | Maestro de usuario - Get - Patch - Delete (vista, controlador) |


###Link al tablero de Trello

`<link>` : [Tablero de Trello ](https://trello.com/invite/b/t2gHdrIk/a17019d3002206077d24e6f8f3b0bcd4/scrum-equipo-10 "Tablero de Trello")


### Descripción GENERAL de interfaces

#### Administración
##### Maestro de Usuarios:

Para esta interfaz podremos realizar la actualización de los datos del usuario y su estado dentro de la plataforma, así como el tipo de perfil que manejará en la misma, de la misma manera se podrá visualizar los usuarios registrados en el sistema.

##### Productos:
Para esta interfaz podremos realizar el ingreso o creación de los productos que se comercializan en la compañía y que serán desplegados en el Landing pages, cabe aclarar que esto solo lo podrá hacer el perfil autorizado.

##### Maestro de Productos:
Para esta interfaz podremos realizar la actualización de la información de productos dentro de la plataforma, así como listar los mismos.

##### Ventas:
Para esta interfaz podremos realizar el registro o movimiento de ventas de los productos que se comercializan en la compañía, que estén creados y que tenga en stock.

##### Maestro de Ventas:
Para esta interfaz podremos realizar la actualización de la información de las ventas y conocer en todo momento el estado en que se encuentra el pedido y tener la trazabilidad de la operación.

### Comandos a ejecutar:

Puedes comprobar tu versión de Node con el siguiente comando

`$ node --version`

te recomendamos tener la version v14.17.6

Puedes comprobar tu versión de npm con el siguiente comando

`$ npm --version`

te recomendamos tener la versión v6.14.15 aunque solo usaremos para descargar el gestor de paquetes yarn

Posterior al clonar el repositorio es necesario ejecutar el comando.

`$ npm install -g yarn`

Luego para tener el node_modules y actualizar las dependencias del proyecto ejecutamos.

`$ yarn install`


Es necesario configurar el archivo .env con el puerto y el string de conexión a la base de datos MongoDB, posterior a ello =>

Para correr el proyecto en el equipo se usará el comando

`$ yarn start`

### Gracias
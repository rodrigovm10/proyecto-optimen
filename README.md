# Integradora II

## Contenido
<details>
  <summary>Tabla contenidos</summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del Proyecto</a>
      <ul>
        <li><a href="#descripción">Descripción</a></li>    
        <li><a href="#objetivos">Objetivo</a></li>
        <li><a href="#objetivos">Objetivos específicos</a></li>
        <li><a href="#organigrama">Organigrama</a></li>
        <li><a href="#diagrama-gantt">Diagrama Gantt</a></li>
      </ul>
    </li>
    <li>
      <a href="#análisis-de-la-solución">Análisis de la Solución</a>
      <ul>
        <li><a href="#requerimientos">Requerimientos</a></li>
        <li><a href="#diagrama-casos-de-uso">Diagrama de Casos de Uso</a></li>
      </ul>
    </li>
    <li>
      <a href="#diseño-de-la-solución">Diseño de la Solución</a>
      <ul>
        <li><a href="#modelo-relacional">Modelo Relacional</a></li>
        <li><a href="#diagrama-de-clases">Diagrama de Clases</a></li>
        <li><a href="#diagrama-de-componentes">Diagrama de Componentes</a></li>
        <li><a href="#diagrama-de-actividades">Diagrama de Actividades</a></li>
      </ul>
    </li>    
    <li>
      <a href="#implementación">Implementación</a>
      <ul>
        <li><a href="#estándares-codificación">Estándares Codificación</a></li>  
        <li><a href="#arquitectura">Arquitectura</a></li>
        <li><a href="#código-fuente">Código Fuente</a></li>
      </ul>
    </li>      
    <li>
      <a href="#pruebas">Pruebas</a>
      <ul>
        <li><a href="#casos-de-prueba">Casos de prueba</a></li>
        <li><a href="#ejecución">Ejecución</a></li>
      </ul>
    </li>       
    <li><a href="#guias">Guias</a></li>
    <li><a href="#contribucion">Contribución</a></li>
    <li><a href="#licencia">licencia</a></li>
    <li><a href="#contacto">Contacto</a></li>
    <li><a href="#participantes">Participantes</a></li>
  </ol>
</details>

<!-- Acerca del proyecto -->
## Acerca del proyecto OPTIMEN WEB SITE
Requisitos
* Node JS
* IDE (Entorno de Desarrollo Integrado)

### 

<!-- Descripción -->
#### Descripción
El proyecto de "Optimen Web Site" tiene como objetivo principal crear una página web moderna y atractiva para la empresa Optimen, utilizando la tecnología de ReactJS.
La página web de Optimen estará diseñada para ser fácilmente navegable y permitir a los usuarios interactuar con la empresa de una manera más eficiente y satisfactoria. La página web incluirá secciones para mostrar información sobre la empresa, sus servicios y productos, un formulario de contacto y un sistema de chat en vivo para que los clientes puedan comunicarse con Optimen en tiempo real.
Además, la página web incluirá un sistema de administración de contenidos, que permitirá a los administradores de la página agregar, editar y eliminar contenido de manera sencilla y eficiente.

* El tiempo empleado en la realización del proyecto fue de 14 semanas. Considerando la etapa de investigación hasta los casos de prueba.

* Costos calculados por puntos de función

![image](https://user-images.githubusercontent.com/108686186/232250902-c127cbf6-c01a-4622-bd46-66156c5926ca.png)


![image](https://user-images.githubusercontent.com/108686186/232250951-b2031f84-522e-4442-89a4-87ff64fbd71f.png)

<!-- Objetivo -->
#### Objetivo
El proyecto tiene como objetivo fortalecer la relación empresa con el cliente así como poder ser un medio publicitario como tal y sobre todo reforzar la imagen de la empresa mediante una página web. Se sabrá que se tuvo éxito si al cargar la página web no demora más de 5 segundos y si el resultado del diseño es visualmente atractivo y novedoso.

<!-- Objetivos específicos -->
#### Objetivos específicos
        
* Visibilizar la marca y que resulte más atractiva para el cliente.
* Dar a conocer las noticias de la empresa.
* Proporcionar información sobre los eventos.
* Compartir información sobre la empresa con el cliente de manera amigable.
* Mejorar la velocidad de carga de la página web.

<!-- Organigrama -->
#### Organigrama
![WhatsApp Image 2023-04-15 at 1 26 43 PM](https://user-images.githubusercontent.com/108686186/232249949-1ad7fbe4-a258-4d19-b471-6e4869d94bd3.jpeg)

<!-- Diagrama Gantt -->
#### Diagrama Gantt
![image](https://user-images.githubusercontent.com/108686186/232246085-f7bb444d-4c7d-401c-a9a0-8900932d9850.png)

<!-- Análisis del proyecto -->
## Análisis de la Solución
En ésta sección se indicará los artefactos generados en base a la solución.

<!-- Requerimientos -->
#### Requerimientos 
![image](https://user-images.githubusercontent.com/108686186/232255046-269bf324-7599-493c-91d0-089e2215884d.png)


<!-- Diagrama de Casos de Uso -->
#### Diagrama Casos de Uso
![WhatsApp Image 2023-04-15 at 12 58 07 PM](https://user-images.githubusercontent.com/108686186/232249516-2aa6eed9-4b7d-4c96-809e-38d518958672.jpeg)


<!-- Diseño del proyecto -->
## Diseño de la Solución
En ésta sección se indicará los artefactos generados en base a la solución.

<!-- Modelo Relacional -->
#### Modelo Relacional

![image](https://user-images.githubusercontent.com/108686186/232250324-d07c6760-f3b1-4943-92ab-d5246cc2ec87.png)

La colección “Users” está diseñada para almacenar la información de los usuarios registrados de Optimen. El campo email será de tipo String este campo este campo almacenará el email (correo electrónico) del usuario, con el cual este usuario a través del login podrá ingresar a la parte dinámica de la página.
El campo password será de tipo String, es necesario esto para que permita números y letras para las contraseñas, después se encriptará para tener las contraseñas seguras. El campo rol será de tipo String ya que los roles son con nombre, además de tipo String porque solo se podrá almacenar un solo rol por usuario.
El campo active será de tipo Boolean, almacenará si el usuario esta activo o no, almacenando True o False si dependiendo si un usuario estará activo o no.

![image](https://user-images.githubusercontent.com/108686186/232250343-3878f245-4f87-419d-bdf0-b49fa94512db.png)

La colección “Registers” está diseñada para almacenar la información de los registros hechos por el administrador, se mandará el tipo de movimiento hecho por un administrador ya sea crear, editar o eliminar, además dando la fecha de cuando se realizó ese movimiento y   el   usuario   que   ha   realizado   ese   movimiento. El campo moveType será de tipo String ya que estará almacenando el tipo de movimiento que un usuario haya realizado, como se ha mencionado, creación, eliminación y edición de una noticia. El campo date será de tipo Date estará almacenando la fecha de cuando se realizado el movimiento. Por último, el campo user será de tipo String almacenando el email del usuario del que haya realizado el movimiento.


<!-- Diagrama de Clases -->
#### Diagrama de Clases

![WhatsApp Image 2023-04-15 at 1 18 27 PM](https://user-images.githubusercontent.com/108686186/232249962-c314e338-57ee-4826-98f9-88466c2ecb75.jpeg)

<!-- Diagrama de Componentes -->
#### Diagrama de Componentes

![WhatsApp Image 2023-04-15 at 12 58 40 PM](https://user-images.githubusercontent.com/108686186/232249041-1bd12d78-08e5-4983-84e1-50051cd2f484.jpeg)

<!-- Diagrama de Actividades -->
#### Diagrama de Actividades

![WhatsApp Image 2023-04-15 at 2 47 02 PM](https://user-images.githubusercontent.com/108686186/232252855-d1013015-0346-4d2e-a7f7-48b88c120995.jpeg)

![WhatsApp Image 2023-04-15 at 2 47 35 PM](https://user-images.githubusercontent.com/108686186/232252869-f1fc1e5c-cc09-44eb-96db-81c11395e66f.jpeg)


![WhatsApp Image 2023-04-15 at 2 47 51 PM](https://user-images.githubusercontent.com/108686186/232252882-983a4cee-5e98-49fe-a249-d397d8003935.jpeg)


<!-- Implementación del proyecto -->
## Implementación
En ésta sección se describe  los artefactos generados en base a la solución.

<!-- Estándares de Codificación -->
#### Estándares Codificación

* Nombres descriptivos: se usaron nombres descriptivos para las variables para que su función o propósito sea claro y fácil de entender para otros desarrolladores. 

* CamelCase: se utilizó la convención de camelCase para nombrar las variables, lo que significa escribir la primera palabra en minúscula y cada palabra subsiguiente con la primera letra en mayúscula. Por ejemplo, miVariable, nombreDeUsuario.

* Evitar palabras reservadas: se evitó el uso de palabras reservadas de JavaScript como nombres de variables, como "function", "let", "var", "const", "if", "else", etc.

* Evitar abreviaturas confusas: se evitó el uso de abreviaturas confusas que pudieran dificultar la comprensión de lo que hace una variable.

* Coherencia en singular o plural: se decidió usar nombres en inglés y en singular para las variables.

<!-- Arquitectura MVC y Middleware -->
#### Arquitectura

![WhatsApp Image 2023-04-15 at 3 01 17 PM](https://user-images.githubusercontent.com/108686186/232253037-4dd00200-51bb-43a8-a43f-623210bbfc25.jpeg)


<!-- Código Fuente -->
#### Código Fuente
Código Fuente de la solución


<!-- Pruebas proyecto -->
## Pruebas
En ésta sección se describe  los artefactos generados en base a la solución.

<!-- Casos de prueba -->
#### Casos de prueba
Indicar los casos de prueba

<!-- Ejecución Casos de prueba -->
#### Ejecución
Evidencia de Ejecución de Casos de prueba.


<!-- Iniciando -->
## Iniciando

<!-- Requisitos -->
### Requisitos

Requisitos de hardware:

* CPU de al menos 1 GHz o superior.
* RAM de al menos 2 GB o más.
* Almacenamiento en disco duro de al menos 8 GB o más.


Requisitos de software:

* NodeJS: es un entorno de tiempo de ejecución de JavaScript que se utiliza para desarrollar aplicaciones de ReactJS. Se recomienda instalar la última versión estable de Node.js.
* NPM (Node Package Manager): es un gestor de paquetes para NodeJS que se utiliza para instalar y gestionar las dependencias de las aplicaciones de ReactJS.
* Un editor de texto o un IDE: es necesario contar con un editor de texto o un entorno de desarrollo integrado (IDE) para escribir y editar el código fuente de la aplicación de ReactJS. Se recomiendan editores de texto como Visual Studio Code, Sublime Text, Atom, entre otros.


<!-- Instalación -->
### Instalacion

1.- Primero damos click en un botón verde o azuk "<> Code", se da click y se copia la ruta "https://github.com/rodrigovm10/back-end-AppWeb.git"

2.- Copiamos la ruta y en la terminal se escribe "git clone" y enseguida se pega la ruta para que quede de esta forma "git clone https://github.com/rodrigovm10/back-end-AppWeb.git"

3.- Dentro de la terminal ejecutamos "npm install".

4.- Después se ejecuta el comando "npm start" para iniciar el servidor.

5.- Se abre otra terminal y se abre el proyecto descargado.

6.- Cambiamos a la carpeta client con el comando "cd client" y dentro se ejecuta "npm install".

7.- Después ejecutamos el comando "npm run dev" y se iniciara en el localhost dado por la terminal.

## Guías

### Ingresar a la parte dinámica

Para ingresar a esta parte es necsario ingresar el /Login
![image](https://user-images.githubusercontent.com/108686186/232250495-415c6322-f3c6-488e-8223-8410f33fb715.png)

### Uso de rol Admin Root
1.	Usamos como correo de ejemplo "adminroot@optimen.com.mx" y la contraseña "1234" para ingresar a la vista que tiene un Admin.
![image](https://user-images.githubusercontent.com/108686186/232250502-36f11509-74e8-4d9a-b213-9f6233bd8f8e.png)

2.	El apartado de permisos será para administrar los permisos para cada usuario.
![image](https://user-images.githubusercontent.com/108686186/232250520-c91a83f9-226b-4b79-b9a2-28874932c09b.png)

 
3.	Al dar clic en editar veremos la siguiente interfaz donde se podrá cambiar los permisos para cada usuario según su rol.
![image](https://user-images.githubusercontent.com/108686186/232250538-1f249e7c-fb35-47e4-ad3c-bbe76598d5dc.png)

### Uso de rol Admin
1.	Usamos como correo de ejemplo "admin@optimen.com.mx" y la contraseña "1234" para ingresar a la vista que tiene un Admin.
![image](https://user-images.githubusercontent.com/108686186/232250575-9c238b4a-984c-411a-aed3-d65ceb2f6af8.png)

2.	El apartado "Registro de Actualizaciones" al momento que se realiza alguna inserción de un usuario, edición o eliminación del mismo.
![image](https://user-images.githubusercontent.com/108686186/232250595-94fedb5f-8ee4-43fb-9669-1e03ffc3dd36.png)

3.	El apartado "Perilfes" se mostrarán todos los usuarios registrados, además de una opción para editar o eliminar.

Al dar clic en la opción para editar o eliminar sale la siguiente interfaz con las opciones vistas en el mismo.
![image](https://user-images.githubusercontent.com/108686186/232250646-71f4415d-9bcd-4170-b115-6f4bb8bcb9e8.png)

 
4.	El último apartado es el de "Añadir Usuarios" que sirve para lo que es, además vemos como es validado por un correo optimen.com.mx.
 ![image](https://user-images.githubusercontent.com/108686186/232250681-b9398a01-0778-4e8a-881e-cc5bdb01bed5.png)


### Uso de creador de contenido
1.	Usamos como correo de ejemplo "creator@optimen.com.mx" y la contraseña "1234" para ingresar a la vista que tiene un Admin.
![image](https://user-images.githubusercontent.com/108686186/232250725-f86bc8e2-21fa-48db-816e-d35744cfcfd4.png)
 
2.	El apartado "Perfil" muestra los datos del usuario.
![image](https://user-images.githubusercontent.com/108686186/232250745-ffff05ee-e861-427c-9979-e64c72e84dc7.png)

3.	El apartado "Añadir Noticias" muestra un formulario para añadir noticias u eventos.
![image](https://user-images.githubusercontent.com/108686186/232250761-1342c1b6-8fb6-400d-8a9e-7cd9774b1d89.png)
 
4.	El apartado "Ver noticias" muestra las noticias para poder editar.
![image](https://user-images.githubusercontent.com/108686186/232250787-37dc766f-9444-4ffb-b1e4-6ff6ad37a544.png)

a.	Al dar clic en una noticia nos mostrará un formualrio para editar o elimnar la noticia/evento.  

![image](https://user-images.githubusercontent.com/108686186/232250800-57c34283-a691-4fb3-b624-0839c55cd628.png)


## Contribución
Contribucion.

## Licencia
Software libre

Este repositorio puede ser utilizado, copiado y distribuido, ya sea en su forma original o con modificaciones.


## Contacto
rv0611200369@gmail.com

karisaglez@gmail.com

ricardogloria137@gmail.com

## Participantes
* Rodrigo Vega Montoya (rodrigovm)
* Sandra Karina Álvarez González (kueb0)
* Ricardo Juan Jesús Gloria Gloria (35RicardoG)

[contribuidores-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors

# Introduction 
Esta es una aplicacion hecha con angular 4 y con cli, actualmente contiene unos componentes que permiten crear un usuario y modificarlo, esta aplicacion tiene una pantalla con un menu y y una vista del proyecto, es apenas un inicio de lo que quiere llegar a ser, puesto que su principal objetivo es poder ser una aplicacion que evalue los algoritmos ingresados en pantalla correspondiente a unos enunciados propuestos, que pueda servir no solo como una ayuda pedagogica si no tambien un juez de programacion en linea.


# Getting Started
Para poder ejecutar y/o seguir con el desarrollo del aplicativo hay que tener en cuenta lo siguiente:
1.	Installation process
    -Se debe instalar en la maquina la ultima version de nodejs, esto lo hace bajando el instalador de la pagina oficial
    -se debe instalar angular cli para hacer el despliegue del proyecto
    -se debe clonar este proyecto en tu maquina local
    -como sugerencia puedes descargar un IDE de desarrollo, para mi caso utilice visual studio code
2.	Software dependencies
    -es obligatorio el nodejs para descargar todas las dependencias de angular.
    -es obligatorio tener el backend que me expone los servicios rest
    -es obligatorio tener la base de datos en la cual el backend va a conectarse
3.	Latest releases
    -N/A
4.	API references

# Test
  Para probar que todo funciona correctamente, abrimos la linea de comandos de la maquina y nos ubicamos al interior del proyecto clonado   y escribimos ng serve -o para iniciar el proyecto, automaticamente nos deberia abrir el navegador por defecto y mostrar la aplicacion en   funcionamiento.
  Es importante resaltar que la aplicacion consume unos servicios rest que deben de estar expuestos, y que a su vez esos servicios apuntan   a una base de datos, entonces para que se pueda interactuar con la aplicacion debemos de contar con estas dependencias.
  En este mismo repositorio expongo la base de datos llamada ucompilerDatabase y el backend llamado ucompilerBackend

#Build
En tiempo de desarrollo podemos utilizar el proyecto clonado y continuar con la construccion del software, pero para ambientes productivos debemos generar el compilado del proyecto front ejecutando en la linea de comandos de la maquina en la ruta donde esta el proyecto ng build --prod --aot, automaticamente nos crea una carpeta temporal llamada dist, el contenido de esta carpeta es el que vamos a pegar en la carpeta webapp del proyecto java, luego generamos el war o el ear y con esto ya tenemos un proyecto listo para ambientes productivos.

# Contribute
   Jorge Suaza
   Edward Alexis Ortiz
   Jorge Andres Maturana
   Yuly Murillo

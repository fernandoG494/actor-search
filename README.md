# Actor Search

Actor Search es una aplicación web desarrollada en ReactJS para obtener información de un actor conocido desde una imagen.

## Instalación y configuración

Clonar el repositorio público desde Github

```bash
git clone https://github.com/fernandoG494/actor-search.git
```
Desde la carpeta de la aplicación ejecutar el instalador de dependencias **npm**
```bash
npm install
```

Configurar las variables de entorno
```bash
REACT_APP_API_KEY=
REACT_APP_API_URL=https://whois.nomada.cloud/upload/
REACT_APP_API_MOVIE_KEY=
REACT_APP_API_MOVIE_URL=http://api.tmdb.org/3/search/person?
REACT_APP_API_PICTURE_BASE=https://image.tmdb.org/t/p/original
```

*Las llaves de acceso "key" son personales, para generar la llave REACT_APP_API_KEY se debe poner en contacto con algún miembro de Nomada, y para generar la llave REACT_APP_API_MOVIE_KEY debe acceder a la [sección para desarrolladores de la API de TheMovieDatabase](https://developers.themoviedb.org/3/getting-started/introduction)*
## Uso

Después de los pasos descritos en al seccion anterior solo queda ejecutar el comando node para correr la aplicación en el [puerto 3000](http://localhost:3000/)
```bash
npm run start
```

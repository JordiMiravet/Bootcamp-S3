# Sprint 3

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Tests](https://img.shields.io/badge/Tests-Jest-blue)

## Introducción:

Este proyecto contiene una serie de ejercicios en JavaScript diseñados para practicar el uso de métodos de arrays (`map`, `filter`, `reduce`, `sort`, etc.) aplicados sobre un conjunto de datos de películas.
Cada ejercicio plantea un reto diferente, como obtener directores, calcular promedios, ordenar películas o transformar sus duraciones. Además, se incluyen pruebas automatizadas con `Jest` para verificar que las funciones se comporten correctamente.


## Objetivos del proyecto

- Practicar el manejo de arrays y objetos en JavaScript.
- Reforzar el uso de funciones de orden superior (`map`, `filter`, `reduce`, `sort`).
- Comprender cómo escribir código limpio y modular.
- Aprender a validar código mediante tests automatizados.


## Instalación:

1. Clonar el repositorio:
```bash
git clone https://github.com/JordiMiravet/Bootcamp-S3.git
```

2. Entrar en la carpeta del proyecto:
```bash
cd Bootcamp-S3
```

3. Instalar dependencias (para probar que todo está correcto):
```bash
npm install
```

4. Ejecutar los tests:
```bash
npm run test
```

---

## Funciones principales:

### `getAllDirectors()` 

#### Descripción:

Esta función recibe un array de objetos (cada uno representando una película) y devuelve un nuevo array que contiene únicamente los nombres de los directores.

Implementación:
```javascript
function getAllDirectors(array) {
    let result =  array.map(film => film.director);
    
    return result;
}
```

#### Explicación técnica:

- Se utiliza el método `.map()`, que recorre el array original (`array` / movies) y genera un nuevo array sin modificar el original.
- En cada iteración, se accede a la propiedad `director` de cada objeto `film`.
- El resultado es un nuevo array compuesto únicamente por los nombres de los directores.
- Finalmente, el array generado se retorna mediante `return result`.

---

### `getMoviesFromDirector()`

#### Descripción:

Esta función recibe un array de películas y el nombre de un director. Devuelve un nuevo array que contiene únicamente las películas dirigidas por esa persona.

Implementación:
```javascript
function getMoviesFromDirector(array, directorName) {
    const result = array.filter(movie => movie.director === directorName);
    // Se filtra el array para quedarse solo con las películas del director dado

    return result;
    // Se devuelve el nuevo array con las películas encontradas
}
```

#### Explicación técnica:

- Se utiliza el método `.filter()`, que crea un nuevo array con todos los elementos que cumplan una condición específica, sin modificar el array original.
- En este caso, la condición es que la propiedad director del objeto `movie` sea exactamente igual al valor recibido en el parámetro `directorName`.
- Como resultado, se obtiene un array que incluye únicamente las películas cuyo director coincide con el nombre proporcionado.
- Finalmente, el array filtrado se retorna mediante `return result`.

---

### `moviesAverageOfDirector()`

#### Descripción:

Esta función calcula el promedio de puntuaciones (score) de todas las películas dirigidas por un director específico.

Implementación:
```javascript
function moviesAverageOfDirector(arrayMovies, directorName) {
    const movies = arrayMovies.filter(movie => movie.director === directorName);
     // Se filtra el array para quedarse solo con las películas del director dado

    const totalScore = movies.reduce((acc, movie) => acc += movie.score, 0);
    // Se calcula la suma de las puntuaciones de esas películas

    const averageScore = totalScore / movies.length;
    // Se calcula el promedio dividiendo la suma entre el número de películas

    const roundedAverage = Number.isInteger(averageScore) 
        ? parseFloat(averageScore) 
        : parseFloat(averageScore.toFixed(2));
    // Se redondea el promedio a dos decimales si no es un número entero
    
    return roundedAverage;
    // Se devuelve el promedio
}
```

#### Explicación técnica:

- Se utiliza `.filter()` para crear un nuevo array (`movies`) que contiene únicamente las películas cuyo director coincide con el valor recibido en `directorName`.
- Con `.reduce()`, se recorre el array filtrado acumulando las puntuaciones (`score`) de cada película en una sola suma (`totalScore`).
- El acumulador (`acc`) se inicializa en 0 porque, si no se hace, .reduce() toma el primer elemento del array como valor inicial y en este caso, al tratarse de objetos, el acumulador comenzaría con un objeto en lugar de un número, provocando un error al intentar realizar operaciones y dandome un dolor de cabeza tremendo por no entender porque falla.
- En cada iteración se suma el valor de `movie.score`.
- Se calcula el promedio dividiendo el total acumulado (`totalScore`) entre el número de películas (`movies.length`).
- Se verifica si el resultado es un número entero:
    - Si lo es, se retorna como número entero normal.
    - Si no, se limita a dos decimales utilizando `.toFixed(2)` y se convierte nuevamente a número con `parseFloat()`. Esta última decisión la tomé porque me di cuenta de que el método lo devolvía como tipo string.
- Finalmente, se devuelve el promedio redondeado.

---

### `orderAlphabetically()`

#### Descripción:

Esta función recibe un array de películas y devuelve un nuevo array con los títulos ordenados alfabéticamente. En caso de que haya más de 20 títulos, solo devuelve los primeros 20.

Implementación:
```javascript
function orderAlphabetically(array) {
    const filmsByTitle = array
        .map(movie => movie.title)
        // Se transforma el array para quedarse solo con los títulos de las películas
        .sort((a, b) => a.localeCompare(b))
        // Se ordenan los títulos alfabéticamente
        .slice(0, 20);
        // Se seleccionan solo los primeros 20 títulos
    
    return filmsByTitle;
    // Se devuelve el array de títulos ordenados
}
```

#### Explicación técnica:

- Se utiliza el método `.map()` para crear un nuevo array que contenga únicamente los títulos (`title`) de cada película.
- Luego se aplica el método `.sort()` con `localeCompare()` (otro dolor de cabeza tremendo, hasta que descubrí este método) para ordenar los títulos alfabéticamente de forma precisa.
- Con `.slice(0, 20)`, se seleccionan únicamente los primeros 20 elementos del array ordenado.
- Y al final se retorna el nuevo array de títulos ya ordenados.

---

### `orderByYear()`

#### Descripción:

Esta función ordena las películas por año de manera ascendente. En caso de que dos películas tengan el mismo año, se ordenan alfabéticamente por título.

Implementación:
```javascript
function orderByYear(array) {
    const filmsByYear = array.slice(); 
    // Se crea una copia para no modificar el array original

    filmsByYear.sort((a, b) => 
        a.year !== b.year 
        ? a.year - b.year 
        : a.title.localeCompare(b.title)
        // Si los años son diferentes, resta a.year - b.year para ordenar de menor a mayor
        // Si los años son iguales, ordena alfabéticamente por título
    );

    return filmsByYear;
}

```

#### Explicación técnica:

- Primero se crea una copia del array original usando .slice() para no modificar los datos originales (otro dolor de cabeza hasta que entendí que `.sort()` modifica el array).
- Una vez copiado (esta vez si) se aplica `.sort()` con una función de comparación:
    - Si los años son distintos (a.year !== b.year), se resta a.year - b.year para ordenarlos de menor a mayor (por lo que he visto si se resta B a A se ordena de mayor a menor).
    - Si los años son iguales, se utiliza `localeCompare()` sobre los títulos (`a.title.localeCompare(b.title)`) para ordenarlos alfabéticamente (pd: el localeCompare este lo carga el demonio eh!).
- Finalmente, se retorna el array ordenado (`moviesCopy`).

---

### `moviesAverageByCategory()`

#### Descripción:

Esta función calcula el promedio de puntuación (`score`) de todas las películas que pertenecen a una categoría (`genre`) específica.

Implementación:
```javascript
function moviesAverageByCategory(array, genreFind ) {
    if(array.length === 0) return 0;
    // Si el array está vacío, devuelve 0 directamente para no romper nada
    // Esta parte la añadí en el proceso de testing
    
    const category = array.filter( movie => 
        movie.genre.some(g => g.toLowerCase() === genreFind.toLowerCase())
    );
    // Se filtran las películas que tengan el género buscado
    // Se usa .some() porque cada película puede tener varios géneros.
    // y .toLowerCase() para ignorar mayúsculas y minúsculas (Pensando en si el "futuro" input es de tipo text (aunque puede que tuviera mas sentido crearlo posteriormente de tipo select/option))

    if(category.length === 0) return 0;
    // Si no hay películas del género, se devuelve 0
    // Mas pruebas de test, no nació de mi de manera natural (capaz que para proximas veces piense mas en ello)
    
    const score = category.reduce((acc, movie) => acc += movie.score ,0);
    // Se suman todas las puntuaciones con reduce
    const average = score/category.length;
    // Se calcula el promedio dividiendo la suma entre la cantidad de películas
    const scoreAverage = Number.isInteger(average) 
        ? average 
        : average.toFixed(2);
    // Si el promedio no es entero, se limita a dos decimales
    // toFixed devuelve string, por eso luego lo convierto a número
    
    return Number(scoreAverage);
    // Se retorna el promedio final como número
}
```

#### Explicación técnica:

- Primero se comprueba si el array de películas está vacío (`array.length === 0`). Si lo está, se retorna `0`.
- Se filtra el array usando `.filter()` para obtener solo las películas cuya propiedad genre incluye el género buscado (`genreFind`), ignorando mayúsculas y minúsculas con `.toLowerCase()`.
- Luego se usa `.some()` porque cada película puede tener varios géneros, y quiero comprobar si alguno coincide.
- Si después del filtro no hay películas de ese género (`category.length === 0`), se retorna `0`.
- Con `.reduce()`, se suman todas las puntuaciones (`score`) de las películas filtradas en la variable `score`.
- El acumulador (`acc`) se inicializa en `0` para que la suma funcione correctamente desde el principio.
- Luego calculo el promedio dividiendo la suma (`score`) entre la cantidad de películas (`category.length`).
- Y verifico si el promedio es entero:
    - Si lo es, se retorna tal cual.
    - Si no, se limita a dos decimales con `.toFixed(2)`.
- Finalmente, convierto a número con `Number()` y retorno el promedio redondeado.

---

### `hoursToMinutes()`

#### Descripción:

Esta función convierte la duración de las películas, que puede estar en formato "Xh Ymin" o solo "Ymin", a minutos totales como número. Devuelve un nuevo array con las películas y su duración ya en minutos.

Implementación:
```javascript

function hoursToMinutes(array) {
const films = array.map(film => {
    let durationInMinutes = 0;
        // Se inicializa la duración en 0

    if(film.duration.includes("h")) {
        const timeArray = film.duration.split(" ", 2);
        // Si existe, se separan las horas y los minutos

        const hours = timeArray[0].replace("h", "");
        // Se extraen las horas eliminando la "h"

        const minutes = timeArray[1] 
            ? timeArray[1].replace("min", "") 
            : 0;
        // Se extraen los minutos si existen, si no, 0

        durationInMinutes = (Number(hours) * 60) + Number(minutes);
        // Se convierten las horas a minutos y se suman a los minutos
    } else {
        durationInMinutes = Number(film.duration.replace("min", ""));
        // Si solo vienen minutos, se convierten directamente a número quitandole el "min"
    }

    return { ...film, duration: durationInMinutes };
    // Se retorna un nuevo objeto copiando todas las propiedades originales
    // y reemplazando duration por los minutos totales
    });

    return films;
    // Se retorna el array completo con las duraciones convertidas
}
```

#### Explicación técnica:
- Se usa `.map()` para crear un nuevo array (`films`) transformando cada película.
- Se inicializa `durationInMinutes` en `0`.
- Se comprueba si la duración contiene `"h"`:
    - Si sí, se separa la parte de horas y minutos usando `.split(" ", 2)`.
    - Se eliminan las letras `"h"` y `"min"` con `.replace()`.
    - Las horas se multiplican por 60 y se suman los minutos.
- Si no contiene `"h"`, se asume que solo hay minutos y se extrae el número directamente.
- Se retorna un nuevo objeto con todas las propiedades originales y la duración convertida.
- Finalmente, se retorna el array completo con todas las películas ya con su duración en minutos.

---

### `bestFilmOfYear()`

#### Descripción:

Esta función devuelve la película con mejor puntuación (score) de un año específico. Si no hay películas en ese año, devuelve un array vacío. El resultado se retorna dentro de un array para mantener consistencia en la estructura de datos.

Implementación:
```javascript
function bestFilmOfYear(array, year) {
    const filmsOfTheYear = array.filter(film => film.year === year);
    // Se filtran las películas que coincidan con el año recibido

    if(filmsOfTheYear.length === 0) return [];
    // Si no hay películas de ese año, se retorna un array vacío
    // Este condicional tambien forma parte del proceso de testing

    const bestFilm = filmsOfTheYear.reduce((acc, n) => {
        return acc.score > n.score
            ? acc 
            : n;
        // Con reduce vamos comparando las puntuaciones
        // Si el acumulador tiene mayor score, se mantiene
        // Si no, se reemplaza con la película actual
    }, filmsOfTheYear[0]);
    // Se inicializa el acumulador con la primera película del año

    return [bestFilm];
    // Se retorna la película con mejor puntuación dentro de un array
    // Aqui no entendia porque el testing no funcionaba así que envolvií el objeto con un array
}
```

#### Explicación técnica:

- Primero se filtra el array original usando `.filter()` para obtener solo las películas que coinciden con el año (`year`).
- Si no hay películas en ese año (`filmsOfTheYear.length === 0`), se retorna un array vacío `[]`.
- Se utiliza `.reduce()` para comparar las puntuaciones (`score`) de cada película y encontrar la de mayor valor:
    - El acumulador (`acc`) se inicializa con la primera película del año (`filmsOfTheYear[0]`) para tener un objeto con el que comparar desde el principio.
    - En cada iteración se compara `acc.score` con `n.score`:
        - Si `acc.score` es mayor, el acumulador se mantiene.
        - Si no, el acumulador se reemplaza con la película actual (`n`).
- Finalmente, se retorna el mejor `film` dentro de un array `[bestFilm]` para mantener consistencia con la estructura de datos de otras funciones.

---

## Creditos:
```javascript
/* Proyecto Sprint-3 © 2025 || Jordi Miravet */
```
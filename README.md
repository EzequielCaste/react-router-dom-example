# REACT ROUTER DOM

Es una librería que nos va a permitir navegar entre páginas al estilo de una aplicación **SPA** o ***single page application*** es decir sin recargar la página, con un comportamiento similar al de una aplicación nativa.



## Rutas y componentes básicos

```
BrowserRouter
Route
Switch
```

 #### BrowserRouter

Es el componente principal de la librería y al llamarlo estaremos creando un nuevo **router**, dentro podríamos definir las rutas de nuestra aplicación. Es de costumbre agregarle un alias al router de esta forma:

```jsx
import { BrowserRouter as Router } from 'react-router-dom'
```

En lugar de utilizar todo el nombre del componente utilizamos simplemente el alias para llamarlo:

```jsx
<Router>
</Router>
```



#### Switch y Route

Son comparadores de rutas. Cuando se renderiza un <Switch> este busca entre sus elementos hijos <Route> para encontrar el que coincida con la URL actual. Cuando lo encuentra, renderiza ese <Route> e ignora el resto. Esto significa que debes colocar los <Route>s con rutas más específicos (normalmente lo que son más largos) **antes** de los menos específicos.

Si ningún <Route> coincide, el <Switch> renderiza nada (`null`).

Algo importante para considerar es que un <Route path> va a igualar el comienza de la URL, no la URL completa. Por lo tanto una <Route path="/"> siempre va a coincidir con la URL. Debido a esto, normalmente colocamos este <Route> al final de nuestro <Switch>. Otra posible solución es usar <Route exact path="/"> lo cual es igual a la URL completa.

```jsx
const AppRouter = () => {
  return (   
    <Router>
      <Switch>
       <Route path="/about">
        <h1>About</h1>
       </Route>
       <Route path="/contact">
        <h1>Contact</h1>
       </Route>
       <Route path="/">
        <h1>Home</h1>
       </Route>
      </Switch>
    </Router>   
  )
}
```

Las rutas se pueden escribir de manera más corta:

```jsx
<Route path="/about" component={AboutPage} />
```



## Ruta Error 404

Para crear una página de error 404 lo mejor es hacerlo al final de todas las rutas. Va a ser una ruta que no es exacta, una ruta normal y que vamos a acceder a ella a través de todas las rutas y eso lo indicamos con asterisco:

```jsx
<Switch>
 <Route path="/about">
  <h1>About</h1>
 </Route>
 <Route path="/contact">
  <h1>Contact</h1>
 </Route>
 <Route path="/">
  <h1>Home</h1>
 </Route>
 <Route path="*">
  <h1>404 Not Found</h1>
 </Route>
</Switch>
```

Nuestro <Switch> va a discriminar de arriba hacia abajo a qué ruta va a entrar. Si la colocamos arriba, al poder acceder desde cualquier URL, las demás rutas simplemente se ignorarían. Por lo tanto necesitamos leer previamente todas las rutas y si ninguna coincide muéstranos la página de 404.



## Navegación (Link y NavLink)

React Router nos proporciona un componente <Link> para crear enlaces dentro de tu aplicación. Donde rendericemos un <Link> se renderizará un elemento <a> en el documento HTML. Algo importante para tener en cuenta es que al hacer click en un <Link> nuestra aplicación no se vuelve a cargar, funcionando así como una SPA.

```jsx
<Link to="/">Home</Link>
```

El <NavLink> es un tipo especial de <Link> que puede cambiar de estilo cuando está "activa" al coincidir la propiedad `to` con la ubicación actual.

```css
.active {
  background-color: crimson;
  color: white;
}
```

```jsx
<NavLink to="/" activeClass="active">
    Home
</NavLink>
```



## React Router Hooks

React Router trae un par de hooks que nos permiten acceder al estado del router y realizar navegación desde dentro de nuestros componentes.

- useHistory
- useLocation
- useParams
- useRouteMatch



## Rutas con parámetros

Utilizamos el hook `useParams` para acceder a las partes dinámicas de la URL.

```jsx
<Route path="/profile/:username" component={ProfilePage} />
```

```jsx
import { useParams } from 'react-router-dom'

const ProfilePage() {
  const {username} = useParams();
  return (
    <div>
      <h1>ProfilePage: {username}</h1>
    </div>
  )
}
```

`useParams` devuelve un objeto de pares de clave/valor de los parámetros de la URL. Se utiliza para poder acceder a `match.params` de la <Route> actual.



## Rutas con parámetros de tipo Query

Para poder leer los parámetros de búsqueda (query values) que nos llegan desde la URL tenemos que usar los hooks de **React Router** y una API nativa del navegador: `URLSearchParams`

Primero necesitamos acceder a la URL actual, para esto React Router nos proporciona con el hook `useLocation`. Este hook nos devuelve un objeto **location** que representa la URL actual. Puedes imaginarlo como un `useState` que devuelve un nuevo **location** cada vez que cambie la URL.

```jsx
const location = useLocation();	
```

El ojecto **location** tiene dos propiedades importantes: pathname y search:

- `pathname` es el nombre de la ruta 
- `search` son los parámetros de búsqueda (query string).

```js
// Ejemplo: http://localhost:3000/categories?skip=0&limit=10
{
  pathname: "/categories",
  search: "?skip=0&limit=10"
}	
```

Ahora para poder usar la API `URLSearchParams` tenemos que pasar como argumento los parámetros de búsqueda (query string) que están en **location.search**

```jsx
const query = new URLSearchParams(location.search);
```

Una vez que tenemos el objeto **query** del tipo `URLSearchParams` podemos utilizar los métodos que nos proporciona para recuperar la información.

```js
const skip = parseInt(query.get('skip'));
const limit = parseInt(query.get('limit'));
```

Existen otros métodos para las instancias de `URLSearchParams`, puedes leer sobre ellos [aquí](https://developer.mozilla.org/es/docs/Web/API/URLSearchParams).

Ahora que tenemos los parámetros de la búsqueda podemos actualizarlos con el método `query.set(name, value)` que recibe como argumento el nombre del parámetro a establecer y el valor de ese parámetro.

```js
query.set('skip', skip + 5);
```

Para poder reflejar estos cambios en la URL de nuestro navegador usamos el hook `useHistory` que nos da acceso a la instancia `history` que podemos usar para navegar por la aplicación. 

```js
const history = useHistory();

history.push({
 search: query.toString()
})
```

Puedes consultar el resto de las propiedades y métodos del objeto **history** [aquí](https://reactrouter.com/web/api/history).



## Autenticación



## Routers anidados 2 y 3 niveles


# Relatos de Papel – Front-end

Este repositorio contiene el desarrollo del **front-end en React** para el proyecto transversal _Relatos de Papel_, como parte de la Actividad 1 de la asignatura **Desarrollo Web Full Stack** del máster.

---

## Objetivos de la actividad

- Desarrollar una aplicación front-end con **React**, utilizando componentes funcionales, hooks, enrutamiento y estilos con metodología BEM.
- Implementar las siguientes vistas:
  - Landing (con redirección)
  - Página principal (con listado y búsqueda de libros)
  - Vista de libro
  - Carrito visible o desplegable
  - Checkout (con pago simulado)
- Aplicar conceptos clave: JSX, hooks (`useState`, `useEffect`, custom hook), rutas con **React Router v6**.
- Utilizar datos **mock** sin conexión a back-end.
- Desplegar el proyecto en **Vercel** y preparar una **videomemoria** explicativa.

---

## Tecnologías utilizadas

- [React 18](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router v6](https://reactrouter.com/en/main)
- CSS3 + metodología [BEM](http://getbem.com/)
- JavaScript ES6+
- Git + GitHub
- [Vercel](https://vercel.com/) (despliegue)



---

## Estructura de carpetas
relatos-de-papel-front/

├── public/

├── src/

│ ├── assets/ # Imágenes y recursos

│ ├── components/

│ │ ├── BookCard/

│ │ ├── Cart/

│ │ ├── Header/

│ │ └── Layout/

│ ├── contexts/ # Context API (opcional)

│ ├── hooks/ # Custom hooks

│ ├── mocks/ # Datos de prueba

│ ├── pages/

│ │ ├── LandingPage/

│ │ ├── HomePage/

│ │ ├── BookDetailsPage/

│ │ └── CheckoutPage/

│ ├── routes/ # Definición de rutas

│ ├── styles/ # Estilos globales

│ ├── App.jsx

│ └── main.jsx

├── README.md

└── package.json



---

## Colaboración

- **Una rama por funcionalidad.** No trabajar directamente sobre `main`.  
  Ejemplo: `feature/landing`, `feature/cart`, etc.

---

## Instrucciones para ejecutar el proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/MagdaOnaindia/relatos-de-papel-front.git
   
2. Instalar dependencias:

   ```bash
   npm install
   
3. Ejecutar en desarrollo:
   ```bash
   npm run dev

## Entrega final
Al finalizar, se entregará:

- Carpeta del proyecto SIN node_modules

- Archivo .txt con URL del despliegue en Vercel

- Videomemoria en formato MP4, duración máxima 10 minutos, cubriendo: Componentes y rutas, Hooks usados, Vistas y estilos destacados y Despliegue en Vercel



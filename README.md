# Proyecto: Sitio Web con Catálogo Musical

El sitio presenta una interfaz desarrollada en **JavaScript puro**, sin frameworks, que interactúa con un archivo para realizar una **promesa (_Promise_)**.

El catálogo incluye productos musicales como guitarras, pedales de efectos y amplificadores. Gracias a la interacción entre los archivos JS y el sitio, se emula un catálogo similar al de un backend.

---

## Puntos Clave

### 1. **Uso de Local Storage**
El **Local Storage** se utilizó para guardar un objeto (producto) y recuperarlo en otra página, permitiendo mostrar sus propiedades.

### 2. **Manejo de `innerHTML` para Inyección Dinámica**
Mediante diversos archivos JS, se utilizó `innerHTML` para:
- Inyectar información de los productos.
- Asignar contenido como hijo a un contenedor principal.

### 3. **Manejo de Eventos**
Se emplearon **event listeners** (`addEventListener`) para acciones como:
- El botón **Comprar**, que ejecuta varias funciones relacionadas.

### 4. **Estilos con CSS Puro**
El proyecto utiliza **CSS puro**, sin preprocesadores, dividido en diferentes hojas de estilo para mantener un formato concreto en el sitio.

### 5. **Estructura de Carpetas**
La distribución de los archivos es sencilla y sin seguir un patrón de diseño específico:
- **styles/**: Contiene las hojas de estilo CSS.
- **scripts/**: Archivos JavaScript del proyecto.
- **data/**: Archivo con los datos del catálogo.
- **pages/**: Páginas HTML del sitio.

---

## Nota Final

Este proyecto fue un desafío para mí. Estar acostumbrado a trabajar con frameworks hizo que olvidara algunos aspectos fundamentales de JavaScript puro. Sin embargo, me sentí motivado y desafiado al enfrentar estas dificultades.

Aunque me hubiera gustado entregar algo más completo, espero que el proyecto sea suficiente para cumplir con los requisitos de la materia. Si no es así, me comprometo a desarrollar un proyecto más acorde a las expectativas.

Desde ya, muchas gracias.

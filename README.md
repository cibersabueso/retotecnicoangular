# Todo List App

Esta aplicación de gestión de tareas (to-do list) permite a los usuarios crear, editar, eliminar y clasificar tareas.

## Instalación y configuración

1. Clonar el repositorio: `git clone <url-del-repositorio>`
2. Instalar dependencias: `npm install`
3. Iniciar la aplicación: `ng serve`
4. Abrir en el navegador: `http://localhost:4200`

## Guía de usuario

- Para añadir una tarea, utiliza el formulario en la parte superior de la página.
- Para marcar una tarea como completada, haz clic en el checkbox junto a la tarea.
- Para editar una tarea, haz clic en el icono de edición y modifica el título.
- Para eliminar una tarea, haz clic en el icono de papelera.
- Utiliza las pestañas para filtrar entre todas las tareas, tareas completadas y tareas pendientes.

## Decisiones de diseño y arquitectura

- Se ha utilizado Angular como framework principal para desarrollar una Single Page Application (SPA).
- Se ha implementado NgRx para la gestión del estado de la aplicación, permitiendo un manejo eficiente de los datos.
- Se ha utilizado Angular Material para los componentes de la interfaz, proporcionando un diseño moderno y coherente.
- Se ha implementado Lazy Loading para optimizar la carga de la aplicación.
- Se han seguido los principios de accesibilidad WCAG 2.1 para asegurar que la aplicación sea accesible para todos los usuarios.
- Se han implementado pruebas unitarias con Jasmine y Karma, y pruebas E2E con Cypress para garantizar la calidad del código.
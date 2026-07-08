# Multifiltros Puerto Montt

Página web institucional y de contacto para **Multifiltros Puerto Montt**, una empresa dedicada a la venta de filtros, lubricantes y productos para automóviles, maquinaria pesada, vehículos pesados y equipos marítimos.

El sitio puede ser visitado en la siguiente URL:

https://c-multifiltros.netlify.app/

## Descripción del proyecto

Este proyecto es un sitio web estático desarrollado en HTML, CSS y JavaScript. Su propósito es presentar la empresa, destacar sus productos y facilitar la cotización de clientes a través de un formulario de contacto.

La web incluye:
- Información institucional sobre la empresa.
- Sección de productos destacados.
- Formulario de cotización conectado a Formspree.
- Botón de contacto por WhatsApp.
- Footer con ubicación, datos de contacto y enlaces legales.
- Modales para términos, privacidad e información legal.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript vanilla
- Formspree para el envío del formulario

## Estructura del proyecto

```text
multifiltros-website/
├── index.html
├── img/
├── js/
│   └── modal.js
├── styles/
│   └── styles.css
└── README.md
```

## Requisitos

No se requiere instalación de dependencias. Solo necesitas un navegador moderno.

## Cómo ejecutar localmente

1. Clonar o descargar este repositorio.
2. Abrir el archivo `index.html` en el navegador.
3. Para una experiencia más cómoda, se puede utilizar una extensión como Live Server en VS Code.

## Funcionalidades principales

- Navegación rápida entre secciones.
- Diseño responsivo para pantallas pequeñas y grandes.
- Formulario de cotización con validación básica.
- Modal de políticas y condiciones.
- Integración con WhatsApp y redes sociales.

## Configuración del formulario

El formulario de cotización está conectado a Formspree mediante la acción:

```html
https://formspree.io/f/xdklprnp
```

Si cambias el endpoint o deseas usar otro servicio, debes actualizar el atributo `action` del formulario en `index.html`.

## Personalización

Se puede modificar:
- Los textos e información en `index.html`
- Los estilos visuales en `styles/styles.css`
- El comportamiento de los modales y del formulario en `js/modal.js`

## Autor

Multifiltros Puerto Montt

## Nota

Este sitio está pensado como una landing page comercial y de captación de clientes, por lo que su contenido puede ajustarse fácilmente según campañas, promociones o cambios de catálogo.

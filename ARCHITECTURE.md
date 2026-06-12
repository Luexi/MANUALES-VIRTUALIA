# ARCHITECTURE.md

## Modelo

MANUALES-VIRTUALIA es un sitio estatico sin build step. No usa npm, frameworks, backend, base de datos ni procesamiento server-side.

Esta preparado para GitHub Pages como project site:

https://luexi.github.io/MANUALES-VIRTUALIA/

## Rutas

- `/`: landing y selector de manuales.
- `/pms/`: manual completo de Virtualia PMS.
- `/hub/`: placeholder publico de Virtualia Hub.
- `/condo/`: placeholder publico de Virtualia Condo.

Todas las paginas usan rutas relativas para funcionar tanto en GitHub Pages como por doble clic desde filesystem. `assets/site.js` solo intercepta enlaces de directorio cuando el protocolo es `file:` y los redirige a `index.html`.

## GitHub Pages

`.nojekyll` evita el procesamiento Jekyll de GitHub Pages. La fuente esperada es:

- Branch: `main`
- Folder: `/`

## Datos y seguridad

El sitio no debe publicar secretos, credenciales, datos reales de clientes, residentes, unidades, reservas, importes internos ni promesas de funcionalidad no publicada.

Hub y Condo son placeholders documentales. PMS conserva el manual publico existente y sus assets.

## Agregar futuros manuales

- Reemplazar `hub/index.html` cuando el manual completo de Hub este listo.
- Reemplazar `condo/index.html` cuando el manual completo de Condo este listo.
- Agregar imagenes futuras dentro de `hub/img/` o `condo/img/`.
- Mantener rutas relativas como `img/captura.png`.
- Actualizar la landing si cambia el estado de un producto.
- Si la marca de Condo cambia en el producto fuente, reemplazar `assets/condo-mark.svg` y documentarlo en `DESIGN.md`.

## Reglas de verificacion

- Abrir `index.html` via `file:///`.
- Confirmar navegacion a `pms/`, `hub/` y `condo/`.
- Confirmar regreso desde Hub y Condo a la landing.
- Confirmar que `pms/img/` contiene 27 PNG y `pms-mark.svg`.
- Confirmar que todos los PNG de PMS cargan con ancho natural mayor a cero.
- Buscar rutas locales absolutas en HTML antes de publicar.
- Confirmar que no quedan referencias al antiguo sitio de PMS.

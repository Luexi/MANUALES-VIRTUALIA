# MANUALES-VIRTUALIA

Biblioteca publica de manuales operativos para productos Virtualia. Es un sitio estatico preparado para GitHub Pages como project site:

https://luexi.github.io/MANUALES-VIRTUALIA/

No usa build step, npm, frameworks, backend ni datos sensibles. Tambien funciona por doble clic desde filesystem porque todas las rutas son relativas.

## Estructura

```text
MANUALES-VIRTUALIA/
  index.html
  README.md
  DESIGN.md
  ARCHITECTURE.md
  .nojekyll
  pms/
    index.html
    img/
      27 PNG del manual PMS
      pms-mark.svg
  hub/
    index.html
  condo/
    index.html
  assets/
    virtualia-mark.svg
    virtualia-tic.png
    hub-mark.svg
    condo-mark.svg
    site.css
    site.js
```

## Estado actual

- Virtualia PMS: disponible como manual completo en `pms/`.
- Virtualia Hub: placeholder editorial publico en `hub/`; el manual completo esta en preparacion.
- Virtualia Condo: placeholder editorial publico en `condo/`; el manual completo esta en preparacion.

## Publicar en Git

```powershell
cd C:\Users\Luis\Desktop\MANUALES-VIRTUALIA
git init
git add .
git commit -m "docs: publica biblioteca de manuales Virtualia"
git branch -M main
git remote add origin https://github.com/Luexi/MANUALES-VIRTUALIA.git
git push -u origin main
```

Si `origin` ya existe, verifica que apunte a:

```powershell
git remote -v
```

## Activar GitHub Pages

1. Entra al repositorio en GitHub.
2. Abre `Settings`.
3. Entra a `Pages`.
4. En `Source`, elige `Deploy from a branch`.
5. En `Branch`, elige `main`.
6. En `Folder`, elige `/`.
7. Guarda.

La URL esperada es:

https://luexi.github.io/MANUALES-VIRTUALIA/

## Verificacion local

- Abrir `index.html` con doble clic.
- Confirmar que los enlaces a `pms/`, `hub/` y `condo/` cargan.
- Confirmar que `pms/` conserva sus 27 PNG y `pms-mark.svg`.
- Confirmar que Hub y Condo no publican secretos, datos reales ni promesas falsas.

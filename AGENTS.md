# AGENTS.md - Manuales Virtualia

## Proposito

Este repo publica la biblioteca publica de manuales operativos de Virtualia en GitHub Pages.

Es un sitio estatico pequeno: no tiene build step, npm, frameworks, backend ni datos privados. Debe funcionar tanto publicado en GitHub Pages como abierto por doble clic desde `file://`.

## Orden de lectura canonico

Para una tarea amplia de estructura o publicacion, lee en este orden:

1. `README.md`
2. `DESIGN.md`
3. `ARCHITECTURE.md`
4. `AGENTS.md`
5. El manual o carpeta afectada: `pms/`, `hub/` o `condo/`

Fuentes de verdad cuando haya conflicto:

- `README.md` manda para alcance publico, estado de manuales y pasos de publicacion.
- `DESIGN.md` manda para identidad visual, tokens, componentes y reglas de marca.
- `ARCHITECTURE.md` manda para rutas, estructura estatica, GitHub Pages y compatibilidad `file://`.
- `AGENTS.md` manda para disciplina de trabajo de agentes.

## Regla principal de contexto

No cargues ni revises todo el repo si la tarea es localizada. Empieza por el area afectada y amplia contexto solo cuando el cambio lo exija.

Para una tarea localizada, lee esta guia, el documento dueño del area y los archivos afectados. Abre otras referencias solo cuando resuelvan una pregunta del encargo.

Piensa antes de modificar. Resuelve primero la ambiguedad desde los archivos y la peticion. Pregunta solo si queda una opcion material de producto, permisos o contrato que no puedas resolver razonablemente; continua las partes independientes ya autorizadas.

## Alcance del repo

Estructura esperada:

- `/index.html`: landing de seleccion de manuales.
- `/pms/index.html`: manual completo de Virtualia PMS.
- `/pms/img/`: capturas y marca del manual PMS.
- `/hub/index.html`: placeholder publico de Virtualia Hub.
- `/condo/index.html`: placeholder publico de Virtualia Condo.
- `/assets/`: CSS, JS y marcas compartidas.
- `/.nojekyll`: desactiva Jekyll en GitHub Pages.
- `/README.md`: alcance, estado y publicacion.
- `/DESIGN.md`: identidad visual y reglas de marca.
- `/ARCHITECTURE.md`: rutas, estructura y estrategia estatica.
- `/AGENTS.md`: guia operativa para agentes.

## Reglas duras

- No usar npm.
- No usar frameworks.
- No agregar build step.
- No introducir backend, base de datos, APIs ni procesamiento server-side.
- No romper la apertura por doble clic desde filesystem.
- Usar rutas relativas, no rutas absolutas locales.
- Mantener `.nojekyll`.
- No publicar secretos, credenciales, datos reales, capturas privadas, importes internos ni informacion sensible.
- No usar rutas `C:\Users\...` dentro de HTML, CSS o JS versionado.
- No cambiar el contenido operativo de un manual salvo peticion explicita.
- No convertir los placeholders de Hub o Condo en promesas falsas.
- No traer reglas de repos mayores que no aplican aqui: Supabase, migraciones, service role, live tests, finanzas, sandbox hotel, runtime Excel, fases largas, backend o CI pesado.

## Identidad visual

La base Virtualia debe sentirse editorial, operativa, premium y sobria.

Tokens principales:

- Fondo papel: `#F6F4EE`
- Texto ink: `#0E2E3A`
- PMS azure: `#0F7DF5`
- Hub violet: `#7C3AED`
- Condo teal: `#0E8C6F`

Reglas:

- PMS nunca debe adoptar violeta como acento.
- Hub puede usar violeta como acento principal.
- Condo conserva teal como acento principal.
- La landing madre debe sentirse Virtualia, no de un producto especifico.
- Evitar emojis; preferir SVG inline cuando haga falta iconografia.
- Evitar blanco puro como fondo general.
- Evitar blobs, orbes y gradientes decorativos.
- Respetar el estilo existente antes de proponer otra direccion visual.

## Estado actual vs futuro

- PMS esta disponible como manual completo.
- Hub esta en preparacion.
- Condo esta en preparacion.

No presentes manuales futuros como completos. No afirmes integraciones, datos reales, automatizaciones, capacidades productivas o flujos ya implementados si solo son direccion futura.

## Cambios quirurgicos

- Toca solo los archivos necesarios para la tarea.
- Respeta el estilo existente.
- No reformatees todo el HTML si no es necesario.
- No muevas assets salvo que la tarea lo pida.
- No agregues features no pedidas.
- No introduzcas abstracciones especulativas.
- No mezcles deuda no relacionada con el cambio actual; mencionala en el cierre si vale la pena.
- Cada linea modificada debe poder explicarse desde el objetivo de la tarea.

## Verificacion obligatoria

Antes de cerrar cambios visuales, de rutas o de manuales, verifica lo que aplique:

- Abrir el sitio por `file://`.
- Confirmar que la landing carga.
- Confirmar que los links a `pms/`, `hub/` y `condo/` funcionan.
- Confirmar que PMS carga sus imagenes.
- Confirmar que no hay rutas `C:\Users\...` en HTML, CSS o JS.
- Confirmar que no hay links rotos obvios.
- Revisar responsive movil razonable.
- Confirmar que GitHub Pages sigue funcionando con rutas relativas.
- Si se toca print, lightbox o navegacion del PMS, probar esas interacciones.

Comandos sugeridos:

```powershell
rg "C:\\Users|MANUAL-PMS|github.io/MANUAL-PMS" .
rg "github.io/MANUALES-VIRTUALIA" .
```

## Documentacion que debe mantenerse sincronizada

- `README.md`: cuando cambie estructura, estado de manuales o pasos de publicacion.
- `DESIGN.md`: cuando cambien identidad, tokens, componentes o reglas visuales.
- `ARCHITECTURE.md`: cuando cambien rutas, estructura, GitHub Pages o estrategia estatica.
- `AGENTS.md`: cuando cambien reglas para agentes.

Mantener documentacion sincronizada no significa editar todo por rutina. Actualiza solo lo que cambie de verdad.

## Flujo Git

Este repo pequeno puede trabajarse sobre `main`, con disciplina:

- Revisa `git status --short --branch` antes de tocar archivos.
- No mezcles cambios no relacionados.
- No reviertas trabajo ajeno sin peticion explicita.
- Usa commits claros y acotados.
- Haz commit o `push` cuando la autorizacion vigente incluya esa accion. Para `push`, identifica el remoto y destino autorizados; tener un remoto configurado no constituye permiso. No repitas una confirmacion que ya cubra la misma accion y destino.

## Entregable esperado

Al cerrar una tarea, reporta:

- Archivos modificados.
- Resumen del cambio.
- Verificaciones ejecutadas.
- Riesgos o pendientes.
- Si hubo commit o push, incluye hash o estado.

El cierre debe dejar claro que cambio, que se verifico y que queda pendiente, sin presentar capacidades futuras como implementadas.

# DESIGN.md

## Proposito visual

MANUALES-VIRTUALIA es una biblioteca publica editorial-operativa. Debe sentirse premium, sobria y util para equipos que consultan manuales reales, no como una landing comercial pesada.

La direccion visual es una biblioteca de producto: papel calido, tipografia amplia, paneles de manual, marcas de producto y rutas claras.

## Principios

- Premium sobrio: composicion cuidada, sombras discretas, nada ornamental sin funcion.
- Operativo, no marketing pesado: la interfaz lleva al manual, no vende una promesa.
- Claridad antes que decoracion: estados, rutas y disponibilidad deben ser evidentes.
- Una familia visual, tres identidades de producto: PMS, Hub y Condo comparten sistema, pero conservan acento propio.

## Fuentes revisadas

- `Azul/DESIGN.md`: PMS usa azure `#0F7DF5`, fondo papel `#F6F4EE`, Manrope, Familjen Grotesk para byline y JetBrains Mono para datos tecnicos.
- `hub/DESIGN.md`: Hub usa violet `#7C3AED` como acento principal y el mark Pulse.
- `brand/BRAND.md`: el lockup correcto es producto grande y `by Virtualia` pequeno en Familjen Grotesk italic. No se reutiliza el mark corporativo de Virtualia TIC dentro de productos.
- `Condo/DESIGN.md` y la app Condo: confirman lockup visible `Condo by Virtualia`; el mark operativo activo es `cd-brand-mark`, un tile teal redondeado con `C`.

## Tokens

- `paper`: `#F6F4EE`
- `ink`: `#0E2E3A`
- `ink-2`: `#143946`
- `stone`: `#6F6E70`
- `stone-2`: `#9A9897`
- `mist`: `#E1DDD2`
- `surface`: `#FBFAF6`
- `PMS azure`: `#0F7DF5`
- `Hub violet`: `#7C3AED`
- `Condo teal`: `#0E8C6F`

## Tipografia

- Manrope: display, cuerpo, etiquetas y navegacion.
- Familjen Grotesk italic: exclusivamente para `by Virtualia`.
- JetBrains Mono: rutas, estados tecnicos y tokens.

## Reglas por producto

- PMS nunca usa violeta como identidad. Su acento es azure.
- Hub puede usar violeta como acento principal, sin caer en una UI dominada por violeta.
- Condo usa teal como acento principal y el mark rescatado del lockup activo del producto Condo.
- La landing madre debe sentirse Virtualia y biblioteca, no PMS.

## Componentes

- Landing selector card: panel editorial con mark, estado, descripcion, ruta y acento lateral.
- Product status chip: estado claro como `Disponible`, `Proximamente` o `Manual en preparacion`.
- Manual header: lockup de producto y regreso a biblioteca.
- Content shell: columnas de lectura con panel lateral de estado.
- Links y focus: `focus-visible` de alto contraste con el acento del producto.

## Accesibilidad

- `focus-visible` claro en links y cards.
- Contraste suficiente entre tinta, superficies y acentos.
- Responsive movil sin solapes ni texto comprimido.
- Soporte de `prefers-reduced-motion` para reducir transiciones.
- Sin emojis en UI.

# PMS Manual Update Audit - 2026-06-17

## Veredicto

`needs-update`

El manual publico PMS esta cerca del estado operativo actual, pero todavia tiene contradicciones y capturas desfasadas frente al cierre de Phase 13 en Azul. No esta bloqueado por arquitectura: debe seguir como sitio estatico HTML/CSS/JS, sin React, Vue, Svelte, npm, build step, backend ni cambios al runtime PMS.

## Archivos revisados

Azul, solo lectura:

- `README.md`
- `PRODUCT_SPEC.md`
- `architecture.md`
- `roadmap.md`
- `AGENTS.MD`
- `manualoperativo.md`
- `docs/finance-reporting-canon.md`
- `docs/phase-10-10-bank-module-spec.md`
- `docs/phase-10-10-bank-service-api-contracts.md`
- `docs/archive/phases/phase-13-financial-product-contract-2026-06-17.md`
- `docs/reports/pms-production-readiness-2026-06-17.md`

MANUALES-VIRTUALIA:

- `README.md`
- `DESIGN.md`
- `ARCHITECTURE.md`
- `AGENTS.md`
- `index.html`
- `pms/index.html`
- `assets/site.css`
- `assets/site.js`
- `pms/img/*`

## Secciones desfasadas

- `pms/index.html` roles: `Retiro de utilidad` aparecia permitido para `Recepcion`; Phase 13 lo deja como flujo gerencial de `admin`/`manager`.
- `pms/index.html` Caja: el bloque de ingreso/egreso podia leerse como si un egreso simple pudiera usar `Bancos`; debe quedar claro que el egreso simple de recepcion es cash-only.
- `pms/index.html` Caja: faltaba explicar `Depositar efectivo a banco` como transferencia interna permitida a recepcion con turno propio, sin saldos y sin abrir Banco completo.
- `pms/index.html` Finanzas: el copy visible usaba `Finanzas` de forma generica donde el nombre aprobado es `Finanzas gerenciales`.
- `pms/index.html` reservas grupales: faltaba declarar que anticipos/pagos grupales con tarjeta o transferencia requieren cuenta bancaria destino.
- `pms/index.html` Banco/Reportes: faltaban reglas Phase 13 sobre pago de cuenta pendiente, retiro de utilidad, comision bancaria, salida bancaria sin clasificacion y transferencias internas.
- `pms/index.html` FAQ/glosario: faltaban `Cuenta pendiente`, `Depositar efectivo a banco`, `Salida bancaria sin clasificacion` y `Comision bancaria`; tambien faltaba advertir que retiro de utilidad no paga proveedor/deuda.

## Secciones correctas

- El repo del manual sigue siendo estatico y compatible con GitHub Pages y `file://`.
- La landing mantiene PMS disponible y Hub/Condo como manuales en preparacion, sin prometer que esten completos.
- Front Desk ya indica que tarjeta/transferencia requiere cuenta bancaria destino y que recepcion no ve saldos.
- Anticipos individuales no-cash ya indican que no se registran sin cuenta bancaria configurada.
- Costo por noche ya se presenta como lectura gerencial, no contabilidad fiscal, con margen pendiente.
- Assistant PMS esta descrito como read-only y sin side effects de negocio.
- Hub no se presenta como runtime implementado dentro del PMS.

## Cambios obligatorios antes de publicar

- Corregir permisos visibles de `Retiro de utilidad` para quitarlo de recepcion.
- Usar `Finanzas gerenciales` como nombre visible principal del modulo gerencial.
- Dejar claro que recepcion opera Front Desk, reservas, pagos, Caja propia, venta rapida/ingreso, egreso simple cash-only y `Depositar efectivo a banco` sin saldos.
- Explicar que venta rapida/ingreso, anticipos y pagos card/transfer requieren cuenta bancaria destino.
- Explicar que `cash` no toca Banco y que card/transfer no inflan el efectivo esperado.
- Explicar que `Depositar efectivo a banco` es transferencia interna, no ingreso ni gasto.
- Explicar que el pago de cuenta pendiente no crea gasto nuevo.
- Explicar que retiro de utilidad no es gasto operativo ni pago a proveedor/deuda.
- Explicar que salida bancaria sin clasificacion es salida bancaria avanzada sin gasto real ni Costing.
- Explicar que comision bancaria es gasto financiero no operativo.
- Mantener Costing sin margen real.
- Mantener Assistant read-only.
- Mantener Phase 14 como contract-first ready, sin runtime Hub y sin caja/folios/pagos/saldos/reportes financieros para Hub.
- Mantener readiness `YELLOW` hasta `live-readonly` + smoke controlado en Hotel Sandbox.

## Cambios recomendados

- Cambiar copy de `Cuentas por pagar` a `Cuenta pendiente` cuando el contexto pueda ser recepcion; `CXP` puede quedar solo como termino secundario para gerencia/auditoria.
- Agregar mas contexto operativo a Banco para diferenciar gasto real, pago a acreedor, retiro de utilidad, comision, ajuste y transferencia.
- Reducir lenguaje tecnico visible en capturas y textos: no usar `Finance V2`, `posted`, `Business date`, `open`, `ledger`, `in` ni `out` como lenguaje operativo.
- Evitar que capturas tomadas con usuario admin parezcan pantallas disponibles para recepcion.

## Capturas que deben reemplazarse

Requieren nueva captura antes de una publicacion final:

- `pms/img/12-caja.png`: muestra usuario admin y boton `Retiro de utilidad`, riesgoso para una lectura de recepcion.
- `pms/img/12b-caja-movimientos.png`: no refleja la separacion final de Phase 13 para recepcion, `cash_to_bank` y flujos gerenciales.
- `pms/img/13-caja-movimiento.png`: no muestra la restriccion cash-only del egreso simple ni selector bancario para ingreso no-cash.
- `pms/img/18-reportes-resumen.png`: parece anterior a la navegacion financiera unificada en `/finance`.
- `pms/img/19-reportes-transacciones.png`: muestra `Pago CXP Finance V2`, `Business date` y lenguaje tecnico/legacy.
- `pms/img/20-reportes-corte.png`: muestra estado tecnico `open` y `Business date`.
- `pms/img/22-finanzas-gastos.png`: muestra `posted` y datos demo con `Finance V2`.

Recomendadas para reemplazo:

- `pms/img/02-frontdesk.png`: usuario admin y navegacion completa; conviene captura de recepcion sin Finanzas/Banco/Balance.
- `pms/img/06-nueva-reserva.png`: conviene mostrar el paso de anticipo con cuenta bancaria destino para card/transfer.
- `pms/img/07-detalle-reserva.png`: muestra terminos tecnicos como `extra_charge`, `lodging` y `reservation.total_amount`.
- `pms/img/08-grupo-detalle.png`: conviene mostrar regla de pago/anticipo grupal no-cash con cuenta bancaria.
- `pms/img/21-balance.png`: conviene captura de `/finance?tab=balance` final con Banco separado.
- `pms/img/24-banco.png`: conviene captura con cuentas/acciones reales de demo y copy final, sin sugerir saldos a recepcion.

## Riesgos de contradiccion

- Si se deja `Retiro de utilidad` disponible para recepcion, contradice `PRODUCT_SPEC.md`, `manualoperativo.md` y el contrato Phase 13.
- Si el egreso simple parece aceptar Banco, se puede confundir con egreso bancario, gasto real o pago a acreedor.
- Si Banco aparece como subpantalla accidental de Caja, se debilita la frontera de permisos: recepcion solo elige cuenta destino sin saldos.
- Si el manual usa `Finance V2` como marca visible, contradice el nombre aprobado `Finanzas gerenciales`.
- Si se presenta Phase 14 como implementada, se estaria prometiendo runtime Hub inexistente.
- Si se presenta readiness como `GREEN`, contradice el reporte de readiness `YELLOW`.

## Orden propuesto de edicion

1. Permisos y Caja: roles, egreso simple cash-only, retiro de utilidad gerencial y deposito de efectivo a banco.
2. Reservas y grupos: cuenta bancaria destino para anticipos/pagos card/transfer.
3. Reportes, Balance, Finanzas gerenciales, Banco y Costing: reglas Phase 13 y nombres visibles.
4. FAQ y glosario: reforzar cuenta pendiente, transferencia interna, salida bancaria sin clasificacion y comision bancaria.
5. Capturas: reemplazar las obligatorias; mientras tanto, mantener leyendas visibles de `requiere nueva captura`.
6. Validar rutas, imagenes, copy prohibido y apertura local por `file://`.

## Mantener estatico vs framework

Conviene mantener el manual como HTML estatico. React/Vue/Svelte no son necesarios salvo una necesidad futura nueva y concreta, como edicion interactiva compleja, busqueda client-side avanzada o generacion automatizada de multiples manuales. Para esta actualizacion, agregar framework seria deuda innecesaria y romperia el alcance del repo.

## Validaciones recomendadas despues de editar

- `rg "C:\\Users|MANUAL-PMS|github.io/MANUAL-PMS" .`
- `rg "Finance V2|Finanzas V2|\\bCXP\\b|ledger|posted|Business date|\\bopen\\b" pms/index.html`
- Confirmar que las 27 capturas PNG y `pms-mark.svg` existen y tienen ancho/alto mayor a cero.
- Abrir `index.html` por `file://` y probar links a `pms/`, `hub/` y `condo/`.
- Abrir `pms/index.html` por `file://`, probar indice de secciones y lightbox.
- Revisar ancho movil razonable sin solapes.
- Confirmar que no hay secretos, datos reales, importes internos sensibles ni rutas absolutas locales.
- Confirmar que no hay claims de Phase 14 runtime ni readiness `GREEN`.

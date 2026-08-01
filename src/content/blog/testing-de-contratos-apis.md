---
title: Testing de contratos para APIs sin friccion
description: Como validar que cliente y servidor siguen hablando el mismo idioma sin tests fragiles.
pubDate: 2026-04-30
tags:
  - Testing
  - APIs
  - Calidad
---

Los tests end-to-end capturan errores grandes, pero suelen ser lentos. Los tests unitarios son rapidos, pero no garantizan integracion real. El testing de contratos llena ese hueco.

## Que valida exactamente

- Campos obligatorios y opcionales.
- Tipos de datos.
- Codigos de respuesta esperados.
- Estructura de errores.

## Flujo recomendado

1. Define contrato con OpenAPI o JSON Schema.
2. Genera validadores para cliente y servidor.
3. Ejecuta pruebas de contrato en CI.

## Beneficio principal

Puedes refactorizar internamente sin romper consumidores, porque el contrato se vuelve una interfaz verificable.

## Nota practica

Incluye ejemplos de payload reales en el contrato. Eso reduce interpretaciones ambiguas y acelera el onboarding.
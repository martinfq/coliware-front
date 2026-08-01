---
title: Patrones de TypeScript que si uso en produccion
description: Tres patrones concretos para reducir bugs y hacer codigo mas facil de evolucionar.
pubDate: 2026-05-21
tags:
  - TypeScript
  - Diseno
  - Productividad
---

No todos los patrones merecen existir en tu base de codigo. Estos tres, en cambio, suelen pagar su costo rapido.

## 1. Value Objects para datos sensibles

Un `Email` como tipo explicito evita validaciones dispersas:

```ts
class Email {
  private constructor(public readonly value: string) {}

  static create(raw: string) {
    if (!raw.includes('@')) throw new Error('Email invalido');
    return new Email(raw.toLowerCase());
  }
}
```

## 2. Result en vez de excepciones para flujo normal

Usar `Result<T, E>` hace visibles los errores esperados y mejora la composicion.

## 3. Mappers entre capas

Transforma DTOs de entrada/salida en los bordes del sistema. Evita que tu dominio se contamine con formatos externos.

## Cierre

Patron util es patron que simplifica el mantenimiento. Si agrega ceremonia sin beneficio directo, mejor omitirlo.
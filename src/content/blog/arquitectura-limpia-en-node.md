---
title: Whatsapp Flows
description: Como crear un whatsaap flow
pubDate: 2026-06-08
updatedDate: 2026-06-10
tags:
  - Whatsaap
  - Arquitectura
  - Backend
---

La arquitectura limpia no consiste en crear veinte carpetas. Consiste en **mover la complejidad al lugar correcto**.

## Regla base

El dominio no conoce frameworks. Si cambias Express por Fastify, tu logica principal no deberia cambiar.

## Codigo Sencillo


```
{
  "version": "7.3",
  "data_api_version": "3.0",
  "routing_model": {
    "REGISTRO": []
  },
  "screens": [
    {
      "id": "REGISTRO",
      "title": "Registro",
      "terminal": true,
      "success": true,
      "data": {
        "user_name": {
          "type": "string",
          "__example__": "Martín"
        }
      },
      "layout": {
        "type": "SingleColumnLayout",
        "children": [
          {
            "type": "TextHeading",
            "text": "Hola, ${data.user_name}"
          },
          {
            "type": "TextBody",
            "text": "Por favor completa la siguiente información."
          },
          {
            "type": "Form",
            "name": "registro_form",
            "children": [
              {
                "type": "TextInput",
                "name": "nombre",
                "label": "Nombre",
                "required": true,
                "input-type": "text"
              },
              {
                "type": "TextInput",
                "name": "cedula",
                "label": "Cédula",
                "required": true,
                "input-type": "text"
              },
              {
                "type": "Footer",
                "label": "Enviar",
                "on-click-action": {
                  "name": "complete",
                  "payload": {
                    "nombre": "${form.nombre}",
                    "cedula": "${form.cedula}"
                  }
                }
              }
            ]
          }
        ]
      }
    }
  ]
}
```


## Clave publica

Cómo generarla

Con OpenSSL (Linux, macOS o Git Bash en Windows):

1. Generar la clave privada
```
openssl genrsa -out private.pem 2048
```
Obtendrás:

private.pem

Guárdala en un lugar seguro.

2. Generar la clave pública
```
openssl rsa -in private.pem -pubout -out public.pem
```

Obtendrás:

public.pem

Su contenido será parecido a:

-----BEGIN PUBLIC KEY-----
MIIBIjANBgkq...
...
...
AQAB
-----END PUBLIC KEY-----


Debes usar multipart/form-data (en algunas colecciones oficiales de Postman aparece simplemente como form-data).

Configuración en Postman

Método

POST

URL
```
https://graph.facebook.com/v23.0/{PHONE_NUMBER_ID}/whatsapp_business_encryption
```

Authorization

Bearer Token

Tu Access Token de WhatsApp Cloud API.
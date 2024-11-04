# Calculadora

Los metodos esperan un argumento numeros el cual es un string, los cuales indican los numeros separados por coma.

Ej: Sumar -> 3,3,3 -> 3+3+3.
Restar -> 4,4,4 -> 4-4-4.

## Validaciones.

1. Argumento no puede ser vacio.
2. Argumento no puede ser string.
3. Argumento debe contener como minimo dos numeros separados por coma (sino no seria operación)
4. No se permiten letras.

## Arrancar App

Correr npm install

npm run start

## Endpoint Sumar

http://localhost:3000/calculadora/sumar?numeros=3,3,3

## Endpoint Restar

http://localhost:3000/calculadora/sumar?numeros=3,3,a

## Testing

npm run test

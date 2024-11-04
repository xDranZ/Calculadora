import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class CalculadoraService {
  transformarNumeros(numeros: string): number[] {
    const numerosArray = numeros.split(',').map((num) => {
      const numero = Number(num);
      if (isNaN(numero)) {
        throw new BadRequestException(
          'Todos los elementos deben ser números válidos',
        );
      }
      return numero;
    });

    return numerosArray;
  }
  sumar(numeros: number[]): number {
    return numeros.reduce((acc, curr) => acc + curr, 0);
  }

  restar(numeros: number[]): number {
    if (numeros.length === 0) return 0;
    return numeros.reduce((acc, curr) => acc - curr);
  }
}

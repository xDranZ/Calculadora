import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculadoraService {
  sumar(numeros: number[]): number {
    return numeros.reduce((acc, curr) => acc + curr, 0);
  }

  restar(numeros: number[]): number {
    if (numeros.length === 0) return 0;
    return numeros.reduce((acc, curr) => acc - curr);
  }
}

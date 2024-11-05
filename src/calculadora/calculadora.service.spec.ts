import { CalculadoraService } from './calculadora.service';
import { BadRequestException } from '@nestjs/common';

describe('CalculadoraService', () => {
  let calculadoraService: CalculadoraService;

  beforeEach(() => {
    calculadoraService = new CalculadoraService();
  });

  describe('sumar', () => {
    it('debería sumar todos los números en el array', () => {
      const numeros = [1, 2, 3];
      const resultado = calculadoraService.sumar(numeros);
      expect(resultado).toBe(6);
    });

    it('debería retornar 0 si el array está vacío', () => {
      const numeros: number[] = [];
      const resultado = calculadoraService.sumar(numeros);
      expect(resultado).toBe(0);
    });
  });

  describe('restar', () => {
    it('debería restar todos los números en el array', () => {
      const numeros = [10, 2, 3];
      const resultado = calculadoraService.restar(numeros);
      expect(resultado).toBe(5);
    });

    it('debería retornar 0 si el array está vacío', () => {
      const numeros: number[] = [];
      const resultado = calculadoraService.restar(numeros);
      expect(resultado).toBe(0);
    });

    it('debería retornar el mismo número si el array tiene un solo elemento', () => {
      const numeros = [5];
      const resultado = calculadoraService.restar(numeros);
      expect(resultado).toBe(5);
    });
  });
});

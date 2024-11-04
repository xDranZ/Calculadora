import { CalculadoraService } from './calculadora.service';
import { BadRequestException } from '@nestjs/common';

describe('CalculadoraService', () => {
  let calculadoraService: CalculadoraService;

  beforeEach(() => {
    calculadoraService = new CalculadoraService();
  });

  describe('transformarNumeros', () => {
    it('debería transformar una cadena de números válidos en un array de números', () => {
      const numeros = '1,2,3';
      const resultado = calculadoraService.transformarNumeros(numeros);
      expect(resultado).toEqual([1, 2, 3]);
    });

    it('debería lanzar una excepción si la cadena contiene un valor no numérico', () => {
      const numerosInvalidos = '1,a,3';
      expect(() =>
        calculadoraService.transformarNumeros(numerosInvalidos),
      ).toThrow(BadRequestException);
      expect(() =>
        calculadoraService.transformarNumeros(numerosInvalidos),
      ).toThrow('Todos los elementos deben ser números válidos');
    });

    it('debería manejar correctamente los números decimales', () => {
      const numeros = '1.5,2.5,3';
      const resultado = calculadoraService.transformarNumeros(numeros);
      expect(resultado).toEqual([1.5, 2.5, 3]);
    });
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

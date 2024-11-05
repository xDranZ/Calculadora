import { Transform } from 'class-transformer';
import { IsArray, IsNumber, ArrayMinSize } from 'class-validator';

export class NumerosDto {
  @Transform(({ value }) => {
    // Nota: Por alguna razon, entra dos veces, una como string y otra como array.
    if (typeof value === 'string') {
      return value.split(',').map(Number);
    }
    return value;
  })
  @IsArray()
  @IsNumber({}, { each: true })
  @ArrayMinSize(2)
  numeros: number[];
}

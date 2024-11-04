import { IsString, Matches, IsNotEmpty } from 'class-validator';

export class NumerosDto {
  @IsString({ message: 'El parámetro "numeros" debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La cadena de números no debe estar vacía' })
  @Matches(/^[0-9]+(\.[0-9]+)?,[0-9]+(\.[0-9]+)?(,[0-9]+(\.[0-9]+)?)*$/, {
    message:
      'El String debe contener al menos dos números separados por comas (Las letras no son permitidas)',
  })
  numeros: string;
}

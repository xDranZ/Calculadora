import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CalculadoraService } from './calculadora.service';
import { NumerosDto } from './calculadora.dto';

@Controller('calculadora')
export class CalculadoraController {
  constructor(private readonly calculadoraService: CalculadoraService) {}

  @Get('sumar')
  @UsePipes(ValidationPipe)
  sumar(@Query() query: NumerosDto) {
    const numerosArray = this.calculadoraService.transformarNumeros(
      query.numeros,
    );
    return this.calculadoraService.sumar(numerosArray);
  }

  @Get('restar')
  @UsePipes(ValidationPipe)
  restar(@Query() query: NumerosDto) {
    const numerosArray = this.calculadoraService.transformarNumeros(
      query.numeros,
    );
    return this.calculadoraService.restar(numerosArray);
  }
}

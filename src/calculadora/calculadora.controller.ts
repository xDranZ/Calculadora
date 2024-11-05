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
    return this.calculadoraService.sumar(query.numeros);
  }

  @Get('restar')
  @UsePipes(ValidationPipe)
  restar(@Query() query: NumerosDto) {
    return this.calculadoraService.restar(query.numeros);
  }

  @Get('multiplicar')
  @UsePipes(ValidationPipe)
  multiplicar(@Query() query: NumerosDto) {
    return this.calculadoraService.multiplicar(query.numeros);
  }
}

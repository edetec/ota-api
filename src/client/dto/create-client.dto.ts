import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate } from 'class-validator';

export class ClientDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  @Type(() => Date)
  @IsDate()
  birth: Date;
}

import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate } from 'class-validator';

export class TravelDto {
  @ApiProperty({ required: true })
  clientId: number;

  @ApiProperty({ required: true })
  destination: string;

  @ApiProperty({ required: true })
  @Type(() => Date)
  @IsDate()
  date: Date;
}

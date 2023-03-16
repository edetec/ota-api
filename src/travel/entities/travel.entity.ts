import { ApiProperty } from '@nestjs/swagger';
import { Travel } from '@prisma/client';

export class TravelEntity implements Travel {
  @ApiProperty()
  id: number;

  @ApiProperty()
  clientId: number;

  @ApiProperty()
  destination: string;

  @ApiProperty()
  date: Date;
}

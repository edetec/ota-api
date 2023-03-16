import { ApiProperty } from '@nestjs/swagger';
import { Client } from '@prisma/client';

export class ClientEntity implements Client {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  birth: Date;
}

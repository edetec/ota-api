import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClientDto } from './dto/create-client.dto';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  create(data: ClientDto) {
    return this.prisma.client.create({ data });
  }

  findAll() {
    return this.prisma.client.findMany();
  }

  findOne(id: number) {
    return this.prisma.client.findFirstOrThrow({ where: { id } });
  }

  update(id: number, data: ClientDto) {
    return this.prisma.client.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.client.delete({ where: { id } });
  }
}

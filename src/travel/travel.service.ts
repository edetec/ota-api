import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TravelDto } from './dto/travel.dto';

@Injectable()
export class TravelService {
  constructor(private prisma: PrismaService) {}

  create(data: TravelDto) {
    return this.prisma.travel.create({ data });
  }

  findAll() {
    return this.prisma.travel.findMany();
  }

  findOne(id: number) {
    return this.prisma.travel.findFirstOrThrow({ where: { id } });
  }

  update(id: number, data: TravelDto) {
    return this.prisma.travel.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.travel.delete({ where: { id } });
  }
}

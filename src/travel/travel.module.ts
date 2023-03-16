import { Module } from '@nestjs/common';
import { TravelService } from './travel.service';
import { TravelController } from './travel.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TravelController],
  providers: [TravelService],
  imports: [PrismaModule],
})
export class TravelModule {}

import { Test, TestingModule } from '@nestjs/testing';
import { createPrismaMock } from 'src/prisma/mock/prisma.mock';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { TravelService } from './travel.service';

describe('TravelService', () => {
  let service: TravelService;
  const prismaMock = createPrismaMock();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TravelService],
      imports: [PrismaModule],
    })
      .overrideProvider(PrismaService)
      .useValue(prismaMock)
      .compile();

    service = module.get<TravelService>(TravelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // TODO testar todos os metodos do serviço
});

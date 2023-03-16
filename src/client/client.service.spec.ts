import { Test, TestingModule } from '@nestjs/testing';
import { createPrismaMock } from 'src/prisma/mock/prisma.mock';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClientService } from './client.service';

describe('ClientService', () => {
  let service: ClientService;
  const prismaMock = createPrismaMock();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientService],
      imports: [PrismaModule],
    })
      .overrideProvider(PrismaService)
      .useValue(prismaMock)
      .compile();

    service = module.get<ClientService>(ClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a client', async () => {
    const data = {
      name: 'Ana',
      birth: new Date(1990, 0, 31),
    };
    const clientMock = {
      id: 1,
      ...data,
    };
    prismaMock.client.create.mockResolvedValue(clientMock);
    const resp = await service.create(data);
    expect(resp).toMatchObject(clientMock);
  });

  // TODO testar todos os metodos do serviço
});

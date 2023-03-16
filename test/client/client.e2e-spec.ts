import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { createPrismaMock } from 'src/prisma/mock/prisma.mock';
import { PrismaService } from 'src/prisma/prisma.service';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

const clientMock = {
  id: 1,
  name: 'Ana',
  birth: new Date(1990, 0, 31),
};

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const prismaMock = createPrismaMock();

  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PrismaService)
      .useValue(prismaMock)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/client (GET)', () => {
    return request(app.getHttpServer()).get('/client').expect(200);
  });

  it('/client (POST)', async () => {
    prismaMock.client.create.mockResolvedValue(clientMock);
    const { name, birth } = clientMock;
    return request(app.getHttpServer())
      .post('/client/')
      .send({ name, birth })
      .expect(201)
      .expect({
        ...clientMock,
        birth: clientMock.birth.toISOString(),
      });
  });

  // TODO testar todas as rota do modulo client
});

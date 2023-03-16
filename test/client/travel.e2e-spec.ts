import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { createPrismaMock } from 'src/prisma/mock/prisma.mock';
import { PrismaService } from 'src/prisma/prisma.service';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('TravelController (e2e)', () => {
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

  it('/travel (GET)', () => {
    return request(app.getHttpServer()).get('/travel').expect(200);
  });

  // TODO testar todas as rotas do modulo travel
});

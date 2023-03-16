import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ClassSerializerInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ClientService } from './client.service';
import { ClientDto } from './dto/create-client.dto';
import { ClientEntity } from './entities/client.entity';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('client')
@ApiTags('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  @ApiCreatedResponse({ type: ClientEntity })
  create(@Body() createClientDto: ClientDto) {
    return this.clientService.create(createClientDto);
  }

  @Get()
  @ApiOkResponse({ type: ClientEntity, isArray: true })
  findAll(): Promise<ClientEntity[]> {
    return this.clientService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ClientEntity })
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ClientEntity })
  update(@Param('id') id: string, @Body() updateClientDto: ClientDto) {
    return this.clientService.update(+id, updateClientDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ClientEntity })
  remove(@Param('id') id: string) {
    return this.clientService.remove(+id);
  }
}

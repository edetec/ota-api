import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TravelService } from './travel.service';
import { TravelDto } from './dto/travel.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TravelEntity } from './entities/travel.entity';

@Controller('travel')
@ApiTags('travel')
export class TravelController {
  constructor(private readonly travelService: TravelService) {}

  @Post()
  @ApiCreatedResponse({ type: TravelEntity })
  create(@Body() createTravelDto: TravelDto) {
    return this.travelService.create(createTravelDto);
  }

  @Get()
  @ApiOkResponse({ type: TravelEntity, isArray: true })
  findAll() {
    return this.travelService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: TravelEntity })
  findOne(@Param('id') id: string) {
    return this.travelService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: TravelEntity })
  update(@Param('id') id: string, @Body() updateTravelDto: TravelDto) {
    return this.travelService.update(+id, updateTravelDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TravelEntity })
  remove(@Param('id') id: string) {
    return this.travelService.remove(+id);
  }
}

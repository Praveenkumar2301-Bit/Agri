import { Controller, Get, Param, Query } from '@nestjs/common';
import { ListingsService } from './listings.service';

@Controller('listings')
export class ListingsController {
  constructor(private listingsService: ListingsService) {}

  @Get()
  async findAll(
    @Query('category') category?: string,
    @Query('q') q?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.listingsService.findAll({
      category: category || '',
      q: q || '',
      page: page || '1',
      limit: limit || '20',
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const listing = await this.listingsService.findOne(id);
    if (!listing) {
      return { statusCode: 404, message: 'Listing not found' };
    }
    return listing;
  }
}

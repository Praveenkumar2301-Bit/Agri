import { Controller, Get, Query } from '@nestjs/common';
import { MarketPricesService } from './market-prices.service';

@Controller('market-prices')
export class MarketPricesController {
  constructor(private marketPricesService: MarketPricesService) {}

  @Get()
  async findAll(
    @Query('marketId') marketId?: string,
    @Query('crop') crop?: string,
    @Query('fromDate') fromDate?: string,
    @Query('toDate') toDate?: string,
  ) {
    return this.marketPricesService.findAll({
      marketId: marketId || '',
      crop: crop || '',
      fromDate: fromDate || '',
      toDate: toDate || '',
    });
  }
}

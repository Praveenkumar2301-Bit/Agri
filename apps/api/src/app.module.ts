import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ListingsModule } from './listings/listings.module';
import { CategoriesModule } from './categories/categories.module';
import { MarketPricesModule } from './market-prices/market-prices.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // TypeORM: Uncomment when PostgreSQL is ready. See docs/DATABASE_SCHEMA.md
    // TypeOrmModule.forRoot({ ... }),
    AuthModule,
    ListingsModule,
    CategoriesModule,
    MarketPricesModule,
  ],
})
export class AppModule {}

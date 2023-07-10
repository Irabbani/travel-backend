import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodAndDrinksModule } from '../food-and-drinks/food-and-drinks.module';
import { HotelsModule } from '../hotels/hotels.module';
import { ThingToDoModule } from '../thing-to-do/thing-to-do.module';
import { ThingToSeeModule } from '../thing-to-see/thing-to-see.module';
import { TourAccessoriesModule } from '../tour-accessories/tour-accessories.module';
import { ToursModule } from '../tours/tours.module';
import { TransportModule } from '../transport/transport.module';
import { Reviews } from './review.entity';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([Reviews]),
    ToursModule,
    TransportModule,
    HotelsModule,
    TourAccessoriesModule,
    ThingToSeeModule,
    ThingToDoModule,
    FoodAndDrinksModule
  ],
  controllers: [ReviewsController],
  providers: [ReviewsService]
})

export class ReviewsModule { }
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Routes } from './routes/route.entity';
import { RoutesController } from './routes/routes.controller';
import { RoutesService } from './routes/routes.service';
import { TourServicesController } from './tour-services/tour-services.controller';
import { TourServicesService } from './tour-services/tour-services.service';
import { Tours } from './tour.entity';
import { ToursController } from './tours.controller';
import { ToursService } from './tours.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tours, Routes]),
  ],
  controllers: [
    ToursController,
    RoutesController,
    TourServicesController
  ],
  providers: [
    ToursService,
    RoutesService,
    TourServicesService
  ],
  exports: [ToursService],
})
export class ToursModule { }

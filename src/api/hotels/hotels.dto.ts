import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateHotelDto {
  @IsOptional()
  @IsBoolean()
  isRu: boolean;

  @IsOptional()
  @IsBoolean()
  isHy: boolean;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  name_ru: string;

  @IsString()
  @IsNotEmpty()
  name_hy: string;

  @IsString()
  @IsNotEmpty()
  thumbnail: string;

  @IsString()
  @IsNotEmpty()
  googleMap: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  fromAirport: boolean;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  country_ru: string;

  @IsString()
  @IsNotEmpty()
  country_hy: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  city_ru: string;

  @IsString()
  @IsNotEmpty()
  city_hy: string;

  @IsNumber()
  @IsNotEmpty()
  type: number;

  @IsBoolean()
  @IsOptional()
  freeCancellation: boolean;

  @IsOptional()
  @IsString()
  checkInTime: string;

  @IsString()
  @IsOptional()
  checkOutTime: string;

  @IsString()
  @IsNotEmpty()
  shortDescription: string;

  @IsString()
  @IsNotEmpty()
  shortDescription_ru: string;

  @IsString()
  @IsNotEmpty()
  shortDescription_hy: string;

  @IsString()
  @IsNotEmpty()
  longDescription: string;

  @IsString()
  @IsNotEmpty()
  longDescription_ru: string;

  @IsString()
  @IsNotEmpty()
  longDescription_hy: string;

  @IsArray()
  @IsOptional()
  images: Array<string>;

  @IsArray()
  @IsOptional()
  pricingData: Array<PricingTableDto>;
}


class PricingTableDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  name_ru: string;

  @IsOptional()
  @IsString()
  name_hy: string;

  @IsNumber()
  @IsNotEmpty()
  firstPart: number;

  @IsNumber()
  @IsNotEmpty()
  lastPart: number;
}

export class UpdateHotelDto {
  @IsOptional()
  @IsBoolean()
  isRu: boolean;

  @IsOptional()
  @IsBoolean()
  isHy: boolean;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  name_ru: string;

  @IsOptional()
  @IsString()
  name_hy: string;

  @IsOptional()
  @IsString()
  thumbnail: string;

  @IsOptional()
  @IsString()
  googleMap: string;

  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  fromAirport: boolean;

  @IsOptional()
  @IsString()
  country: string;

  @IsOptional()
  @IsString()
  country_ru: string;

  @IsOptional()
  @IsString()
  country_hy: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  city_ru: string;

  @IsOptional()
  @IsString()
  city_hy: string;

  @IsOptional()
  @IsNumber()
  type: number;

  @IsOptional()
  @IsBoolean()
  freeCancellation: boolean;

  @IsOptional()
  @IsString()
  checkInTime: string;

  @IsOptional()
  @IsString()
  checkOutTime: string;

  @IsOptional()
  @IsString()
  shortDescription: string;

  @IsOptional()
  @IsString()
  shortDescription_ru: string;

  @IsOptional()
  @IsString()
  shortDescription_hy: string;

  @IsOptional()
  @IsString()
  longDescription: string;

  @IsOptional()
  @IsString()
  longDescription_ru: string;

  @IsOptional()
  @IsString()
  longDescription_hy: string;
}
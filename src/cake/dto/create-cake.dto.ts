import { ParseArrayPipe } from "@nestjs/common";
import { Type } from "class-transformer";
import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";
import { ArrayTransformer } from "src/pipes/array.transformer";


export class CreateCakeDTO{
    @IsOptional()
    id?: number;
    name : string;
    @IsNumber()
    price : number;

    @ArrayTransformer()
    @IsArray()
    @Type(() => String)
    @IsString({ each: true })
    flavors : string[]
}
import { BadRequestException, Logger } from "@nestjs/common";
import { Transform } from "class-transformer";

const logger = new Logger("ArrayTransformer");
export function ArrayTransformer() {

    return Transform((arrayString: string) => {
        try{
            const arr = JSON.parse(arrayString);
            return arr;
        }catch(e){
            logger.debug(`Error while parsing value ${arrayString} to an object`,e)
            throw new BadRequestException(`${arrayString} is not an array`);
        }
    })
}
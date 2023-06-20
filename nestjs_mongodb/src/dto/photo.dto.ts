import { IsNotEmpty, IsString } from 'class-validator';

export class PhotoDto {
    @IsNotEmpty()
    @IsString()
    readonly url: string;

    @IsNotEmpty()
    @IsString()
    readonly user: string;
}

import { MaxLength, MinLength, IsString, IsInt } from "class-validator";

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  readonly firstname: string;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  readonly lastname: string;
  @IsInt()
  readonly age: string;
}

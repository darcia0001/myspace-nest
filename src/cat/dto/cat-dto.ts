import { IsInt, IsString } from "class-validator";

export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;

  isValide() {
    return this.name.length > 2;
  }
}

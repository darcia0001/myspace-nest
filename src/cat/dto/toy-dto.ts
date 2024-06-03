import { IsString } from "class-validator";

export class CreateToyDto {
  @IsString()
  name: string;

  @IsString()
  owner: string;

  constructor(name: string, owner: string) {
    this.name = name.toUpperCase();
    this.owner = owner;
  }
}

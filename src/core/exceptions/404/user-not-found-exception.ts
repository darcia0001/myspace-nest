import { NotFoundException } from "@nestjs/common";

export class UserNotFoundException extends NotFoundException {
  constructor() {
    super("Utilisateur not found ");
  }
}

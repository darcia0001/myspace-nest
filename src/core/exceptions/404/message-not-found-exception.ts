import { NotFoundException } from "@nestjs/common";

export class MessageNotFoundException extends NotFoundException {
  constructor() {
    super("Message not found ");
  }
}

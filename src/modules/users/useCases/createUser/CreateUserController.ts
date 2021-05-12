import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(request: Request, response: Response): Response {
    let user;
    try {
      user = this.createUserUseCase.execute(request.body);
    } catch (err) {
      return response.status(400).json({ error: "User already exists" });
    }

    return response.status(201).json(user);
  }
}

export { CreateUserController };

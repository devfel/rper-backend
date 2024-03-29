import { Request, Response } from 'express';
import { container } from "tsyringe";
import { classToClass } from 'class-transformer';


import UpdateUserAvatarService from "@modules/users/services/UpdateUserAvatarService";

export default class UserAvatarController {
    public async update(request: Request, response: Response): Promise<Response> {
        const updateUserAvatar = container.resolve(UpdateUserAvatarService);
        if (request.file) {
            const user = await updateUserAvatar.execute({
                user_id: request.user.id,
                avatarFilename: request.file.filename,
            });
            return response.json(classToClass(user));
        } else {  //Fix to return error as file was not found.
            return response.json({ ok: true });
        }
    }
}
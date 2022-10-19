import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import Rper from "../infra/typeorm/entities/Rper";
import IRpersRepository from "@modules/rpers/repositories/IRpersRepository";
import IUsersRepository from "@modules/users/repositories/IUsersRepository";

interface IRequestDTO {
    rper_id: string;
    members_ids: string[];
}

@injectable()
class AddMembersToRperService {
    constructor(
        @inject('RpersRepository')
        private rpersRepository: IRpersRepository,

        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) { }

    async execute({ members_ids, rper_id }: IRequestDTO): Promise<Rper> {
        const rper = await this.rpersRepository.findById(rper_id);

        if (!rper) {
            throw new AppError('RPER not found', 404);
        }

        const users = await this.usersRepository.findByIds(members_ids);

        if (users.length === 0) {
            throw new AppError('No users found', 404);
        }

        rper.members = users;

        rper.members.map(member => {
            delete member.password;
            return member
        })

        await this.rpersRepository.update(rper);

        return rper;
    }
}

export default AddMembersToRperService;
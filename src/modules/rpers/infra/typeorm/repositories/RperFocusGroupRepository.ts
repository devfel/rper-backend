import { ICreateRperFocusGroupDTO } from "@modules/rpers/dtos/ICreateRperFocusGroupDTO";
import { IRperFocusGroupRepository } from "@modules/rpers/repositories/IRperFocusGroupRepository";
import { RperFocusGroup } from "../entities/RperFocusGroup";
import { getRepository, Repository } from "typeorm";

export class RperFocusGroupRepository implements IRperFocusGroupRepository {

    private ormRepository: Repository<RperFocusGroup>;

    constructor() {
        this.ormRepository = getRepository(RperFocusGroup);
    }

    async create(data: ICreateRperFocusGroupDTO): Promise<RperFocusGroup> {
        const rperFocusGroup = this.ormRepository.create(data);

        await this.ormRepository.save(rperFocusGroup);

        return rperFocusGroup;
    }

    async findByRperId(rper_id: string): Promise<RperFocusGroup> {
        return this.ormRepository.findOne({ where: { rper_id } });
    }

    async update(rperFocusGroup: RperFocusGroup): Promise<void> {
        await this.ormRepository.save(rperFocusGroup);
    }

}
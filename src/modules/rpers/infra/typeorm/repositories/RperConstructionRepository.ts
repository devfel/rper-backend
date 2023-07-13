import { ICreateRperConstructionDTO } from "@modules/rpers/dtos/ICreateRperConstructionDTO";
import { IRperConstructionRepository } from "@modules/rpers/repositories/IRperConstructionRepository";
import { RperConstruction } from "../entities/RperConstruction";
import { getRepository, Repository } from "typeorm";

export class RperConstructionRepository implements IRperConstructionRepository {

    private ormRepository: Repository<RperConstruction>;

    constructor() {
        this.ormRepository = getRepository(RperConstruction);
    }

    async create(data: ICreateRperConstructionDTO): Promise<RperConstruction> {
        const rperConstruction = this.ormRepository.create(data);

        await this.ormRepository.save(rperConstruction);

        return rperConstruction;
    }

    async findByRperId(rper_id: string): Promise<RperConstruction> {
        return this.ormRepository.findOne({ where: { rper_id } });
    }

    async update(rperConstruction: RperConstruction): Promise<void> {
        await this.ormRepository.save(rperConstruction);
    }

}
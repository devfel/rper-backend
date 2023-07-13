import { ICreateRperInputAndOutputDTO } from "@modules/rpers/dtos/ICreateRperInputAndOutputDTO";
import { IRperInputAndOutputRepository } from "@modules/rpers/repositories/IRperInputAndOutputRepository";
import { RperInputAndOutput } from "../entities/RperInputAndOutput";
import { getRepository, Repository } from "typeorm";

export class RperInputAndOutputRepository implements IRperInputAndOutputRepository {

    private ormRepository: Repository<RperInputAndOutput>;

    constructor() {
        this.ormRepository = getRepository(RperInputAndOutput);
    }

    async create(data: ICreateRperInputAndOutputDTO): Promise<RperInputAndOutput> {
        const rperInputAndOutput = this.ormRepository.create(data);

        await this.ormRepository.save(rperInputAndOutput);

        return rperInputAndOutput;
    }

    async findByRperId(rper_id: string): Promise<RperInputAndOutput> {
        return this.ormRepository.findOne({ where: { rper_id } });
    }

    async update(rperInputAndOutput: RperInputAndOutput): Promise<void> {
        await this.ormRepository.save(rperInputAndOutput);
    }

}
import { ICreateRperFinalConsiderationDTO } from "@modules/rpers/dtos/ICreateRperFinalConsiderationDTO";
import { IRperFinalConsiderationRepository } from "@modules/rpers/repositories/IRperFinalConsiderationRepository";
import { RperFinalConsideration } from "../entities/RperFinalConsideration";
import { getRepository, Repository } from "typeorm";

export class RperFinalConsiderationRepository implements IRperFinalConsiderationRepository {

    private ormRepository: Repository<RperFinalConsideration>;

    constructor() {
        this.ormRepository = getRepository(RperFinalConsideration);
    }

    async create(data: ICreateRperFinalConsiderationDTO): Promise<RperFinalConsideration> {
        const rperFinalConsideration = this.ormRepository.create(data);

        await this.ormRepository.save(rperFinalConsideration);

        return rperFinalConsideration;
    }

    async findByRperId(rper_id: string): Promise<RperFinalConsideration> {
        return this.ormRepository.findOne({ where: { rper_id } });
    }

    async update(rperFinalConsideration: RperFinalConsideration): Promise<void> {
        await this.ormRepository.save(rperFinalConsideration);
    }

}
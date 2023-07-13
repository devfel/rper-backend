import { ICreateRperOtherPreparationDTO } from "@modules/rpers/dtos/ICreateRperOtherPreparationDTO";
import { IRperOtherPreparationRepository } from "@modules/rpers/repositories/IRperOtherPreparationRepository";
import { RperOtherPreparation } from "../entities/RperOtherPreparation";
import { getRepository, Repository } from "typeorm";

export class RperOtherPreparationRepository implements IRperOtherPreparationRepository {

    private ormRepository: Repository<RperOtherPreparation>;

    constructor() {
        this.ormRepository = getRepository(RperOtherPreparation);
    }

    async create(data: ICreateRperOtherPreparationDTO): Promise<RperOtherPreparation> {
        const rperOtherPreparation = this.ormRepository.create(data);

        await this.ormRepository.save(rperOtherPreparation);

        return rperOtherPreparation;
    }

    async findByRperId(rper_id: string): Promise<RperOtherPreparation> {
        return this.ormRepository.findOne({ where: { rper_id } });
    }

    async update(rperOtherPreparation: RperOtherPreparation): Promise<void> {
        await this.ormRepository.save(rperOtherPreparation);
    }

}
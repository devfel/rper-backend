import { ICreateRperExtraInformationDTO } from "@modules/rpers/dtos/ICreateRperExtraInformationDTO";
import { IRperExtraInformationRepository } from "@modules/rpers/repositories/IRperExtraInformationRepository";
import { RperExtraInformation } from "../entities/RperExtraInformation";
import { getRepository, Repository } from "typeorm";

export class RperExtraInformationRepository implements IRperExtraInformationRepository {

    private ormRepository: Repository<RperExtraInformation>;

    constructor() {
        this.ormRepository = getRepository(RperExtraInformation);
    }

    async create(data: ICreateRperExtraInformationDTO): Promise<RperExtraInformation> {
        const rperExtraInformation = this.ormRepository.create(data);

        await this.ormRepository.save(rperExtraInformation);

        return rperExtraInformation;
    }

    async findByRperId(rper_id: string): Promise<RperExtraInformation> {
        return this.ormRepository.findOne({ where: { rper_id } });
    }

    async update(rperExtraInformation: RperExtraInformation): Promise<void> {
        await this.ormRepository.save(rperExtraInformation);
    }

}
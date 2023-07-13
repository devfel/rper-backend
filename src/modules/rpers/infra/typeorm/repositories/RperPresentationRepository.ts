import { ICreateRperPresentationDTO } from "@modules/rpers/dtos/ICreateRperPresentationDTO";
import { IRperPresentationRepository } from "@modules/rpers/repositories/IRperPresentationRepository";
import { RperPresentation } from "../entities/RperPresentation";
import { getRepository, Repository } from "typeorm";

export class RperPresentationRepository implements IRperPresentationRepository {

    private ormRepository: Repository<RperPresentation>;

    constructor() {
        this.ormRepository = getRepository(RperPresentation);
    }

    async create(data: ICreateRperPresentationDTO): Promise<RperPresentation> {
        const rperPresentation = this.ormRepository.create(data);

        await this.ormRepository.save(rperPresentation);

        return rperPresentation;
    }

    async findByRperId(rper_id: string): Promise<RperPresentation> {
        return this.ormRepository.findOne({ where: { rper_id } });
    }

    async update(rperPresentation: RperPresentation): Promise<void> {
        await this.ormRepository.save(rperPresentation);
    }

}
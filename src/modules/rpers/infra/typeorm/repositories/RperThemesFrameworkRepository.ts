import { ICreateRperThemesFrameworkDTO } from "@modules/rpers/dtos/ICreateRperThemesFrameworkDTO";
import { IRperThemesFrameworkRepository } from "@modules/rpers/repositories/IRperThemesFrameworkRepository";
import { RperThemesFramework } from "../entities/RperThemesFramework";
import { getRepository, Repository } from "typeorm";

export class RperThemesFrameworkRepository implements IRperThemesFrameworkRepository {

    private ormRepository: Repository<RperThemesFramework>;

    constructor() {
        this.ormRepository = getRepository(RperThemesFramework);
    }

    async create(data: ICreateRperThemesFrameworkDTO): Promise<RperThemesFramework> {
        const rperThemesFramework = this.ormRepository.create(data);

        await this.ormRepository.save(rperThemesFramework);

        return rperThemesFramework;
    }

    async findByRperId(rper_id: string): Promise<RperThemesFramework> {
        return this.ormRepository.findOne({ where: { rper_id } });
    }

    async update(rperThemesFramework: RperThemesFramework): Promise<void> {
        await this.ormRepository.save(rperThemesFramework);
    }

}
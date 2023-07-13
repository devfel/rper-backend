import { ICreateRperVennDiagramDTO } from "@modules/rpers/dtos/ICreateRperVennDiagramDTO";
import { IRperVennDiagramRepository } from "@modules/rpers/repositories/IRperVennDiagramRepository";
import { RperVennDiagram } from "../entities/RperVennDiagram";
import { getRepository, Repository } from "typeorm";

export class RperVennDiagramRepository implements IRperVennDiagramRepository {

    private ormRepository: Repository<RperVennDiagram>;

    constructor() {
        this.ormRepository = getRepository(RperVennDiagram);
    }

    async create(data: ICreateRperVennDiagramDTO): Promise<RperVennDiagram> {
        const rperVennDiagram = this.ormRepository.create(data);

        await this.ormRepository.save(rperVennDiagram);

        return rperVennDiagram;
    }

    async findByRperId(rper_id: string): Promise<RperVennDiagram> {
        return this.ormRepository.findOne({ where: { rper_id } });
    }

    async update(rperVennDiagram: RperVennDiagram): Promise<void> {
        await this.ormRepository.save(rperVennDiagram);
    }

}
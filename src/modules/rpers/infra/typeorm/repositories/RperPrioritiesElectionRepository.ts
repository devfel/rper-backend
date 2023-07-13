import { ICreateRperPrioritiesElectionDTO } from "@modules/rpers/dtos/ICreateRperPrioritiesElectionDTO";
import { IRperPrioritiesElectionRepository } from "@modules/rpers/repositories/IRperPrioritiesElectionRepository";
import { RperPrioritiesElection } from "../entities/RperPrioritiesElection";
import { getRepository, Repository } from "typeorm";

export class RperPrioritiesElectionRepository implements IRperPrioritiesElectionRepository {

    private ormRepository: Repository<RperPrioritiesElection>;

    constructor() {
        this.ormRepository = getRepository(RperPrioritiesElection);
    }

    async create(data: ICreateRperPrioritiesElectionDTO): Promise<RperPrioritiesElection> {
        const rperPrioritiesElection = this.ormRepository.create(data);

        await this.ormRepository.save(rperPrioritiesElection);

        return rperPrioritiesElection;
    }

    async findByRperId(rper_id: string): Promise<RperPrioritiesElection> {
        return this.ormRepository.findOne({ where: { rper_id } });
    }

    async update(rperPrioritiesElection: RperPrioritiesElection): Promise<void> {
        await this.ormRepository.save(rperPrioritiesElection);
    }

}
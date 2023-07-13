import { ICreateRperInterviewsDTO } from "@modules/rpers/dtos/ICreateRperInterviewsDTO";
import { IRperInterviewsRepository } from "@modules/rpers/repositories/IRperInterviewsRepository";
import { RperInterviews } from "../entities/RperInterviews";
import { getRepository, Repository } from "typeorm";

export class RperInterviewsRepository implements IRperInterviewsRepository {

    private ormRepository: Repository<RperInterviews>;

    constructor() {
        this.ormRepository = getRepository(RperInterviews);
    }

    async create(data: ICreateRperInterviewsDTO): Promise<RperInterviews> {
        const rperInterviews = this.ormRepository.create(data);

        await this.ormRepository.save(rperInterviews);

        return rperInterviews;
    }

    async findByRperId(rper_id: string): Promise<RperInterviews> {
        return this.ormRepository.findOne({ where: { rper_id } });
    }

    async update(rperInterviews: RperInterviews): Promise<void> {
        await this.ormRepository.save(rperInterviews);
    }

}
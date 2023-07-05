import { ICreateRperAcknowledgmentDTO } from "@modules/rpers/dtos/ICreateRperAcknowledgmentDTO";
import { IRperAcknowledgmentRepository } from "@modules/rpers/repositories/IRperAcknowledgmentRepository";
import { RperAcknowledgment } from "../entities/RperAcknowledgment";
import { getRepository, Repository } from "typeorm";

export class RperAcknowledgmentRepository implements IRperAcknowledgmentRepository {

    private ormRepository: Repository<RperAcknowledgment>;

    constructor() {
        this.ormRepository = getRepository(RperAcknowledgment);
    }

    async create(data: ICreateRperAcknowledgmentDTO): Promise<RperAcknowledgment> {
        const rperAcknowledgment = this.ormRepository.create(data);

        await this.ormRepository.save(rperAcknowledgment);

        return rperAcknowledgment;
    }

    async findByRperId(rper_id: string): Promise<RperAcknowledgment> {
        return this.ormRepository.findOne({ where: { rper_id } });
    }

    async update(rperAcknowledgment: RperAcknowledgment): Promise<void> {
        await this.ormRepository.save(rperAcknowledgment);
    }

}
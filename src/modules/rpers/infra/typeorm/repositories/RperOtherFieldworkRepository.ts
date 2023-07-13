import { ICreateRperOtherFieldworkDTO } from "@modules/rpers/dtos/ICreateRperOtherFieldworkDTO";
import { IRperOtherFieldworkRepository } from "@modules/rpers/repositories/IRperOtherFieldworkRepository";
import { RperOtherFieldwork } from "../entities/RperOtherFieldwork";
import { getRepository, Repository } from "typeorm";

export class RperOtherFieldworkRepository implements IRperOtherFieldworkRepository {

    private ormRepository: Repository<RperOtherFieldwork>;

    constructor() {
        this.ormRepository = getRepository(RperOtherFieldwork);
    }

    async create(data: ICreateRperOtherFieldworkDTO): Promise<RperOtherFieldwork> {
        const rperOtherFieldwork = this.ormRepository.create(data);

        await this.ormRepository.save(rperOtherFieldwork);

        return rperOtherFieldwork;
    }

    async findByRperId(rper_id: string): Promise<RperOtherFieldwork> {
        return this.ormRepository.findOne({ where: { rper_id } });
    }

    async update(rperOtherFieldwork: RperOtherFieldwork): Promise<void> {
        await this.ormRepository.save(rperOtherFieldwork);
    }

}
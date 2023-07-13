import { ICreateRperRealityAndObjMatrixDTO } from "@modules/rpers/dtos/ICreateRperRealityAndObjMatrixDTO";
import { IRperRealityAndObjMatrixRepository } from "@modules/rpers/repositories/IRperRealityAndObjMatrixRepository";
import { RperRealityAndObjMatrix } from "../entities/RperRealityAndObjMatrix";
import { getRepository, Repository } from "typeorm";

export class RperRealityAndObjMatrixRepository implements IRperRealityAndObjMatrixRepository {

    private ormRepository: Repository<RperRealityAndObjMatrix>;

    constructor() {
        this.ormRepository = getRepository(RperRealityAndObjMatrix);
    }

    async create(data: ICreateRperRealityAndObjMatrixDTO): Promise<RperRealityAndObjMatrix> {
        const rperRealityAndObjMatrix = this.ormRepository.create(data);

        await this.ormRepository.save(rperRealityAndObjMatrix);

        return rperRealityAndObjMatrix;
    }

    async findByRperId(rper_id: string): Promise<RperRealityAndObjMatrix> {
        return this.ormRepository.findOne({ where: { rper_id } });
    }

    async update(rperRealityAndObjMatrix: RperRealityAndObjMatrix): Promise<void> {
        await this.ormRepository.save(rperRealityAndObjMatrix);
    }

}
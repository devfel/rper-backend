import { ICreateRperDailyRoutineDTO } from "@modules/rpers/dtos/ICreateRperDailyRoutineDTO";
import { IRperDailyRoutineRepository } from "@modules/rpers/repositories/IRperDailyRoutineRepository";
import { RperDailyRoutine } from "../entities/RperDailyRoutine";
import { getRepository, Repository } from "typeorm";

export class RperDailyRoutineRepository implements IRperDailyRoutineRepository {

    private ormRepository: Repository<RperDailyRoutine>;

    constructor() {
        this.ormRepository = getRepository(RperDailyRoutine);
    }

    async create(data: ICreateRperDailyRoutineDTO): Promise<RperDailyRoutine> {
        const rperDailyRoutine = this.ormRepository.create(data);

        await this.ormRepository.save(rperDailyRoutine);

        return rperDailyRoutine;
    }

    async findByRperId(rper_id: string): Promise<RperDailyRoutine> {
        return this.ormRepository.findOne({ where: { rper_id } });
    }

    async update(rperDailyRoutine: RperDailyRoutine): Promise<void> {
        await this.ormRepository.save(rperDailyRoutine);
    }

}
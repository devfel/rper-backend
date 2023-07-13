import { ICreateRperInterviewsDTO } from "../dtos/ICreateRperInterviewsDTO";
import { RperInterviews } from "../infra/typeorm/entities/RperInterviews";

export interface IRperInterviewsRepository {
    create(data: ICreateRperInterviewsDTO): Promise<RperInterviews>
    findByRperId(rper_id: string): Promise<RperInterviews>
    update(rperInterviews: RperInterviews): Promise<void>
}
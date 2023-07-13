import { ICreateRperPrioritiesElectionDTO } from "../dtos/ICreateRperPrioritiesElectionDTO";
import { RperPrioritiesElection } from "../infra/typeorm/entities/RperPrioritiesElection";

export interface IRperPrioritiesElectionRepository {
    create(data: ICreateRperPrioritiesElectionDTO): Promise<RperPrioritiesElection>
    findByRperId(rper_id: string): Promise<RperPrioritiesElection>
    update(rperPrioritiesElection: RperPrioritiesElection): Promise<void>
}
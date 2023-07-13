import { ICreateRperFocusGroupDTO } from "../dtos/ICreateRperFocusGroupDTO";
import { RperFocusGroup } from "../infra/typeorm/entities/RperFocusGroup";

export interface IRperFocusGroupRepository {
    create(data: ICreateRperFocusGroupDTO): Promise<RperFocusGroup>
    findByRperId(rper_id: string): Promise<RperFocusGroup>
    update(rperFocusGroup: RperFocusGroup): Promise<void>
}
import { ICreateRperExtraInformationDTO } from "../dtos/ICreateRperExtraInformationDTO";
import { RperExtraInformation } from "../infra/typeorm/entities/RperExtraInformation";

export interface IRperExtraInformationRepository {
    create(data: ICreateRperExtraInformationDTO): Promise<RperExtraInformation>
    findByRperId(rper_id: string): Promise<RperExtraInformation>
    update(rperExtraInformation: RperExtraInformation): Promise<void>
}
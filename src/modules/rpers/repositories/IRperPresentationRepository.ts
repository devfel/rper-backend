import { ICreateRperPresentationDTO } from "../dtos/ICreateRperPresentationDTO";
import { RperPresentation } from "../infra/typeorm/entities/RperPresentation";

export interface IRperPresentationRepository {
    create(data: ICreateRperPresentationDTO): Promise<RperPresentation>
    findByRperId(rper_id: string): Promise<RperPresentation>
    update(rperPresentation: RperPresentation): Promise<void>
}
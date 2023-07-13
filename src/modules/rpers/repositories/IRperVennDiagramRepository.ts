import { ICreateRperVennDiagramDTO } from "../dtos/ICreateRperVennDiagramDTO";
import { RperVennDiagram } from "../infra/typeorm/entities/RperVennDiagram";

export interface IRperVennDiagramRepository {
    create(data: ICreateRperVennDiagramDTO): Promise<RperVennDiagram>
    findByRperId(rper_id: string): Promise<RperVennDiagram>
    update(rperVennDiagram: RperVennDiagram): Promise<void>
}
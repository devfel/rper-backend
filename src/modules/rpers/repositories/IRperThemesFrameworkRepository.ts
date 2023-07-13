import { ICreateRperThemesFrameworkDTO } from "../dtos/ICreateRperThemesFrameworkDTO";
import { RperThemesFramework } from "../infra/typeorm/entities/RperThemesFramework";

export interface IRperThemesFrameworkRepository {
    create(data: ICreateRperThemesFrameworkDTO): Promise<RperThemesFramework>
    findByRperId(rper_id: string): Promise<RperThemesFramework>
    update(rperThemesFramework: RperThemesFramework): Promise<void>
}
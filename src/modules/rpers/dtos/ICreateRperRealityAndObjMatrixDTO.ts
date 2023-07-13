import { RperStatus } from 'enums'

export interface ICreateRperRealityAndObjMatrixDTO {
    rper_id: string;
    content?: string;
    status?: RperStatus;
}
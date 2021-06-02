import {IRole} from './role.model';

export interface ICoordinator {
  id: number;
  name: string;
  role: IRole;
}

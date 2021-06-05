import {IRole} from './role.model';

export interface IUser {
  id: number;
  name: string;
  role?: IRole;
}

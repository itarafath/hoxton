import {IUser} from './user.model';

export interface IPolicy {
  id: number;
  name: string;
  type: string;
  coordinator?: IUser;
}

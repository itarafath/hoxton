import {IPolicy} from './policy.model';

export interface ILead {
  id: number;
  name: string;
  mobile: string;
  type: string;
  policies: IPolicy[];
}

import {ICoordinator} from './coordinator.model';

export interface IPolicy {
  id: number;
  name: string;
  type: string;
  coordinator?: ICoordinator;
}

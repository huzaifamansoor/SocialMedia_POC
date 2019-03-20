import { Injectable } from '@angular/core';
import { TopBottomPerformer } from '../../models/top-bottom-performer.model';
@Injectable({
  providedIn: 'root'
})
export class TopBottomPerformerService {

  constructor() { }

  topPerformer: TopBottomPerformer[] = [];
  bottomPerformer: TopBottomPerformer[] = [];

  getTopPerformer() {
    this.topPerformer = [
      {name: 'Comox Valley Toyota', rating: 0, response_rate: '0%'},
      {name: 'Peroformance Toyota', rating: 0, response_rate: '0%'},
      {name: 'South Pointe Toyota', rating: 0, response_rate: '0%'},
      {name: 'Leveille Toyota', rating: 0, response_rate: '0%'},
      {name: 'Chasse Toyota', rating: 0, response_rate: '0%'},
    ];
    return this.topPerformer;
  }

  getBottomPerformer() {
    this.bottomPerformer = [
      {name: 'Destination Toyota Burnaby', rating: 1, response_rate: '50%'},
      {name: 'Don Valley North Toyota', rating: 1, response_rate: '50%'},
      {name: 'Leveille Toyota', rating: 0, response_rate: '0%'},
      {name: 'Performance Toyota', rating: 0, response_rate: '0%'},
      {name: 'South Pointe Toyota', rating: 0, response_rate: '0%'},
    ];
    return this.bottomPerformer;
  }
}

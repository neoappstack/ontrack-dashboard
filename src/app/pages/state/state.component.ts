import { StateService } from './../../_services/state.service';
import { State } from './../../_models/state';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  states: State[];
  dtTrigger: Subject<any> = new Subject<any>();



  constructor(
    private toastr: ToastrService,
    private stateService: StateService
    ) {
    this.stateService.list().subscribe((states: State[]) => {
      this.states = states;
      this.dtTrigger.next();
    });
    }

  ngOnInit(): void {
  }

  removeState(id : Number) {
    this.stateService.remove(id).subscribe((removedId: Number) => {
      this.states = this.states.filter(item => item.id !== id);
      this.toastr.error( 'State with id ' + removedId + " has been removed.",'State Master');
    });
  }

}

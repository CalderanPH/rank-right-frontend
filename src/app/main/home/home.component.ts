import { Component } from '@angular/core';
import {Evaluation} from "../../shared/dto/Evaluation";
import {EvaluationService} from "../../shared/services/evaluation.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  displayedColumns: string[] = ['email', 'rating', 'observations', 'contactInfo'];
  dataSource: Evaluation[] = [];

  constructor(private evaluationService: EvaluationService) {
    this.findAll();
  }

  protected findAll() {
    this.evaluationService.findAll().subscribe(resp => {
      this.dataSource = resp;
    });
  }
}

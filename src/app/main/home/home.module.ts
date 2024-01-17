import {Input, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {MaterialModule} from 'src/app/shared/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {EvaluationFormComponent} from '../evaluation-form/evaluation-form.component';
import {Evaluation} from "../../shared/dto/Evaluation";
import {EvaluationService} from "../../shared/services/evaluation.service";

@NgModule({
  declarations: [HomeComponent, EvaluationFormComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [HomeComponent, EvaluationFormComponent],
})
export class HomeModule {
  displayedColumns: string[] = ['email', 'rating', 'observations', 'contactInfo'];
  dataSource: Evaluation[] = [];

  constructor(private evaluationService: EvaluationService) {
    this.findAll();
  }

  private findAll() {
    this.evaluationService.findAll().subscribe(resp => {
      this.dataSource = resp;
    });
  }
}

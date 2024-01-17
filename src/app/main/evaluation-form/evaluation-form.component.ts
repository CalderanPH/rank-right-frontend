import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {Overlay} from '@angular/cdk/overlay';
import {of} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {ConfirmationModalComponent} from 'src/app/shared/modal/confirmation-modal/confirmation-modal.component';
import {EvaluationService} from "../../shared/services/evaluation.service";

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.scss']
})
export class EvaluationFormComponent implements OnInit {
  @Output() registered: any = new EventEmitter<any>();

  form: FormGroup = new FormGroup(
    {
      email: new FormControl(null, Validators.required),
      rating: new FormControl(null, Validators.required),
      observations: new FormControl(null, Validators.required),
      contactInfo: new FormControl(null, Validators.required),
    });

  constructor(
    private evaluationService: EvaluationService,
    private dialog: MatDialog,
    private overlay: Overlay
  ) {
  }

  ngOnInit() {
  }

  sendData() {
    this.evaluationService
      .create(this.form.value)
      .subscribe((resp: HttpResponse<any>) => {
        this.dialog.open(ConfirmationModalComponent, {
          data: 'OK',
          width: 'fit-content',
          autoFocus: true,
          scrollStrategy: this.overlay.scrollStrategies.noop(),
        });
        this.registered.emit('');
        this.form.reset();
      }, (error) => {
        this.dialog.open(ConfirmationModalComponent, {
          data: 'ERROR',
          width: 'fit-content',
          autoFocus: true,
          scrollStrategy: this.overlay.scrollStrategies.noop(),
        });
        return of(error);
      });
  }

  protected readonly parseInt = parseInt;
}

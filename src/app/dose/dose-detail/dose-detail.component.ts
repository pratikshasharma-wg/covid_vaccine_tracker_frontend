import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoseService } from '../dose.service';
import { MessageService } from '../../shared/message/message.service';

@Component({
  selector: 'app-dose-detail',
  templateUrl: './dose-detail.component.html',
  styleUrl: './dose-detail.component.css'
})
export class DoseDetailComponent {
  @ViewChild('vaccineForm') form: NgForm;

  vaccineName: string;
  doseDate: string;
  doseCid: string;

  constructor(private doseService: DoseService, private messageService: MessageService) {

  }

  submitForm() {
    if (this.form.valid) {
      this.vaccineName = this.form.value.vaccineName;
      this.doseDate = this.form.value.doseDate;
      this.doseCid = this.form.value.doseCid;
      this.doseService.addDoseDetail({vaccine_name: this.vaccineName, dose_date: this.doseDate, dose_cid: this.doseCid}).subscribe((resData: any) => {
        this.messageService.showMessage(resData.message);
      })
      console.log(this.form.value);
      this.form.resetForm();
    }
  }
}

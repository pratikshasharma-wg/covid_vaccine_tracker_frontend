import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoseService } from '../dose.service';
import { MessageService } from '../../shared/message/message.service';
import { DoseDetailModel } from './dose-detail.model';
import { VaccineService } from '../../vaccines/vaccine.service';
import { ResourceLoader } from '@angular/compiler';


@Component({
  selector: 'dose-detail',
  templateUrl: './dose-detail.component.html',
  styleUrl: './dose-detail.component.css'
})
export class DoseDetailComponent {
  @Output('closeForm') submitted = new EventEmitter<void>();
  @ViewChild('vaccineForm') form: NgForm;

  vaccines: { vaccine_id: number, vaccine_name: string };
  vaccineName: string;
  doseDate: string;
  doseCid: string;
  doseDetail: DoseDetailModel;
  doseNumber = null;

  constructor(
    private doseService: DoseService,
    private messageService: MessageService,
    private vaccineService: VaccineService
  ) {

  }

  ngOnInit() {
    this.vaccineService.getVaccines().subscribe((vaccines) => {
      this.vaccines = vaccines["vaccines"];
    })
  }

  submitForm() {
    console.log(this.doseNumber)
    if (this.form.valid) {
      this.vaccineName = this.form.value.vaccineName;
      this.doseDate = this.form.value.doseDate;
      this.doseCid = this.form.value.doseCid;
      let formattedDate;

      const dateString = this.doseDate;
      const parts = dateString.split('-');
      formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;

      this.doseService.addDoseDetail(
        {
          vaccine_name: this.vaccineName,
          dose_date: formattedDate,
          dose_cid: this.doseCid,
        },
        this.doseNumber
      )
        .subscribe(
          (resData: any) => {
            this.form.resetForm();
            this.messageService.showMessage(resData.message);
            this.submitted.emit();
          }, (error) => {
            this.submitted.emit();
            this.messageService.showMessage(error.error.message);
          })
    }
  }
}

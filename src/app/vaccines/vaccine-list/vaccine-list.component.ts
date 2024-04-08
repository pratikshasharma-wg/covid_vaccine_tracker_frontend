import { Component, OnInit, inject } from '@angular/core';
import { VaccineService } from '../vaccine.service';
import { MessageService } from '../../shared/message/message.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-vaccine-list',
  templateUrl: './vaccine-list.component.html',
  styleUrl: './vaccine-list.component.css'
})
export class VaccineListComponent implements OnInit{
  vaccineName: string;
  vaccines: {vaccine_id: string, vaccine_name: string}[] = [];

  constructor(
    private vaccineService: VaccineService, 
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {

  }

  ngOnInit() {
    this.vaccineService.getVaccines().subscribe((vaccineData: {vaccine_id: string, vaccine_name: string}[]) => {
      this.vaccines = vaccineData["vaccines"];
      console.log(this.vaccines);
    }, (error) => {
      this.messageService.showMessage(error.error.message);
    })
    this.vaccineService.vaccineDeleted.subscribe((vaccineId) => {
      console.log(vaccineId);
      this.vaccines = this.vaccines.filter(vaccine => vaccine['vaccine_id'] !== vaccineId)
    })
  }

  confirmAddVaccine() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to add this vaccine?',
      accept: () => {
        this.addVaccine();
      },
      reject: () => {
      }
    });
  }

  addVaccine() {
    this.vaccineService.addVaccines({vaccine_name: this.vaccineName}).subscribe( (resData: any) => {
      this.messageService.showMessage(resData.message);
      this.vaccines.push({vaccine_id: resData.vaccine_id, vaccine_name: this.vaccineName});
      this.vaccineName = '';
    },
    (error) => {
      this.messageService.showMessage(error.error.message);
    })
  }
}

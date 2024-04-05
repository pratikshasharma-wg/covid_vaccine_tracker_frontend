import { Component, OnInit, inject } from '@angular/core';
import { VaccineService } from '../vaccine.service';
import { MessageService } from '../../shared/message/message.service';

@Component({
  selector: 'app-vaccine-list',
  templateUrl: './vaccine-list.component.html',
  styleUrl: './vaccine-list.component.css'
})
export class VaccineListComponent implements OnInit{
  vaccineName: string;

  constructor(private vaccineService: VaccineService, private messageService: MessageService) {

  }

  vaccines: {vaccineId: string, vaccineName: string}[] = [];

  ngOnInit() {
    this.vaccineService.getVaccines().subscribe((vaccineData: {vaccineId: string, vaccineName: string}[]) => {
      this.vaccines = vaccineData["vaccines"];
      console.log(vaccineData["vaccines"]);
    }, (error) => {
      this.messageService.showMessage(error.error.message);
    })
  }

  addVaccine() {
    this.vaccineService.addVaccines({vaccine_name: this.vaccineName}).subscribe( (resData: any) => {
      this.messageService.showMessage(resData.message);
      this.vaccines.push({vaccineId: resData.vaccine_id, vaccineName: this.vaccineName})
      console.log(this.vaccines);
    },
    (error) => {
      this.messageService.showMessage(error.error.message);
    })
  }
}

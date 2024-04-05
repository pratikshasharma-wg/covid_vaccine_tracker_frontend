import { Component, Input } from '@angular/core';
import { VaccineService } from '../vaccine.service';
import { MessageService } from '../../shared/message/message.service';

@Component({
  selector: 'app-vaccine-detail',
  templateUrl: './vaccine-detail.component.html',
  styleUrl: './vaccine-detail.component.css'
})
export class VaccineDetailComponent {
  @Input() vaccineNum: number;
  @Input() vaccineDetail;

  constructor(private vaccineService: VaccineService, private messageService: MessageService) {

  }

  deleteVaccine(vaccineId) {
    this.vaccineService.removeVaccine(vaccineId).subscribe((resData: any) => {
      this.messageService.showMessage(resData.message);
    },(error) => {
      this.messageService.showMessage(error.error?.message);
    })
  }
}

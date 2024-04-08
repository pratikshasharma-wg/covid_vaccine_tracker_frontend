import { Component } from '@angular/core';
import { DoseService } from '../dose.service';
import { MessageService } from '../../shared/message/message.service';

@Component({
  selector: 'app-verify-dose-detail',
  templateUrl: './verify-dose-detail.component.html',
  styleUrl: './verify-dose-detail.component.css'
})
export class VerifyDoseDetailComponent {
  unapprovedData: any

  constructor(private doseService: DoseService, private messageService: MessageService) {

  }

  ngOnInit() {
    this.doseService.isApproved.subscribe((approvalId) => {
      this.unapprovedData = this.unapprovedData.filter(data => data["approval_id"] !== approvalId)
    })
    this.doseService.getUnapprovedData().subscribe(
      (resData) => {
      this.unapprovedData = resData["unapproved_data"]
    }, 
    (error) => {
      this.messageService.showMessage(error);
    })
  }

  approve(approvalId) {
    this.doseService.isApproved.next(approvalId);
    this.doseService.verifyDoseDetail(approvalId).subscribe(
      (resData: any) => {
        this.messageService.showMessage(resData.message);
      }
    )
  }
}

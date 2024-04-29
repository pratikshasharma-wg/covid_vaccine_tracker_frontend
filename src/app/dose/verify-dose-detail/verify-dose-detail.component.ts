import { Component } from '@angular/core';
import { DoseService } from '../dose.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from '../../shared/message/message.service';

@Component({
  selector: 'app-verify-dose-detail',
  templateUrl: './verify-dose-detail.component.html',
  styleUrl: './verify-dose-detail.component.css'
})
export class VerifyDoseDetailComponent {
  unapprovedData: any = null;

  constructor(
    private doseService: DoseService, 
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {

  }

  ngOnInit() {
    this.doseService.isApprovedOrDisaprroved.subscribe((approvalId) => {
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
    this.doseService.verifyDoseDetail(approvalId).subscribe(
      (resData: any) => {
        this.doseService.isApprovedOrDisaprroved.next(approvalId);
        this.messageService.showMessage(resData.message);
      }
    )
  }

  confirmBox(approvalId, confirmAction) {
    this.confirmationService.confirm({
      message: `Are you sure you want to ${confirmAction} the details?`,
      accept: () => {
        this[`${confirmAction}`](approvalId);
      },
      reject: () => { }
    });
  }

  disapprove(approvalId) {
    this.doseService.declineDoseDetail(approvalId).subscribe(
      (resData: any) => {
        this.doseService.isApprovedOrDisaprroved.next(approvalId);
        this.messageService.showMessage(resData.message);
      }
    )
  }
}

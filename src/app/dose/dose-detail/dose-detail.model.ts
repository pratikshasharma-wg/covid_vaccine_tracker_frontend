export class DoseDetailModel {
    vaccine_name: string;
    dose_date: string;
    dose_cid: string;

    constructor(vaccineName, doseDate, doseCid) {
        this.vaccine_name = vaccineName;
        this.dose_date = doseDate;
        this.dose_cid = doseCid;
    }
}
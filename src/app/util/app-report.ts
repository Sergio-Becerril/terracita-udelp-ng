import { Router } from "@angular/router";

export class AppReport {
    showModalMessage=false;
    modalTitleMessage="";
    messageBody="";

    constructor(private router: Router) {}

    closeMessageModal(uri: string) {
        this.showModalMessage=false;
        this.modalTitleMessage="";
        this.messageBody="";

        this.redirectTo(uri);
    }

    redirectTo(uri: string) {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=> {
        this.router.navigate([uri])});
    }
}

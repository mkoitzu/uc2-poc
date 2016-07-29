import {OnInit, Component} from '@angular/core';
import {AlertService} from './alert.service';

const KEY_ESC = 27;

@Component({
    selector: 'modal-alert',
    templateUrl: 'app/shared/confirm/alert.component.html',
    styleUrls: ['app/shared/confirm/modal.component.css']
})



export class AlertComponent implements OnInit {


    public title:string;
    public message:string;

    private _defaults = {
        title: 'Alert',
        message: 'Alert Message'
    };
    private _alertElement:any;

    ngOnInit():any {
        this._alertElement = document.getElementById('alertModal');
    }


    constructor(alertService:AlertService) {
        alertService.activate = this.activate.bind(this);
    }

    _setLabels(message = this._defaults.message, title = this._defaults.title) {
        this.title = title;
        this.message = message;
    }

    activate(message = this._defaults.message, title = this._defaults.title) {
        this._setLabels(message, title);
        this._show();
    }

    private _show() {
        document.onkeyup = null;
        if (!this._alertElement ) return;
        this._alertElement.style.opacity = 0;
        this._alertElement.style.zIndex = 9999;
        this._alertElement.onclick = () => {
            this._hideDialog();
        };
        document.onkeyup = (e:any) => {
            if (e.which === KEY_ESC) {
                this._hideDialog();
            }
        };
        this._alertElement.style.opacity = 1;
    }

    private _hideDialog() {
        document.onkeyup = null;
        this._alertElement.style.opacity = 0;
        window.setTimeout(() => this._alertElement.style.zIndex = -1, 400);
    }


}

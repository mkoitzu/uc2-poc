import {OnInit, Component} from '@angular/core';
import {ConfirmService} from './confirm.service';

const KEY_ESC = 27;

@Component({
    selector: 'modal-confirm',
    templateUrl: 'app/shared/confirm/confirm.component.html',
    styleUrls: ['app/shared/confirm/modal.component.css']
})

export class ConfirmComponent implements OnInit {

    public title:string;
    public message:string;
    public okText:string;
    public cancelText:string;

    private _confirmElement:any;
    private _cancelButton:any;
    private _okButton:any;

    private _defaults = {
        title: 'Titel',
        message: 'Frage',
        cancelText: 'Cancel',
        okText: 'OK'
    };

    ngOnInit():any {
        this._confirmElement = document.getElementById('confirmationModal');
        this._cancelButton = document.getElementById('cancelButton');
        this._okButton = document.getElementById('okButton');
    }

    constructor(confirmService:ConfirmService) {
        confirmService.activate = this.activate.bind(this);
    }


    _setLabels(message = this._defaults.message, title = this._defaults.title) {
        this.title = title;
        this.message = message;
        this.okText = this._defaults.okText;
        this.cancelText = this._defaults.cancelText;
    }

    _setLabelsWithButtons(message = this._defaults.message, title = this._defaults.title,
                          cancelText = this._defaults.cancelText, okText = this._defaults.okText) {
        this.title = title;
        this.message = message;
        this.okText = okText;
        this.cancelText = cancelText;
    }

    activate(m = this._defaults.message, t = this._defaults.title, no = this._defaults.cancelText, yes = this._defaults.okText) {
        this._setLabelsWithButtons(m, t, no, yes);
        let promise = new Promise<boolean>(resolve => {
            this._show(resolve);
        });
        return promise;
    }

    private _show(resolve:any) {
        document.onkeyup = null;

        let negativeOnClick = (e:any) => resolve(false);
        let positiveOnClick = (e:any) => resolve(true);

        if (!this._confirmElement || !this._cancelButton || !this._okButton) return;

        this._confirmElement.style.opacity = 0;
        this._confirmElement.style.zIndex = 9999;

        this._cancelButton.onclick = ((e:any) => {
            e.preventDefault();
            if (!negativeOnClick(e)) {this._hideDialog();}
        });

        this._okButton.onclick = ((e:any) => {
            e.preventDefault();
            if (!positiveOnClick(e)) {this._hideDialog();}
        });

        this._confirmElement.onclick = () => {
            this._hideDialog();
            return negativeOnClick(null);
        };

        document.onkeyup = (e:any) => {
            if (e.which === KEY_ESC) {
                this._hideDialog();
                return negativeOnClick(null);
            }
        };

        this._confirmElement.style.opacity = 1;
    }

    private _hideDialog() {
        document.onkeyup = null;
        this._confirmElement.style.opacity = 0;
        window.setTimeout(() => this._confirmElement.style.zIndex = -1, 400);
    }


}

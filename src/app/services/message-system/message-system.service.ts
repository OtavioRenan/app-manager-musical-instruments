import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})

export class MessageSystemService
{
    constructor(private toastr: ToastrService){}

    async error(e: any)
    {
        console.log(e);

        if (e.error.message)
        {
            this.toastr.error(e.error.message);
        } else if (e.message) {
            this.toastr.error(e.message);
        } else if (e.error) {
            this.toastr.error(e.error);
        } else if (e) {
            this.toastr.error(e);
        } else {
            this.toastr.error('Erro na ação.');
        }
    }

    async success(s: any)
    {
        this.toastr.success(s);
    }
}
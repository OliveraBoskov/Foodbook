import { Component, OnInit } from '@angular/core';
import { RecepieService } from '../../core/services/recepie.service';

@Component({
    selector: 'app-recepie',
    templateUrl: './recepie.component.html'
})
export class RecepieComponent implements OnInit{

    public recepies = [];
    // public recepies = [
    //     {
    //         id: 1,
    //         name: 'Nemanjini Sendvici',
    //         createdBy: 'Nemanja',
    //         description: 'okej'
    //     },
    //     {
    //         id: 2,
    //         name: 'Pasulj',
    //         createdBy: 'Nemanja',
    //         description: 'okej'
    //     },
    //     {
    //         id: 3,
    //         name: 'cevapi',
    //         createdBy: 'Nemanja',
    //         description: 'okej'
    //     }
    // ];

    constructor(private recepieService: RecepieService) {

    }

    ngOnInit(): void {

    }

    public getRecepie() {
        this.recepieService.getAll().toPromise().then(data => {
            this.recepies =  data.recepies;
        })
    }

    public onEdit(id) {
        console.log(id);
    }

    public onDelete(id) {
        this.recepieService.deleteOne(id).toPromise().then(data => {
            console.log(data);
        })
    }
}
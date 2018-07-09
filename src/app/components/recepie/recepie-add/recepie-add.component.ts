import { Component, OnInit } from "@angular/core";
import { RecepieService } from '../../../core/services/recepie.service';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, AbstractControl, Validators, FormBuilder } from "@angular/forms";

@Component({
    selector: 'app-recepie-add',
    templateUrl: './recepie-add.component.html'
})
export class RecepieAddComponent implements OnInit{

    public mode;
    public text = 'Create Recepie'

    public form: FormGroup;
    public name: AbstractControl;
    public description: AbstractControl;
    public createdBy: AbstractControl;

    constructor(
        private recepieService: RecepieService,
        private route: ActivatedRoute,
        private fb: FormBuilder
    ) {
        this.form = this.fb.group({
            'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'description': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            'createdBy': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
          });
      
          this.name = this.form.controls['name'];
          this.description = this.form.controls['description'];
          this.createdBy = this.form.controls['createdBy'];
    }

    ngOnInit() {
        const mode = this.route.snapshot.params.id;
        if(mode != 'add') {
            this.recepieService.getOne(mode).toPromise().then(data => {
                this.mode = mode;
                this.text = 'Edit Recepie';
                this.name.setValue(data.name);
                this.description.setValue(data.description);
                this.createdBy.setValue(data.createdBy);
            })
        } else {
            this.mode = mode;
            this.text = 'Edit Recpie';
        }
    }

    onCreate() {
        const object =  {
            name: this.name.value,
            description: this.description.value,
            createdBy: this.createdBy.value
        }
        if(this.mode != 'add')
            this.recepieService.editOne(this.mode, object).toPromise().then(data => console.log(data))
        else 
            this.recepieService.createOne(object).toPromise().then(data => console.log(data))
    }
}
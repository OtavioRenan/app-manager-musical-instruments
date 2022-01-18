import { Component, OnInit } from '@angular/core';
import { InstrumentTypeModel } from 'src/app/models/instrument-type.model';
import { InstrumentTypeService } from 'src/app/services/instrument-type/instrument-type.service';

@Component({
  selector: 'app-instrument-type',
  templateUrl: './instrument-type.component.html',
  styleUrls: ['./instrument-type.component.scss']
})

export class InstrumentTypeComponent implements OnInit
{
  public listIntrumentType: Array<InstrumentTypeModel> = [];
  public displayColumns: Array<String> = ['id', 'name', 'slug'];

  constructor(
    private service: InstrumentTypeService
  ) { }

  ngOnInit() : void
  {
    this.getAll();
  }

  async getAll()
  {
    await this.service.json().subscribe(
      (response) => {
        if(response)
        {
          this.listIntrumentType = response;
        } else {
          console.log(response);
        }
      },
      (e) => {
        console.log(e);
      }
    );
  }
}

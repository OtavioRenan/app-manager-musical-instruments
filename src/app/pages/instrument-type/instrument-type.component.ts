import { InstrumentType } from './../../models/instrument-type.model';
import { MessageSystemService } from './../../services/message-system/message-system.service';
import { Component, OnInit } from '@angular/core';
import { InstrumentTypeService } from 'src/app/services/instrument-type/instrument-type.service';

@Component({
  selector: 'instrument-type-page',
  templateUrl: './instrument-type.component.html',
  styleUrls: ['./instrument-type.component.scss']
})

export class InstrumentTypeComponent implements OnInit
{
  public listInstrumentType: Array<InstrumentType> = [];

  ngOnInit(): void
  {
    this.getListInstrumentType();
  }

  constructor(
    private instrumentTypeService: InstrumentTypeService,
    private messageSystemService: MessageSystemService,
  ){}

  async getListInstrumentType()
  {
    await this.instrumentTypeService.all().subscribe(
      (instrumentTypes) => {
        this.listInstrumentType = instrumentTypes;
      },
      (e) => {
        this.messageSystemService.error(e);
      }
    );
  }
}
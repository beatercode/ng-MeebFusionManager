import { Component, OnInit, Input } from '@angular/core';
import { Type } from 'src/app/model/type.model';
import { Role } from 'src/app/model/role.model';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-fusion-first-meeb',
  templateUrl: './fusion-first-meeb.component.html',
  styleUrls: ['./fusion-first-meeb.component.scss']
})
export class FusionFirstMeebComponent implements OnInit {
  @Input() title!: string;

  types: Array<Type> = [
    { id: 1, name: 'Fire' },
    { id: 2, name: 'Water' },
    { id: 3, name: 'Electric' },
    { id: 4, name: 'Grass' },
    { id: 4, name: 'Light' },
    { id: 4, name: 'Dark' },
    { id: 4, name: 'Neutral' },
  ];

  roles: Array<Role> = [
    { id: 1, name: 'Support' },
    { id: 2, name: 'Mage' },
    { id: 3, name: 'Tanker' },
    { id: 4, name: 'Hunter' },
    { id: 4, name: 'Conjurer' },
    { id: 4, name: 'Fighter' },
  ];

  public fuseFirstInput: any;

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {
    this.fuseFirstInput = this.controlContainer.control;
  }
}

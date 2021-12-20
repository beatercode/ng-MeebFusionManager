import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/model/type.model';
import { Role } from 'src/app/model/role.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fusion-zone',
  templateUrl: './fusion-zone.component.html',
  styleUrls: ['./fusion-zone.component.scss'],
})
export class FusionZoneComponent implements OnInit {
  public fusionContrainer!: FormGroup;
  public resultLevelLabel = 0;
  public resultBodyType = '';
  public resultMeebRole = '';

  types: Array<Type> = [
    { id: 1, name: 'Fire' },
    { id: 2, name: 'Whater' },
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

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.fusionContrainer = this.fb.group({
      firstBodyLevel: [''],
      secondBodyLevel: [''],
      firstMeebBodyType: [''],
      secondMeebBodyType: [''],
    });
  }

  fuseProcess() {

    let firstBodyLevel: number = this.fusionContrainer.get('firstBodyLevel')?.value
    let secondBodyLevel: number = this.fusionContrainer.get('secondBodyLevel')?.value
    let firstMeebBodyType: string = this.fusionContrainer.get('firstMeebBodyType')?.value
    let secondMeebBodyType: string = this.fusionContrainer.get('secondMeebBodyType')?.value;
    
    let max = 100;
    let min = 1;
    let random = Math.floor(Math.random() * (max - min + 1) + min)

    this.resultLevelLabel = (firstBodyLevel == 1 && secondBodyLevel == 1) 
                          ? ((random <= 35) ? 2 : 1)
                          : (firstBodyLevel == 2 && secondBodyLevel == 2) 
                          ? ((random <= 25) ? 3 : 2) 
                          : (firstBodyLevel == 3 && secondBodyLevel == 3) 
                          ? ((random <= 20) ? 4 : 3) 
                          : (firstBodyLevel == 1 && secondBodyLevel == 2) || (firstBodyLevel == 2 && secondBodyLevel == 1) 
                          ? ((random <= 10) ? 3 : 2)
                          : (firstBodyLevel == 1 && secondBodyLevel == 3) || (firstBodyLevel == 3 && secondBodyLevel == 1) 
                          ? ((random <= 5) ? 4 : 3)
                          : (firstBodyLevel == 2 && secondBodyLevel == 3) || (firstBodyLevel == 3 && secondBodyLevel == 2)
                          ? ((random <= 7) ? 4 : 3)
                          : 0;

    this.resultBodyType = ((firstBodyLevel == 1 && secondBodyLevel == 1) 
                          ? ( random <= 45 
                            ? firstMeebBodyType 
                            : random <= 90 ? secondMeebBodyType
                            : this.types[Math.floor(Math.random() * this.types.length)].name )
                          : (firstBodyLevel == 2 && secondBodyLevel == 2) 
                          ? ( random <= 45 
                            ? firstMeebBodyType 
                            : random <= 90 ? secondMeebBodyType
                            : this.types[Math.floor(Math.random() * this.types.length)].name )
                          : (firstBodyLevel == 3 && secondBodyLevel == 3) 
                          ? ( random <= 46 
                            ? firstMeebBodyType 
                            : random <= 92 ? secondMeebBodyType
                            : this.types[Math.floor(Math.random() * this.types.length)].name )
                          : (firstBodyLevel == 1 && secondBodyLevel == 2) 
                          ? ( random <= 40 
                            ? firstMeebBodyType 
                            : random <= 91 ? secondMeebBodyType
                            : this.types[Math.floor(Math.random() * this.types.length)].name )
                          : (firstBodyLevel == 2 && secondBodyLevel == 1) 
                          ? ( random <= 51 
                            ? firstMeebBodyType 
                            : random <= 91 ? secondMeebBodyType
                            : this.types[Math.floor(Math.random() * this.types.length)].name )
                          : (firstBodyLevel == 1 && secondBodyLevel == 3) 
                          ? ( random <= 35 
                            ? firstMeebBodyType 
                            : random <= 92 ? secondMeebBodyType
                            : this.types[Math.floor(Math.random() * this.types.length)].name )
                          : (firstBodyLevel == 3 && secondBodyLevel == 1) 
                          ? ( random <= 57 
                            ? firstMeebBodyType 
                            : random <= 92 ? secondMeebBodyType
                            : this.types[Math.floor(Math.random() * this.types.length)].name )
                          : (firstBodyLevel == 3 && secondBodyLevel == 2) 
                          ? ( random <= 54 
                            ? firstMeebBodyType 
                            : random <= 92 ? secondMeebBodyType
                            : this.types[Math.floor(Math.random() * this.types.length)].name )
                          : (firstBodyLevel == 2 && secondBodyLevel == 3) 
                          ? ( random <= 38 
                            ? firstMeebBodyType 
                            : random <= 92 ? secondMeebBodyType
                            : this.types[Math.floor(Math.random() * this.types.length)].name )
                          : ''
    );
    
    let newType = this.resultBodyType;
    let newLevel = this.resultLevelLabel;
    random = Math.floor(Math.random() * (2 - 1 + 1) + min);

    this.resultMeebRole = ((newLevel == 2)
                          ? ( 
                            newType == 'Fire'
                            ? random == 1 ? 'Fighter' : 'Tanker' :
                            newType == 'Water' 
                            ? random == 1 ? 'Assassin' : 'Assassin' :
                            newType == 'Dark' 
                            ? random == 1 ? 'Conjurer' : 'Mage' :
                            newType == 'Electric' 
                            ? random == 1 ? 'Hunter' : 'Supporter' :
                            newType == 'Grass' 
                            ? random == 1 ? 'Tanker' : 'Tanker' :
                            newType == 'Light' 
                            ? random == 1 ? 'Fighter' : 'Assassin' :
                            // is neutral
                            this.roles[Math.floor(Math.random() * this.roles.length)].name
                          )
                          : (newLevel == 3)
                          ? (
                            newType == 'Fire'
                            ? random == 1 ? 'Hunter' : 'Assassin' :
                            newType == 'Water' 
                            ? random == 1 ? 'Supporter' : 'Conjurer' :
                            newType == 'Dark' 
                            ? random == 1 ? 'Tanker' : 'Hunter' :
                            newType == 'Electric' 
                            ? random == 1 ? 'Conjurer' : 'Fighter' :
                            newType == 'Grass' 
                            ? random == 1 ? 'Conjurer' : 'Mage' :
                            newType == 'Light' 
                            ? random == 1 ? 'Supporter' : 'Fighter' :
                            // is neutral
                            this.roles[Math.floor(Math.random() * this.roles.length)].name
                          )
                          : (newLevel == 4)
                          ? (
                            newType == 'Fire'
                            ? random == 1 ? 'Hunter' : 'Conjurer' :
                            newType == 'Water' 
                            ? random == 1 ? 'Assassin' : 'Fighter' :
                            newType == 'Dark' 
                            ? random == 1 ? 'Assassin' : 'Fighter' :
                            newType == 'Electric' 
                            ? random == 1 ? 'Tanker' : 'Fighter' :
                            newType == 'Grass' 
                            ? random == 1 ? 'Hunter' : 'Mage' :
                            newType == 'Light' 
                            ? random == 1 ? 'Tanker' : 'Conjurer' :
                            // is neutral
                            this.roles[Math.floor(Math.random() * this.roles.length)].name
                          )
                          : ''
    );
                        
  }
}
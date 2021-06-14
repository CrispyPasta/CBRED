import { Component, Input, OnInit } from '@angular/core';

import { skill } from '../skill';
import { AWARENESS_SKILL_TABLE } from '../skillTables';
import { BODY_SKILL_TABLE } from '../skillTables';
import { CONTROL_SKILL_TABLE } from '../skillTables';
import { EDUCATION_SKILL_TABLE } from '../skillTables';
import { FIGHTING_SKILL_TABLE } from '../skillTables';
import { PERFORMANCE_SKILL_TABLE } from '../skillTables';
import { RANGED_SKILL_TABLE } from '../skillTables';
import { SOCIAL_SKILL_TABLE } from '../skillTables';
import { TECHNIQUE_SKILL_TABLE } from '../skillTables';

@Component({
  selector: 'app-skilltable',
  templateUrl: './skilltable.component.html',
  styleUrls: ['./skilltable.component.css']
})


export class SkilltableComponent implements OnInit {
  @Input() groupNumber: number;
  displayedColumns: string[] = ["Skill", "LVL", "STAT", "BASE"];
  dataSource;

  tableList: Array<skill[]> = [
    AWARENESS_SKILL_TABLE,
    BODY_SKILL_TABLE,
    CONTROL_SKILL_TABLE,
    EDUCATION_SKILL_TABLE,
    FIGHTING_SKILL_TABLE,
    RANGED_SKILL_TABLE,
    PERFORMANCE_SKILL_TABLE,
    SOCIAL_SKILL_TABLE,
    TECHNIQUE_SKILL_TABLE
  ];

  constructor() {
    // this.dataSource = AWARENESS_SKILL_TABLE;
    // this.groupNumber = 1;
  
    // this.dataSource = tableList[this.groupNumber];
  }
  
  ngOnInit(): void {
  }

}

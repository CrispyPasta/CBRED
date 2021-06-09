import { Component, OnInit } from '@angular/core';
import { skill } from "../skill";
import { AWARENESS_SKILL_TABLE } from "../skillTables";
import { BODY_SKILL_TABLE } from "../skillTables";
import { CONTROL_SKILL_TABLE } from "../skillTables";
import { EDUCATION_SKILL_TABLE } from "../skillTables";
import { FIGHTING_SKILL_TABLE } from "../skillTables";
import { PERFORMANCE_SKILL_TABLE } from "../skillTables";
import { RANGED_SKILL_TABLE } from "../skillTables";
import { SOCIAL_SKILL_TABLE } from "../skillTables";
import { TECHNIQUE_SKILL_TABLE } from "../skillTables";

@Component({
  selector: 'app-skilltable',
  templateUrl: './skilltable.component.html',
  styleUrls: ['./skilltable.component.css']
})


export class SkilltableComponent implements OnInit{
  
  displayedColumns: string[] = ['Skill', 'LVL', 'STAT', 'BASE'];
  dataSource = SOCIAL_SKILL_TABLE;
  awarenessDataSource = AWARENESS_SKILL_TABLE;
  
  constructor() { }
  
  ngOnInit(): void {
  }
}

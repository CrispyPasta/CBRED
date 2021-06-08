import { Component, OnInit } from '@angular/core';
import { skill } from "../skill";

export interface socialSkills {
  bribery: skill;
  conversation: skill;
  humanPerception: skill;
  interrogation: skill;
  persuasion: skill;
  personalGrooming: skill;
  streetwise: skill;
  trading: skill;
  wardrobe: skill;
}

const SKILL_TABLE: skill[] = [
  {name: 'Bribery', base: 0, stat: 0, lvl: 0},
  {name: 'Conversation', base: 0, stat: 0, lvl: 0},
  {name: 'Human Perception', base: 0, stat: 0, lvl: 0},
  {name: 'Interrogation', base: 0, stat: 0, lvl: 0},
  {name: 'Persuasion', base: 0, stat: 0, lvl: 0},
  {name: 'Personal Grooming', base: 0, stat: 0, lvl: 0},
  {name: 'Streetwise', base: 0, stat: 0, lvl: 0},
  {name: 'Trading', base: 0, stat: 0, lvl: 0},
  {name: 'Wardrobe & Style', base: 0, stat: 0, lvl: 0}
];

@Component({
  selector: 'app-skilltable',
  templateUrl: './skilltable.component.html',
  styleUrls: ['./skilltable.component.css']
})

export class SkilltableComponent implements OnInit{
  displayedColumns: string[] = ['Skill', 'LVL', 'STAT', 'BASE'];
  dataSource = SKILL_TABLE;

  constructor() { }

  ngOnInit(): void {
  }
}

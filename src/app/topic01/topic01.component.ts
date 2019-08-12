import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-topic01',
  templateUrl: './topic01.component.html',
  styleUrls: ['./topic01.component.css']
})
export class Topic01Component implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {
    console.log();
  }
}

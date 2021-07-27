import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  recruiterApplicant(){
    var user = localStorage.removeItem('currentUser')
    this.router.navigate([''])
  }

}

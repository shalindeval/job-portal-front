import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  applicantLogOut(){
    var user = localStorage.removeItem('currentUser')
    this.router.navigate([''])
  }

}

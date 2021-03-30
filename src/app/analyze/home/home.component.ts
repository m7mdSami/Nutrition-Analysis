import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Service, APIs } from '../../services/shard';
import { eventDispatcher, store } from 'src/app/state/app-state';
import { ActionTypes } from 'src/app/state/action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data:string = `
      1 cup orange juice
      3 tablespoons olive oil
      2 carrots
  `;

  constructor(
    private service: Service,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  analyze(form: NgForm) {
    let { analyze } = form.value;
    let convertToArray = analyze.trim().split('\n');
    console.log(analyze);
    console.log(convertToArray);

    let data = {
      ingr: convertToArray
    }
    this.service.post(APIs.init().nutritionDetails, data).subscribe(res => {
      eventDispatcher.next({ type: ActionTypes.RESULT, payload: res});
      this.router.navigate(['/result']);
    })
  }

}

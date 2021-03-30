import { Component, OnInit } from '@angular/core';
import { eventDispatcher, store } from 'src/app/state/app-state';
import { ActionTypes } from 'src/app/state/action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  result;
  total:boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.watchStore()
  }

  watchStore() {
    store.subscribe(res => {
      console.log(res?.result);
      let data:any = res;
      if(data && data.result && Object.keys(data.result.totalNutrients).length) {
        this.result = res?.result;
        return;
      }
    });
  }

  goHome() {
    this.router.navigate(['/']);
  }

  showTotal() {
    this.total = !this.total
  }

}

import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'timer';

  ngOnInit() {
    this.initInterval();
}

  initInterval() {
    const countador = interval(10000);
    countador.subscribe((seg: number) => {
      seg *= 5;
      console.log(seg);
      this.presentAlert(seg);
    });
  }

  presentAlert(seg: number) {
    Swal.fire({
      title: `Han pasado ${seg} segundos`,
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })
  }
}

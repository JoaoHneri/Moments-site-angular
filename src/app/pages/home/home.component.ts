import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/interfaces/Moments';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl = environment.baseApiUrl;
  faSearch = faSearch;

  search(e: Event): void {
      const target = e.target as HTMLInputElement;
      const value = target.value;

      this.moments = this.allMoments.filter((moment) => moment.title.toLowerCase().includes(value))
  }

  constructor(private momentservice: MomentService) { }

  ngOnInit(): void {
    this.momentservice.getMoments().subscribe((item)=> {
      const data = item.data;
      data.map((item)=>{
        item.created_at = new Date(item.created_at!).toLocaleDateString("pt-BR")
      })

      this.allMoments = data;
      this.moments = data;
    })
  }

}

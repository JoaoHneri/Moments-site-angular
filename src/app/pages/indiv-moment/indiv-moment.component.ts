import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/interfaces/Moments';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-indiv-moment',
  templateUrl: './indiv-moment.component.html',
  styleUrls: ['./indiv-moment.component.css']
})
export class IndivMomentComponent implements OnInit {
  moment?: Moment;
  faEdit = faEdit;
  faTimes = faTimes;
  baseApiUrl = environment.baseApiUrl;
  constructor(private momentService: MomentService, private route: ActivatedRoute, private messageService: MessagesService, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.momentService.getMoment(id).subscribe((m)=> (this.moment = m.data)
    )
  }

  async removeMoment(id: Number){
    await this.momentService.removeMoment(id).subscribe();
    this.messageService.add("Momento Removido com Sucesso!");
    this.router.navigate(['/']);
  }

}

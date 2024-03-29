import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/interfaces/Moments';
import { MomentService } from 'src/app/services/moment.service';
import { Route, ActivatedRoute } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.css']
})
export class EditMomentComponent implements OnInit {
  moment!: Moment;
  btnText: string = "Editar"
  constructor(private momentService: MomentService, private route: ActivatedRoute, private messageService: MessagesService, private router: Router ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.momentService.getMoment(id).subscribe((m)=> (this.moment = m.data))
  }

  async editHandler(momentData: Moment) {
    const id = Number(this.moment.id);
    const formData = new FormData()
    formData.append('title', momentData.title);
    formData.append('description', momentData.description);
    if(momentData.image){
      formData.append('image', momentData.image);
    }

    await this.momentService.editMoment(id, formData).subscribe();
    this.messageService.add("Momento Editado com Sucesso!");
    this.router.navigate(['/']);
  }

}

import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/interfaces/Moments';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { CommetService } from 'src/app/services/commet.service';
import { Comment } from 'src/app/interfaces/Comment';
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

  commentForm!: FormGroup;
  constructor(private momentService: MomentService, private route: ActivatedRoute, private messageService: MessagesService, private router: Router, private commentService: CommetService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.momentService.getMoment(id).subscribe((m)=> (this.moment = m.data)
    );

    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required)
    })
  }

  get text(){
    return this.commentForm.get('text')!;
  }

  get username(){
    return this.commentForm.get('username')!;
  }

  async removeMoment(id: Number){
    await this.momentService.removeMoment(id).subscribe();
    this.messageService.add("Momento Removido com Sucesso!");
    this.router.navigate(['/']);
  }


  async onSubmit(formDirective: FormGroupDirective){
      if(this.commentForm.invalid){
        return
      }else{
        const data: Comment = this.commentForm.value;
        data.momentId = Number(this.moment!.id);

        await this.commentService.createComment(data).subscribe((comment) => this.moment!.comments!.push(data));

        this.messageService.add("Comentário adicionado!");

        this.commentForm.reset();
        formDirective.resetForm();
      }
  }

}

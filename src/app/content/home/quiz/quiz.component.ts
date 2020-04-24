import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {Form, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quiz = [
    {
      question: 'Kto stworzył Javę?',
      options: [
        'Oracle',
        'Microsoft',
        'Sun Microsystems',
        'Apple'
      ],
      good: 3
    },
    {
      question: 'Czym jest Spring?',
      options: [
        'Frameworkiem',
        'Platformą',
        'SASS',
        'LESS'
      ],
      good: 1
    },
    {
      question: 'Jakim językiem jest Java?',
      options: [
        'Proceduralne',
        'Funkcyjnym',
        'Obiektowym',
        'Deklaratywne'
      ],
      good: 3
    }];

  lastScore = -1;

  modalRef: BsModalRef;
  checkoutForm: any;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  submitQuiz(form: FormGroup) {
    let score = 0;
    for (let i = 1; i <= this.quiz.length; i++){
      if (form.controls['question' + i].value === this.quiz[i - 1].good.toString()) {
        score++;
      }
    }
    this.lastScore = score;
  }
}

interface Quiz {
  question: string;
  options: Array<string>;
  good: number;
}

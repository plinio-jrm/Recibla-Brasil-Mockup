import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name: FormControl = new FormControl('');
  mail: FormControl = new FormControl('');
  phone: FormControl = new FormControl('');
  message: FormControl = new FormControl('');

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.name.setValue('');
      this.mail.setValue('');
      this.phone.setValue('');
      this.message.setValue('');
    });
  }
}

import { Component } from '@angular/core';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {



  book = {
    title: 'Voroshylovhrad',
    year: 2010,
    author: 'Serhiy Zhadan',
    pages: 211,
    description: 'social novel about life in Donbas'
  }

}

import { Component, OnChanges } from '@angular/core';

interface Book {
  title: string;
  year: number;
  author: string;
  pages: number;
  description: string;
}


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
  books: Book[];

  constructor() {
    this.books = [{
      title: 'JavaScript: The Good Parts',
      year: 2008,
      author: 'Douglas Crockford',
      pages: 172,
      description: 'This authoritative book scrapes away these bad features to reveal a subset of JavaScript that\'s more reliable, readable, and maintainable'
    }, {
      title: 'Mastering TypeScript',
      year: 2015,
      author: 'Nathan Rozentals',
      pages: 364,
      description: 'Build enterprise-ready, industrial strength web applications using TypeScript and leading JavaScript frameworks'
    }];
  }

  isJavaScript(book: Book): boolean {
    return book.title.indexOf('JavaScript') >= 0;
  }

}

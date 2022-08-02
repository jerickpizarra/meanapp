import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  techUsed: any = [
    {
      title: 'Angular 14',
      subtitle: 'The modern web developer`s platform',
      description: "Platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications",
      imgUrl : 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'
    },
    {
      title: 'Angular Material',
      subtitle: 'Material Design components for Angular',
      description: 'Reusable UI components help in constructing attractive, consistent, and functional web pages and web applications while adhering to modern web design principles like browser portability, device independence, and graceful degradation. In-built responsive designing. Standard CSS with minimal footprint',
      imgUrl : 'https://angular.io/generated/images/marketing/concept-icons/material.png'
    },
    {
      title: 'NodeJs',
      subtitle: 'JavaScript runtime built on Chrome`s V8 JavaScript engine',
      description: 'Open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications',
      imgUrl : 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png'
    },
    {
      title: 'MongoDB',
      subtitle: 'Database',
      description: 'Source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL) which is deemed non-free by several distribution',
      imgUrl : 'https://www.instana.com/media/01_INSTANA_IconSet_MongoDB.svg'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

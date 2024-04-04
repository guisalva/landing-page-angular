import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NgOptimizedImage } from '@angular/common';
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';
import { BenefitComponent } from '../benefit/benefit.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    BtnPrimaryComponent,
    NewsletterFormComponent,
    BenefitComponent,
    NgOptimizedImage
  ],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
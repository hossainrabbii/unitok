import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-about',
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  // valores
  valores = [
    {
      title: 'Transparencia',
      description:
        'Proporcionamos información clara y accesible sobre cada proyecto.',
      svg: '../assets/svg/search-menu (1).svg',
    },
    {
      title: 'Seguridad',
      description:
        'Implementamos tecnología blockchain para garantizar transacciones confiables.',
      svg: '../assets/svg/shield-check.svg',
    },
    {
      title: 'Accesibilidad',
      description:
        'La naturaleza inmutable de la tecnología Blockchain garantiza un registro transparente y seguro de la propiedad y las transacciones de los activos.',
      svg: '../assets/svg/finger-print-1.svg',
    },
    {
      title: 'Innovación',
      description:
        'Democratizamos las inversiones para que cualquier persona pueda participar.',
      svg: '../assets/svg/lightbulb-glow.svg',
    },
  ];

  testimonials = [
    {
      img: '../assets/img/Professional Business Portrait 1.png',
      name: 'Luca Hansen',
      desc: 'With Unitok, managing our daily operations and client invoicing is much easier. We can now handle payments, send reminders and access our invoicing history all in one place.',
      designation: 'Account Manager',
      year: '32',
    },
    {
      img: '../assets/img/testi2.jpg',
      name: 'Tuca Maccansen',
      desc: 'About Unitok, managing our daily operations and client invoicing is much easier. We can now handle payments, send reminders and access our invoicing history all in one place.',
      designation: 'Account Manager',
      year: '40',
    },
  ];

  testimonialSlideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrow: true,
    speed: 300,
    prevArrow: `<button class="testi-prev"><img src="../assets/svg/arrow-l-w.svg" /></button>`,
    nextArrow: `<button class="testi-next"><img src="../assets/svg/arrow-r-w.svg" /></button>`,
  };
}

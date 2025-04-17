import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import lottie from 'lottie-web';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, SlickCarouselModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'Unitok';
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  activeButton: string = 'btn1';

  toggleContent(button: string) {
    this.activeButton = button;
  }

  slides = [
    {
      img: '../assets/img/Frame 34.png',
      title: 'Matilda Mexican Peruvian Cuise',
      price: '1000',
      tokens: '745/1000',
    },
    {
      img: '../assets/img/Frame 34 (1).png',
      title: 'ProfitFriendsClub',
      price: '500',
      tokens: '915/3200',
    },
    {
      img: '../assets/img/Frame 34 (2).png',
      title: 'Monte Alto',
      price: '1000',
      tokens: '545/9900',
    },
    {
      img: '../assets/img/Frame 34.png',
      title: 'Alue Monte Alto',
      price: '1000',
      tokens: '545/9900',
    },
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2500,
    arrow: true,
    speed: 300,
    prevArrow: `<button class="custom-prev"><img src="../assets/svg/arrow-l.svg" /></button>`,
    nextArrow: `<button class="custom-next"><img src="../assets/svg/arrow-r.svg" /></button>`,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          autoplay: true,
        },
      },
    ],
  };
  slides2 = [
    {
      img: '../assets/img/proyec.png',
      title: 'Olas Residences',
      desc: 'Conjunto residencial apartaHotel en Downtown Punta Cana.',
      price: '1000',
      tokens: '745/1000',
      precio: '450',
      roi: '6.7',
      supply: '1000',
      distrib: '300000',
      sold: true,
      state: 'Reate State',
    },
    {
      img: '../assets/img/proyec.png',
      title: 'ByOlas Residences',
      desc: 'Two Conjunto residencial apartaHotel en Downtown Punta Cana.',
      price: '2000',
      tokens: '745/1000',
      precio: '950',
      roi: '12.7',
      supply: '3100',
      distrib: '450000',
      sold: false,
      state: 'Reate State',
    },
  ];

  slideConfig2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrow: true,
    speed: 300,
    prevArrow: `<button class="token_custom-prev"><img src="../assets/svg/arrow-l.svg" /></button>`,
    nextArrow: `<button class="token_custom-next"><img src="../assets/svg/arrow-r.svg" /></button>`,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          autoplay: true,
        },
      },
    ],
  };

  ngAfterViewInit(): void {
    lottie.loadAnimation({
      container: document.getElementById('lottie-container')!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/animations/907 1 2.json',
    });
  }
  // modal
  showModal = false;
  videoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  openModal(link: string) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(link);
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}

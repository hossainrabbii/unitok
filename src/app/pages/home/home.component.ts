import lottie from 'lottie-web';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlickCarouselModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // lottie
  ngAfterViewInit(): void {
    lottie.loadAnimation({
      container: document.getElementById('lottie-container')!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/animations/907 1 2.json',
    });
  }

  activeButton: string = 'btn1';

  toggleContent(button: string) {
    this.activeButton = button;
  }

  disponsSlide = [
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

  disponsSlideConfig = {
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
  tokenizadosSlide = [
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

  tokenizadosSlideConfig = {
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

  // beneficios
  beneficios = [
    {
      title: 'Mayor Liquidez',
      description:
        'La tokenización de activos podría aumentar significativamente la liquidez de los activos, ya que permite el comercio fraccionado.',
      svg: '../assets/svg/money-hand.svg',
    },
    {
      title: 'Eficiencia Mejorada',
      description:
        'La tokenización agiliza el proceso comercial al eliminar intermediarios y automatizar muchos aspectos del proceso de transacción a través de contratos inteligentes.',
      svg: '../assets/svg/zap.svg',
    },
    {
      title: 'Transparencia',
      description:
        'La naturaleza inmutable de la tecnología Blockchain garantiza un registro transparente y seguro de la propiedad y las transacciones de los activos.',
      svg: '../assets/svg/search-menu.svg',
    },
    {
      title: 'Mayor Accesibilidad',
      description:
        'La tokenización de activos abre el mundo del comercio a un público más amplio, ya que permite a las personas e instituciones negociar la propiedad fraccionada en una variedad de activos.',
      svg: '../assets/svg/ar-cube-3.svg',
    },
  ];

  // steps
  steps = [
    {
      step: 'Step 1',
      svg: 'assets/svg/_x31_3_3_.svg',
      title: 'Crea una cuenta y conecta tu wallet.',
      videoUrl: 'https://www.youtube.com/embed/rDYdeq3JW_E?si=6J0PO_nQAeMtprM8',
      borderColor: '#325FEC',
    },
    {
      step: 'Step 2',
      svg: 'assets/svg/product-feedback 1.svg',
      title: 'Verifica tu identidad.',
      videoUrl: 'https://www.youtube.com/embed/B1W_AcO7wmQ?si=g-p9evsW_7wg-ZKY',
      borderColor: '#7FFEF0',
    },
    {
      step: 'Step 3',
      svg: 'assets/svg/currency-exchange 1.svg',
      title: 'Explora los proyectos y compra tokens.',
      videoUrl: 'https://www.youtube.com/embed/rDYdeq3JW_E?si=6J0PO_nQAeMtprM8',
      borderColor: '#D7FC51',
    },
  ];
  // steps
  noticias = [
    {
      date: 'Feb 28',
      img: 'assets/img/placeholder.png',
      title: 'Sed do eiusmod tempor incididunt ut',
    },
    {
      date: 'Feb 14',
      img: 'assets/svg/placeholder.svg',
      title: 'Ut enim ad minim veniam, quis nostrud',
    },
    {
      date: 'Feb 2',
      img: 'assets/svg/placeholder.svg',
      title: 'Sed do eiusmod tempor incididunt ut',
    },
  ];

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

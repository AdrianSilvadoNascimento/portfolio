import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss']
})
export class ProjectDescriptionComponent implements OnInit {
  projects = [
    {
      id: 1, title: 'E-shop',
      resume: 'Um projeto de loja virtual',
      image: 'https://github.com/AdrianSilvadoNascimento/EShop/blob/master/images/imagesParaReadme/pagina-inicial-lg.png?raw=true'
    },
    {
      id: 2, title: 'Calculadora de Gorjetas',
      // resume: 'Estudo de caso onde criei uma calculadora de gorjetas',
      resume: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was popularised in the
      1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
      recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      image: 'https://github.com/AdrianSilvadoNascimento/EShop/blob/master/images/imagesParaReadme/pagina-inicial-lg.png?raw=true'
    },
    {
      id: 3, title: 'E-shop',
      resume: 'Um projeto de loja virtual',
      image: 'https://github.com/AdrianSilvadoNascimento/EShop/blob/master/images/imagesParaReadme/pagina-inicial-lg.png?raw=true'
    },
    {
      id: 4, title: 'Calculadora de Gorjetas',
      // resume: 'Estudo de caso onde criei uma calculadora de gorjetas',
      resume: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was popularised in the
      1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
      recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      image: 'https://github.com/AdrianSilvadoNascimento/EShop/blob/master/images/imagesParaReadme/pagina-inicial-lg.png?raw=true'
    },
    {
      id: 5, title: 'E-shop',
      resume: 'Um projeto de loja virtual',
      image: 'https://github.com/AdrianSilvadoNascimento/EShop/blob/master/images/imagesParaReadme/pagina-inicial-lg.png?raw=true'
    },
    {
      id: 6, title: 'Calculadora de Gorjetas',
      // resume: 'Estudo de caso onde criei uma calculadora de gorjetas',
      resume: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was popularised in the
      1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
      recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      image: 'https://github.com/AdrianSilvadoNascimento/EShop/blob/master/images/imagesParaReadme/pagina-inicial-lg.png?raw=true'
    },
  ]
  id: number | undefined
  project: { id: number, title: string, resume: string, image: string }[] | undefined

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(param => {
      this.id = param?.id
    })
  }

  ngOnInit(): void {
    this.project = this.projects.filter(project => project.id == this.id)
  }

}

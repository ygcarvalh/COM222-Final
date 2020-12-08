import { Component, OnInit } from '@angular/core';
import { Review } from '../review';

import {Router} from '@angular/router';
import {AppComponent} from '../app.component'

@Component({
	selector: 'app-criar-review',
	templateUrl: './criar-review.component.html',
	styleUrls: ['./criar-review.component.css']
})
export class CriarReviewComponent implements OnInit {

	REVIEWS: Review[] = [];
	review: Review;
	reviewModel = new Review("", 0);

	usuarioNaoLogado = this.statusUser.getStatusUserLogado();

	constructor( private router: Router,
        private statusUser :AppComponent) { }

	ngOnInit(): void {
	}

	onSubmit() {
		var textoReview = this.reviewModel.review;
		var notaReview = this.reviewModel.nota;

		this.review = new Review(textoReview, notaReview);

		console.log(this.review);
		this.REVIEWS.push(this.review);
		console.log(this.REVIEWS);
	}

}

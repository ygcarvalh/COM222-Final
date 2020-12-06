import { Component, OnInit } from '@angular/core';
import { Review } from '../review';

@Component({
	selector: 'app-criar-review',
	templateUrl: './criar-review.component.html',
	styleUrls: ['./criar-review.component.css']
})
export class CriarReviewComponent implements OnInit {


	REVIEWS: Review[] = [];
	review: Review;
	reviewModel = new Review("", 0);

	constructor() { }

	ngOnInit(): void {
	}

	onSubmit() {
		var resumo = this.reviewModel.review;
		var nota = this.reviewModel.nota;

		this.review = new Review(resumo, nota);

		console.log(this.review);

		this.REVIEWS.push(this.review);

		console.log(this.REVIEWS);
	}

}

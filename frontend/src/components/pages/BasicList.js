import React, { Component } from 'react';
import { Link } from 'react-router-3';

import Strapi from 'strapi-sdk-javascript/build/main';

const strapi = new Strapi('http://176.14.246.18:1337');
const BLOG_URL = 'http://176.14.246.18:1337';

class BasicList extends Component {
   
  constructor(props) {
		super(props);
		this.state = {
		 posts: []
	   }
	 }
	
	async componentDidMount() {
	 try {
	   const posts = await strapi.getEntries('categories?id=9')
	   this.setState({ posts });
	 } 
	 catch(err) {
	  alert(err);
	 }
	}
	
	render() { 

		const productItem = this.state.posts.map((item, index) => {
		return	<div className="container" key={index}>	
				
		{ item.products.map(product => 
			<>

			<div className="card">
				<img className="news-preview-img" src={BLOG_URL + product.img.url} alt="" />	
				<div className="card-body">
				<h5 className="card-title">{product.title}</h5>
				<p className="card-text">{product.author}</p>
				<div className="b-priceBlock">
					<h6 className="b-catalogPrice">{product.price} р.</h6>
					<Link className="btn btn-primary" to={`/categories/${product.id}`}>Подробнее</Link>
				</div>
				</div>
			</div>	
			
			</>
		)}				
	
</div>
		})

	  return (
		  <>
		  {productItem}
		  </>
	  )
	}
}

export default BasicList
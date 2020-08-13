import React, { Component } from 'react';
import { Link } from 'react-router-3';

import Strapi from 'strapi-sdk-javascript/build/main';

const strapi = new Strapi('http://localhost:1337');
const BLOG_URL = 'http://localhost:1337';

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
		return	<section className="b-productsList" key={index}>
					
						{ item.products.map(product => 
							<>
							<Link className="news-preview" to={`/categories/${product.id}`}>
								<span className="b-productItem"> 
									<img className="news-preview-img" src={BLOG_URL + product.img.url} alt="" />
									<p>{product.author}</p>
									<h4>{product.title}</h4>
									<p>Цена: {product.price} руб</p>								
								</span>
							</Link>
							
							</>
						)}				
					
			</section>
		})

	  return (
		  <>
		  {productItem}
		  </>
	  )
	}
}

export default BasicList
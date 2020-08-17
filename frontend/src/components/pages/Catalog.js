import React, { Component } from 'react';
import { Link } from 'react-router-3';
import Strapi from 'strapi-sdk-javascript/build/main';

const strapi = new Strapi('http://176.14.246.18:1337');
const BLOG_URL = 'http://176.14.246.18:1337';

class Catalog extends Component {

	  constructor(props) {
		super(props);
		this.state = {
		 posts: []
	   }
	 }
	
	async componentDidMount() {
	 try {
	   const posts = await strapi.getEntries('products')
	   this.setState({ posts });
	 } 
	 catch(err) {
	  alert(err);
	 }
	}
	
	render() {
	  return (
		<div className="container">
		{this.state.posts.map((item, i) => (

		<div className="card" key={i} >
			<img src={BLOG_URL + item.img.url} className="card-img-top" alt="" />
			<div className="card-body">
			  <h5 className="card-title">{item.title}</h5>
			  <p className="card-text">{item.author}</p>
			  <div className="b-priceBlock">
			  	<h6 className="b-catalogPrice">{item.price} р.</h6>
				  <Link className="btn btn-primary" to={`/categories/${item.id}`}>Подробнее</Link>
			  </div>
			</div>
		</div>		

		  ) 
		)}
		</div>
	  )
	 }
	}

	
export default Catalog

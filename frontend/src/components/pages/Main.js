import React, { Component } from 'react';
import { Link } from 'react-router-3';
import Strapi from 'strapi-sdk-javascript/build/main';

const strapi = new Strapi('http://localhost:1337');
const BLOG_URL = 'http://localhost:1337';

class Main extends Component {

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
		<section className="b-productsContainer">
		{this.state.posts.map((item, i) => (
			<Link className="posts-preview" to={`/categories/${item.id}`}>
				<span className="b-productItem" key={i}> 
				<img className="news-preview-img" src={BLOG_URL + item.img.url} alt="" />
				<p>{item.author}</p>
				<h4>{item.title}</h4> 				
			</span>
			</Link>
			
		  ) 
		)}
		</section>
	  )
	 }
	}

	
export default Main

import React, { Component } from 'react';
//import { Link } from 'react-router';
//import SidebarNews from './SidebarNews';
//import * as moment  from 'moment';

const BLOG_URL = 'http://176.14.246.18:1337';

class ProductItem extends Component {
  constructor(props) {
    super(props)

      this.state = { loading: true, product: {} }

  }

  async componentDidMount() {
    let response = await fetch(`http://176.14.246.18:1337/products?id=${this.props.params.id}`)
    let data = await response.json()
    this.setState({
      loading: false,
      product: data
    })
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="container b-productItem__flexBox">
          <img className="news-preview-img" src={BLOG_URL + this.state.product[0].img.url} alt="" />
          <div className="product__information">
						<span className="Product-author">{this.state.product[0].author}</span>
						<h4 className="Product-title">{this.state.product[0].title}</h4>
            <p className="Product-price">Цена: {this.state.product[0].price} руб</p>
          </div>

          <aside className="Product-desc">
            <h4>Описание:</h4>
            <p>{this.state.product[0].desc}</p>
          </aside>
        </div>
      );
    }

    return ( 
      <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
      </div>
      );
  }
}

export default ProductItem


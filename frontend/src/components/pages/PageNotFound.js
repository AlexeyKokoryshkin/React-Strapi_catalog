import React, { Component } from 'react';
import { Link } from 'react-router-3';

class PageNotFound extends Component {
    render () {
        return (
            <>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/" className="b-navbar__home">{ this.props.brand || 'Главная' }</Link></li>
                        <li className="breadcrumb-item active" aria-current="page"></li>
                    </ol>
                </nav>
            </div>
                <h1>Страница не найдена!</h1>
                <p>Error 404 =(</p>               
            </>
        )
    }
}

export default PageNotFound
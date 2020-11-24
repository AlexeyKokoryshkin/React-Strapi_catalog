import React, { Component } from 'react';

class Menu extends Component {

    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="collapse navbar-collapse">
                        <ul className="nav nav-tabs">
                            { this.props.children }
                        </ul>
                    </div>
                </div>
            </nav>  
        )
    }
}

export default Menu


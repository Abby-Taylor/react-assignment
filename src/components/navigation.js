import React from 'react';


export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar bg-light">
                <div className="container-fluid">
                    <div className="navbar header">
                        <a className="navbar-brand" href="default">React Practice</a>
                    </div>
                    <ul className="nav navbar nav">
                        <li className="active"><a href="Home">Home</a></li> <br />
                        <li className="nav-link"><a href="Page1"></a>Page 1</li>
                        <li className="nav-link"><a href="Page2"></a>Page 2</li>
                    </ul>
                </div>
            </nav>
        );
    }
}
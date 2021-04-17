import React from 'react';



export default class LoginForm extends React.Component {
    render() {
        return (
            <form className ="container">
                <div className="form-row">
                    <h3 className="text col-med-6">Log In</h3>
                </div>
                <div className="form-row">
                    <div className="col-sm-6">
                        <input type="text" className="form-control" placeholder="Username"></input>
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" placeholder="Password"></input>
                    </div>
                </div>
            </form>
        );
    }
}
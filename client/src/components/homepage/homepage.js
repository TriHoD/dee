import React, { Component } from 'react';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            isSignUp: false,
        };
    }

    async componentDidMount() {
        const { tokenLogin } = this.props;
        const token = localStorage.getItem('token');
    }

}

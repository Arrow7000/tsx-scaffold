import React, { Component } from 'react';

interface AppProps {
    name: string;
}

interface AppState { }

class App extends Component<AppProps, AppState> {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const { name } = this.props;
        return (<h1>Hello {name}!</h1>);
    }
}

export default App; 
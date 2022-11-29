import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from "./navigation";
import Banner from "./banner";
import './static/style';

class Home extends React.PureComponent {

    render() {
        return (
            [
                <Navigation key="header"/>,
                <Banner key="banner"/>
            ]
        );
    }
}

export default Home;

import React, { Component } from 'react';
import './HelloWorldList.css';
import HelloWorld from './HelloWorld';


class HelloWorldList extends Component{
    render() {
        return (
            <div className="helloWorldList">
                <HelloWorld name="Damany"/>
                <HelloWorld name="Sophia"/>
            </div>
        );
    }
}

export default HelloWorldList;
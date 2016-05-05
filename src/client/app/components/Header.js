import React from "react";
import Title from "./Header/Title";

export default class Layout extends React.Component{ 
    render(){
        this.props.changeTitle("Welcome Alex!");
        return(
            <Title title={this.props.title}/>
        );
    }
}
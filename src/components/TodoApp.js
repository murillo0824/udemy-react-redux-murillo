import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../actions"

class Tod extends Component {
    render(){
       const props = this.props;
       return(
           <React.Fragment>
               {
                   props.todo.map
               }
           </React.Fragment>
       )
    }
}
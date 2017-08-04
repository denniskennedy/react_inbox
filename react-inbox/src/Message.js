import React, { Component } from 'react';

class Message extends  Component{

    constructor(props) {
        super(props)
        let isSelected = this.props.my_message.selected
        let isRead = this.props.my_message.read
        let isLabeled = this.props.my_message.labels
        let isStarred = this.props.my_message.starred


        this.state = {
            selected: isSelected,
            read: isRead,
            label: isLabeled,
            starred: isStarred,
        }



    }
    getStarred(){
        if(this.props.my_message.starred){
            return "star fa fa-star"

        }else {
            return "star fa fa-star-o"
        }
    }

    getRead(){
        if(this.props.my_message.read){
            return "read"

        }else {
            return "unread"
        }
    }

    getSelected() {
        if(this.props.my_message.selected){
            return "selected"
        }else{
            return ""
        }
    }
    render(){
            if(this.state.selected){
                return(
                    <div className={"row message "+ this.getRead() + " " + this.getSelected()}>
                        <div className="col-xs-1">
                            <div className="row">
                                <div className="col-xs-2">
                                    <input type="checkbox" checked="checked" />
                                </div>
                                <div className="col-xs-2">

                                    <i className= {this.getStarred()}></i>

                                </div>
                            </div>
                        </div>
                        <div className="col-xs-11">
                            <span className="label label-warning">{this.props.my_message.labels[0]}</span>
                            <span className="label label-warning">{this.props.my_message.labels[1]}</span>
                            <a href="#">
                                {this.props.my_message.subject}
                            </a>
                        </div>
                    </div>
                )
            }
            else {
                return(
                    <div className={"row message "+ this.getRead() + " " + this.getSelected()}>
                        <div className="col-xs-1">
                            <div className="row">
                                <div className="col-xs-2">
                                    <input type="checkbox"/>
                                </div>
                                <div className="col-xs-2">
                                    <i className= {this.getStarred()}></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-11">
                            <span className="label label-warning">{this.props.my_message.labels[0]}</span>
                            <span className="label label-warning">{this.props.my_message.labels[1]}</span>
                            <a href="#">
                                {this.props.my_message.subject}
                            </a>
                        </div>
                    </div>

                );

            }
        }
    }



export default Message;
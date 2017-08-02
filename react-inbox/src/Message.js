import React, { Component } from 'react';

class Message extends  Component{
    constructor(props) {
        super(props)
        let isSelected = this.props.my_message.selected
        let isRead = this.props.my_message.read
        let isLabeled = this.props.my_message.labels



        this.state = {
            selected: isSelected,
            read: isRead,
            label: isLabeled
        }



    }
    render(){

        if(this.props.my_message.read){
            if(this.state.selected){
                return(
                    <div className="row message read selected">
                        <div className="col-xs-1">
                            <div className="row">
                                <div className="col-xs-2">
                                    <input type="checkbox" checked="checked" />
                                </div>
                                <div className="col-xs-2">
                                    <i className="star fa fa-star-o"></i>
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
                    <div className="row message read">
                        <div className="col-xs-1">
                            <div className="row">
                                <div className="col-xs-2">
                                    <input type="checkbox"/>
                                </div>
                                <div className="col-xs-2">
                                    <i className="star fa fa-star-o"></i>
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

        }else if (this.state.selected) {
            return(

                <div className="row message unread selected">

                    <div className="col-xs-1">
                        <div className="row">
                            <div className="col-xs-2">
                                <input type="checkbox" checked="checked"/>
                            </div>
                            <div className="col-xs-2">
                                <i className="star fa fa-star-o"></i>
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

        } else {
            return (
            <div className="row message unread">
                <div className="col-xs-1">
                    <div className="row">
                        <div className="col-xs-2">
                            <input type="checkbox" />
                        </div>
                        <div className="col-xs-2">
                            <i className="star fa fa-star-o"></i>
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

    }
}


export default Message;
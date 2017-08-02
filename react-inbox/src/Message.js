import React, { Component } from 'react';

class Message extends  Component{
    constructor(props) {
        super(props)
        this.state = {
            selected: this.props.my_message.selected,
            read: this.props.my_message.read,
            starred: this.props.my_message.starred
        }

        let isSelected = this.props.my_message.selected
        let isRead = this.props.my_message.read
        let isStarred = this.props.my_message.starred

    }
    render(){
        if(this.state.selected){

            return(
                <div className="row message read {isSelected}">
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
                        <a href="#">
                            <p>{this.props.my_message.subject}</p>
                        </a>
                    </div>
                </div>
            )
        }
        if(this.props.my_message.read){
            return(
                <div className="row message read">
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
                        <a href="#">
                            <p>{this.props.my_message.subject}</p>
                        </a>
                    </div>
                </div>

            );
        }else {
            return(
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
                        <a href="#">
                            <p>{this.props.my_message.subject}</p>
                        </a>
                    </div>
                </div>
                );

        }

    }
}


export default Message;
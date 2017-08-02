import React, { Component } from 'react';
import Message from './Message'
class MessageList extends  Component{
    render(){
        return(
            <div>
                {this.props.messages.map((message) => {
                return <Message my_message={message}/>
            })}
            </div>



        );
    }
}


export default MessageList;
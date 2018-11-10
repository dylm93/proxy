import React from 'react';

class Message extends React.Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <div> 
                <div className = 'message-component'>
                    
                    <h1 className = 'message-headers'>To</h1>
                    <input className = 'message-input'></input>
                    <h2 className = 'message-headers'>Write your message and add tracks
                    <a className = 'star'>*</a>
                    </h2>
                    
                    <div>
                        <input className = 'message-textarea' ></input>
                        <div className = 'message-buttons'>
                            <button className = 'add-track-button'>Add track</button>
                            <button className = 'send-button'>Send</button>
                        </div>
                    </div>

                </div>

            </div>
    )
    }
}

export default Message

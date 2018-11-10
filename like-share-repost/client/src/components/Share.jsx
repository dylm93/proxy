import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import SocialMediaShare from './SocialMediaShare.jsx';
import Embed from './Embed.jsx';
import Message from './Message.jsx';


export default class Share extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false,
            showSocialMediaComponent: true,
            showMessageComponent: false,
            showEmbedComponent: false,
            shareClicked: true
         
        }
        this.onShareClick = this.onShareClick.bind(this)
        this.onMessageClick = this.onMessageClick.bind(this)
        this.onEmbedClick = this.onEmbedClick.bind(this)
    }
    
    onShareClick() {
        this.setState({
          showSocialMediaComponent: true, 
          showMessageComponent: false,
          showEmbedComponent: false,
          
        });

      }

    onMessageClick() {
        this.setState({
          showMessageComponent: true,
          showSocialMediaComponent: false,
          showEmbedComponent: false,
          
        });
      }

    onEmbedClick() {
        this.setState({
          showEmbedComponent: true,
          showSocialMediaComponent: false,
          showMessageComponent: false,
          
        });
      }
    

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }
    

    render() {
        return (
            <div>
                <button display = 'inline-block' className = 'share-button' style = {{borderColor: this.state.bgShareButtonColor}} onClick={() => this.openModal()} ><img src = 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-share-512.png' width ='16' height = '16'  /></button>
                
                <Modal visible={this.state.visible} width= '525' height= '425' effect="fadeInDown" onClickAway={() => this.closeModal()}>
                    <div className = 'share-embed-message'>
                        <div className = 'sem'>
                            <div className={this.state.showSocialMediaComponent ? 'socialmediashareclicked': 'socialmediashare'} onClick={this.onShareClick}>Share</div>                      
                            <div className = {this.state.showEmbedComponent ? 'embedclicked': 'embed'} onClick={this.onEmbedClick}> Embed </div>
                            <div className = {this.state.showMessageComponent ? 'messageclicked': 'message'} onClick={this.onMessageClick}>Message</div>
                        </div>

                        {this.state.showSocialMediaComponent ?
                            <SocialMediaShare currentSong = {this.props.currentSong}/> :
                            null
                            }  

                        {this.state.showEmbedComponent ?
                            <Embed currentSong = {this.props.currentSong} /> :
                            null
                            }   
                        
                        {this.state.showMessageComponent ?
                            <Message currentSong = {this.props.currentSong} /> :
                            null
                            }   
                            
                                                   
                                                      
                            <a href="javascript:void(0);" ></a>

                    </div>
                </Modal>
            </div>
        )

    }
}


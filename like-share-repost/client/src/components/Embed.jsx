import React from 'react';

class Embed extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            active: false,
            active1: false
        }
        this.toggleClass = this.toggleClass.bind(this);
        this.toggleClass1 = this.toggleClass1.bind(this);
    }

    toggleClass () {
        this.setState({ 
            active: true,
            active1: false 
        });
    }
    toggleClass1 () {
        this.setState({ 
            active1: true,
            active: false
        });
    }


    render () {
        return (
            <div className = 'embed-component'>
                <div className = 'embed-album-art'>
                    <div onClick={this.toggleClass}>
                        <img  className={this.state.active ? 'embedalbumartclicked1': 'embedalbumart1'} 
                             src = {this.props.currentSong.albumArt}/>
                        <img className = 'soundcloud-wave' src = 'http://mediad.publicbroadcasting.net/p/wkms/files/201701/sound-1781570_960_720.png'/>
                    </div>
                    <div>
                        <img className={this.state.active1 ? 'embedalbumartclicked2': 'embedalbumart2'} 
                            onClick={this.toggleClass1} src = {this.props.currentSong.albumArt}/>
                        <img className = 'soundcloud-wave' src = 'http://mediad.publicbroadcasting.net/p/wkms/files/201701/sound-1781570_960_720.png'/>
                    </div>
                    <h1 className = 'code'>Code</h1>
                    <input className = 'code-input'></input>
                    <a className = 'wordpress-code' href=''>Wordpress Code</a>
                    <h2 className = 'options'>Options</h2>
                    <div className = 'colorboxes'>
                        <h3 className = 'color'>Color: </h3>
                        <div className = 'boxes'>
                            <div className = 'colorbox'></div>
                            <div className = 'colorbox1'></div>
                            <div className = 'colorbox2'></div>
                            <div className = 'colorbox3'></div>
                            <div className = 'colorbox4'></div>
                            <input className = 'colorinput'></input> 
                            <img className = 'color-gradient' src = 'https://a-v2.sndcdn.com/assets/images/widgets/colors-0c8fa81.png'></img>
                        </div>
                        
                        <div className = 'embed-checkboxes'>
                                <div><input type = 'checkbox' className = 'checkbox'></input> 
                                    <span className = 'enable-automatic-play'>Enable automatic play</span>
                                </div>
                                <div><input type = 'checkbox' className = 'checkbox'></input> 
                                    <span className = 'show-comments'>Show comments</span>
                                </div>
                                <div><input type = 'checkbox' className = 'checkbox'></input> 
                                    <span className = 'show-recommendations'>Show recommendations</span>
                                </div>
                        </div>
                    </div>
                </div>

            </div>
    )
    }
}

export default Embed

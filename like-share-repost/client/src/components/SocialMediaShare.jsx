import React from 'react';

class SocialMediaShare extends React.Component {
    constructor (props) {
        super (props)
    }   

    render () {
        return (
            <div>

                <h1 className = 'share-title'>Share</h1>
                <div className = 'embeddiv'>
                    <img className = 'share-album-art' src = {this.props.currentSong.albumArt}/>
                    <img className = 'play-button' src = 'https://s3-us-west-1.amazonaws.com/yongsoobucket/play.png'/>
                    <span className = 'share-artist'>{this.props.currentSong.artist}</span>
                    <span className = 'share-song-title'>{this.props.currentSong.songName}</span>
                    <img className = 'share-wave' src = 'https://s3-us-west-1.amazonaws.com/dylanmac/share-wave.png' />
                    <a className = 'share-release-date'>{this.props.currentSong.releasedBy}</a>
                </div>
                <div className = 'share-element'>
                    <div className = 'sm'>
                        <span><img className = 'twitter' src = 'http://www.charlottemi.org/wp-content/uploads/2018/01/Official-Twitter-button-square.png'/></span>
                        <span><img className = 'facebook' src = 'http://icons-for-free.com/icon/download-facebook_social_icon-293782.png'/></span>
                        <span><img className = 'tumblr' src = 'https://pbs.twimg.com/profile_images/1012382485596946433/hmiOHCAP_400x400.jpg'/></span>
                        <span><img className = 'googleplus' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS__f_TBiNfQHoB98cNzdendWiDxx55oQX7AGOU_PDxOp0_HAWy'/></span>
                        <span><img className = 'pinterest' src = 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Pinterest_Shiny_Icon.svg'/></span>
                        <span><img className = 'email' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODrDZ-3qr3EroIPSHBK2vk5y-BI6CMRQI1iFfJUJPai3XTy0'/></span>
                    </div>
                
                </div>
                <div className = 'share-link'>
                    <div className = 'soundcloud-link'>
                            <input className = 'input' value = {`https://soundcloud.com/${this.props.currentSong.artist.toLowerCase().split(' ').join('')}/${this.props.currentSong.songName.toLowerCase().split(' ').join('')}`} ></input>
                    </div>
                        <input type = 'checkbox' className = 'checkbox1'></input> 
                        <a className = 'at'>at</a>
                        <input className = 'input-time' defaultValue = '0:00'></input>
                </div>

                
            </div>
    )
    }
}

export default SocialMediaShare

import React from 'react';

const Artist = (props) => (

    <div className = 'artist-component'>
        <img className = 'artist-art' src = {props.currentSong.albumArt} />
            <div className = 'artist-name-star'>
                <div className = 'artist-name'> {props.currentSong.artist} 
                    <img className = 'artist-star' src = 'https://wiki.sabayon.org/images/2/2e/Star.png' />
                    <div>
                        <img className = 'followers' src = 'https://s3-us-west-1.amazonaws.com/dylanmac/followers.svg' />
                        <span className = 'followers-amount'>900k</span>
                        <img className = 'tracks' src = 'https://s3-us-west-1.amazonaws.com/dylanmac/tracks.svg' />
                        <span className = 'tracks-amount'>15</span>
                        <button className = 'follow-button'>Follow</button>
                    </div>
                </div>
            </div>
        <span className = 'release-info' >
            <div> Follow: @
                <a href= '' >{props.currentSong.artist.toLowerCase().split(' ').join('')}</a>
            </div>
            <div>
                <a href=''>{`facebook.com/${props.currentSong.artist.split(' ').join('')}`}</a>
            </div>
            <a>Inquiries: </a>
            <a href='' >{`${props.currentSong.artist.toLowerCase().split(' ').join('')}@gmail.com`}</a>
        </span>
    </div>
                
)
    

export default Artist;
import React from 'react';
import MoreMenu from './MoreMenu.jsx';
import Share from './Share.jsx';
import Artist from './Artist.jsx';
import axios from 'axios';

class LRSBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = ({
            likeCount: 0,
            repostCount: 0,
            playsCount: 0,
            bgLikeColor: '#e5e5e5',
            bgRepostColor: '#e5e5e5',
            likeClicked: true,
            repostClicked: true,
            currentSong: {
                songName: 'Stairway to Heaven',
                artist: 'Led Zeppelin',
                likeCount: 0,
                playsCount: 0,
                repostCount: 0,
                albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
                releasedBy: '50 years ago'
            }
            
        })
        this.toggleRepostClass = this.toggleRepostClass.bind(this);
        this.toggleLikeClass = this.toggleLikeClass.bind(this);
        this.currentSong = this.currentSong.bind(this);
    }

    componentDidMount () {
        this.currentSong ();
    }

    currentSong () { 
        axios.get('/artists')
        .then(res => {
        const index = Math.floor(Math.random() * 100) + 1
        const song = res.data[index]
        this.setState({ 
            currentSong: song,
            likeCount: song['likeCount'],
            repostCount: song['repostCount'],
         });
      })
    }


    toggleLikeClass() {
        this.setState({
            likeClicked: !this.state.likeClicked
        })
        if (this.state.likeClicked === true) {
            // const id = this.state.currentSong._id
                
            this.setState({
                bgLikeColor: '#ff5500',
                likeCount: this.state.likeCount + 1
            })

            // axios.patch(`/api/inc/${id}`, {params: {_id: id}})
            //     .then(data => console.log(data))
            //     .catch(err => console.error(err))

            // axios.get(`/api/inc/${id}`, {params: {_id: id}})
            //     .then(res =>
            //         this.setState({
            //             likeCount: res.data.likeCount
            //         })
            //     )

        } else {
            // const id = this.state.currentSong._id

            this.setState({
                bgLikeColor: '#e5e5e5',
                likeCount: this.state.likeCount - 1     
            })

            // axios.patch(`/api/likedec/${id}`, {params: {_id: id}})
            //     .then(data => console.log(data))
            //     .catch(err => console.error(err))

            // axios.get(`/api/inc/${id}`, {params: {_id: id}})
            //     .then(res =>
            //     this.setState({
            //         likeCount: res.data.likeCount
            //     })
            // )


        }
        
    }
    
    toggleRepostClass() {
        this.setState({
            repostClicked: !this.state.repostClicked
        })
        if (this.state.repostClicked === true) { 
            // const id = this.state.currentSong._id

            this.setState({ 
                bgRepostColor: '#ff5500',
                repostCount: this.state.repostCount + 1
            })
            
            // axios.patch(`/api/repostinc/${id}`, {params: {_id: id}})
            //     .then(data => console.log(data))
            //     .catch(err => console.error(err))

            // axios.get(`/api/inc/${id}`, {params: {_id: id}})
            //     .then(res =>
            //     this.setState({
            //         repostCount: res.data.repostCount
            //     })
            // )
        } else {
            // const id = this.state.currentSong._id

            this.setState({
                bgRepostColor: '#e5e5e5',
                repostCount: this.state.repostCount - 1
            })

            // axios.patch(`/api/repostdec/${id}`, {params: {_id: id}})
            //     .then(data => console.log(data))
            //     .catch(err => console.error(err))

            // axios.get(`/api/inc/${id}`, {params: {_id: id}})
            //     .then(res =>
            //     this.setState({
            //         repostCount: res.data.repostCount
            //     })
            // )
        }
    }

    onLikeHover () {
        if (this.state.likeClicked === true) {
        this.setState({
            bgLikeColor: '#BDBDBD'
        })
    }
    }
    onRepostHover () {
        if (this.state.repostClicked === true) {
        this.setState({
            bgRepostColor: '#BDBDBD'
        })
    }
    }

    onLikeLeave () {
        if (this.state.likeClicked === true) {
        this.setState({
            bgLikeColor: '#e5e5e5'
        })
    }
    }

    onRepostLeave () {
        if (this.state.repostClicked === true) {
        this.setState({
            bgRepostColor: '#e5e5e5'
        })
    }
    }
    


    render () {
        return (
            <div className = 'entire-component'>

                <div  className= 'container'>
                    <button className = 'like-button' style={{borderColor:this.state.bgLikeColor}} onMouseOver={this.onLikeHover.bind(this)} onMouseLeave={this.onLikeLeave.bind(this)} onClick ={this.toggleLikeClass} id = 'like-button' ><img style={{color:this.state.bgLikeColor}} src='https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/heart-24-512.png' width="12" height="12"/></button>
                    <button className = 'repost-button' style={{borderColor:this.state.bgRepostColor}} onMouseOver={this.onRepostHover.bind(this)} onMouseLeave={this.onRepostLeave.bind(this)} onClick ={this.toggleRepostClass} id = 'repost-button'><img src='https://cdn0.iconfinder.com/data/icons/zondicons/20/repost-512.png' width="15" height="15"/></button>
                    <span> <Share currentSong = {this.state.currentSong} /> </span>
                    <span className = 'more' ><MoreMenu currentSong = {this.state.currentSong} /> </span>
                </div>

                <div className= 'counts'>
                    <span className = 'plays' style ={{color: '#8c8c8c'}}> {this.state.currentSong['playsCount']}</span>
                    <img className = 'play-count' src='http://measuremenow.com/assets/images/play_button_grey.png' width="10" height="13"/>
                    <span className = 'likes' style ={{color: '#8c8c8c'}}>{this.state.likeCount}</span>
                    <img className = 'like-count' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///+Li4uIiIiCgoKFhYWPj4/6+vr29vby8vKzs7OAgIDq6uqMjIz5+fmqqqqampqgoKDi4uLKysrU1NTk5OSvr6+9vb2kpKTc3NyVlZXt7e3CwsLR0dGdnZ3MzMy+vr6Zbc61AAAFwklEQVR4nO2d25aqMAyGta0i6uABR1Tm8P5vucHxgIpQkr/Q7pXvzpus/jRN0qOjkSAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgnBjtku3+zjJ1ussi/N0wTa4SPM4K80l8e82XUwBbSQTHfZro7Ux6oopfq63J7LF03b9Yu8Yf9ENcjjlK100ZfyCMvqYRwSLUX4sLNYanMQHuIBmZvmktjFXzDzp+t0Xydy8N6i02vfYk7tENzTm2qTko4PJKNENH+xiMds4k/TA5ru1MZcWba1t5lYmlT724KwLS30lZjWzsnk6trrETeOKH6wbmcZza31lg0xqYfTH/puVGj9d5o9DXexsRMetRmPdzaRS7ly1a1tKzLrF6Leth97Rezf6Ztaj5QF1bPKq6NjVK0rMtwtPXXT20KvEyfvmREuaUTWxi2FdOMxp+holRmPiVytiGDqmHghD8N6cY73R6YQqsAAscUPvwbPE+nCzYggsJCId9USKMdXW1CWNhGdVLYHhhhgPKujX1L/lOP5Z4gomMGMLrPGpBVdgYROVF3/4bamJNhOA0TlmshEhBL588E/u0D6juszQ3pIAfLREV8P7BvPZ1CdAIKgtT34KsjnWO75CUuFYi8lvRmOIjxaob7ZAVjHzhL6uT514BcSDTfZUild3PHIbNWucUXZSBGStCpdgg/QL9kiMgV1YfPDsbBQ3tEubCUvgFCrw0onQLixssnLiARXzLpw/OHJoF5gfjkKskxbo2WiH7UJmwsC2pWxODKnjHzCUTZILM/DnLlAzsOMXCm0WZd/wBW9NUbvhTbavyb5lj3YoN7xZBrIBWHu4RNOXMxCz1B6glzUfYXTh2HxRFToIpU5Q5PUabNntDnppusEnCyfQqxp0VeoMcroIRuGEqjANReHyv1c4pqb8YLyUrBC2VOoaspeGkg/pCqNQvJQcS0fLoZtuCX36hJ+tOuHdOQELUNtOjmEsmQYyxze/ZIUO1mlcYOi7M4GkC804dxKGQnI6HAWyFMVZTRzlIQxExjAMZCAa1tmoANYTmRuIAWRE5k5+AG7KiaQl3pemlTMsNLa+R1PN2D08M/VcIeDcF3yjG4vm3/c6eR1rmKniD68niZyi+4bPCYNVkt7xuBMN5AStxyORnQuveBtOueXMjamnnahxt2b9LGwgmeKKl9Upb174xA53bBlGzTUcDrCj5zCgPlowHVrQC5jLJBXAB3vZ8M/ov+CXn9Ze9+Pi06IU8GJeBZ8qcM6x4AbYVyJhOBiEf8BPaBOBFdwvTP3Y9b7cS3GCF/Moxp62BZALs0ygt9RfGT4rIu5UNvI9cLTR5BPPtrBeegAIdPRwSxX8nZcOGMTN5lYGPM9nHOaJKl9DSXRTjdaRDyOx+bUiLJQHo/gCx+g5bxOYNx86CnSb6Z9hvi1DEKj6FTgarXuWqPp/4RN8X7kF+MNXvkkcRGCfEgcS2J9EM8wruyXQ5x/eoQYIMnd66EU1drOuZgvh5cqOAifDChyNMrcS1aTPUq0ep9WNWQ36YPkFh2V4X/PBNpxNpvqZ0dvgaI2xjzUZW5xsLnZ4DrwHdl0erLZjjt2mZzMDLzIq5XrhtzPTFTJrqGXf810bEtxgdPOaNZ89SqIGHyTBkWIkamcboHzIr5o/COz770g6EdFepq+gxkPN52355HmqrzGmypZzyM/izyI8YEMfjO63PzFExOTv/xC8Q5oyhjAE76TdK3Gf5ko22P/9zx92/7njF5081Rx9rLTb6OCpYSSJV2aWMTVED71iNdsI00OvbNr/KidUD70yzZq7UYFvTQxB2vg/iZb/Pec30dtuVJr+dI5f/NR3ozmGU4e2UduNoZVpLaTPUyqz7OkvN/vjcfIfeo6oZTMx9w70bkUbw9aYvxD6f43AKh97bZReD3m2wjlRnnm9HCoIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIguA5/wBE1V/FM79CoAAAAABJRU5ErkJggg==' width="17" height="17"></img>
                    <span className = 'reposts' style ={{color: '#8c8c8c'}}><img className = 'repost-count' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAS1BMVEX///+Li4uEhISenp6VlZXp6eni4uLa2trIyMiIiIjx8fGBgYHe3t6FhYXt7e2ioqKoqKi0tLTR0dH4+Ph6enrDw8OwsLC9vb2Xl5f4TJixAAADzElEQVR4nO3d3XLaMBRFYclAQDgGQwLh/Z+0pplpOxALnZ8ta6Z7XScZvh7bsgs2ITDGGGOMMcYYY4wxxhhjjDHGGGOMMcbY/9hhV/yjm9vKv+N4vWwPQOA+9eXE9z4hGrouXc8fKGCKImIElbrhtAcBo4T4BiNOyH5031q/gSIibop3Y/eFATYzxRiHtecY/wJlU+yQxNSdIcB2NtTplVwgwIamGJ12xn1MD3+4oSl6EB8nKCVip9jb98WfgE1N0XpE/RnY0KKR1hhgQ1McTLviPLChKfaGk9QcsJ3DTbqCgO1sqOohvgI2M8V0UgKfFnobEXkxpQO+nKCUiJtit4UBG5mi5lhTCmxk0ZBvpuXANqYoPppKgE1MUbojyoAtHG4G2aWwFNjAhipbEeXA5aeYRgmwYKF/TjTFTteQEa4EQMUEhcTDm65zhlh+kagFiojKDpntu1ioB1YgbhyEFiCe6CC0AeFEu9AKRBPNQjsQTLQKPYBYolGoW+irEm1CnwliiSahHxBItAg9gTiiQegLhBH1wkM/f7afgwyzv/Xp9d6sk/B9O9v7OgPczf8e5DM9Huelz2WEHfLzVz9VX7hxfPUlUaiLwppRqIvCmlGoi8KaUaiLwppRqIvCmlGoi8KaUaiLwppRqIvCmlGoi8KaUaiLwppRqIvCmlGoi8KaUaiLwppRqIvCmlGoi8KaUaiLwppRqIvCmlGoqyWhy33AT9UWfpznb+LY5e7lzt000pQwXD419+NPr2au/sUD3epvpTvfx0qk9OKxJwvsh67El8BFjjSOxNfAZY6lbsQC4EKrhRMxxYJHDy20HroQSya43IrvQCwDLndOYyYWAhc8azMSS4FLnpeaiMXARc+8DcRy4LL3AauJAmBOOJyVz3sq/5dREiXAcMv8ofn78fP1+csZM7Foof/TyvdpC991UKJogiGMCGFETlEIDF8QIXCKUmDIPQXOUv+GIYqB2f/fshEhU5QDQ4A9NhYxRQ0wHDE7YkRMUQWE7YjR/3CjA4YPnNB5irKF/p8wK+J3nlNUTnBqA30ivhtRD0Qea6LfFC1A7BCdFg0TMIQT8GDjs6EagSEggR5TNAPBX6JinqId6P5+0GO2w40HcNoVwV9LZSCqF/qHRvD3p6mJPhO8d2pzX/QDTqfgLe6LnsBp5Y/YdVGxaPgCw31LRZ7AyTdUd+A0xiPSKJ0iADi1vw5DI1f9GGC4f6ZnTN3ERCQiooC/22wv1/EI+ObtW/n7WbvaD4hljDHGGGOMMcYYY4wxxhhjjDHGGGOMsTb6Bfm/XHk2HH9xAAAAAElFTkSuQmCC' width="17" height="17"></img> {this.state.repostCount}</span>
                </div>
            
                <div className = 'artist'>
                    <Artist currentSong = {this.state.currentSong}/>
                </div>

            </div>
            


        )
    }

}

export default LRSBar;
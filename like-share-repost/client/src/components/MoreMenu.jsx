import React, { Component } from 'react';
import Modal from 'react-modal';

class MoreMenu extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
      bgMoreColor: '#e5e5e5',
      moreClicked: true,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    this.setState({ 
        showMenu: true
    }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false,
        bgMoreColor: '#e5e5e5'
    }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
    }
  }

  onMoreHover () {
    if (this.state.showMenu === true) {
      this.setState ({
        bgMoreColor: '#ff5500'
      })
    } else {
    this.setState ({
      bgMoreColor: '#BDBDBD'
    })
  }
  }

  onMoreLeave () {
    this.setState ({
      bgMoreColor: '#e5e5e5'
    })
  }

  render() {
    return (
      <div>
          <span>
        <button className = 'more-button' style= {{borderColor:this.state.bgMoreColor}} onMouseOver = {this.onMoreHover.bind(this)} onMouseLeave = {this.onMoreLeave.bind(this)} onClick={this.showMenu}>
          ...
        </button>
        
        {
          this.state.showMenu
            ? (
              <div 
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}>
               <div className = 'more-menu-buttons'>
                  <button className = 'nextUp' onNextUp = {this.onNextUp}> <img className = 'more-button-images' src = 'https://s3-us-west-1.amazonaws.com/dylanmac/add-to-nextup.svg'/> Add to Next up </button>
                  <button className = 'addToPlaylist'> <img className = 'more-button-images' src = 'https://s3-us-west-1.amazonaws.com/dylanmac/add-to-playlist.svg'/> Add to playlist </button>
                  <button className = 'station'> <img className = 'more-station-image' src = 'https://s3-us-west-1.amazonaws.com/dylanmac/station.svg'/> Station </button>
                </div>
              </div>) : ( null )
        }
        </span>
      </div>
    );
  }
}

export default MoreMenu;
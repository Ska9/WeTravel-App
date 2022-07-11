import React from 'react';
import ReactPlayer from 'react-player';

//CSS Files
import '../assets/CSS/ResponsivePlayer.css';

class ResponsivePlayer extends React.Component {

    render () {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=OtJVufo3IrA&t=208s'
            controls={true}
          />
        </div>
      );
    }

}

export default ResponsivePlayer;
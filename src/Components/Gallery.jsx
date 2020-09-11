import React from 'react';
import Photo from './Photo';

export default class Gallery extends React.Component {
  render() {
    return (
      <div className='container'>
        {this.props.albums.map((album, index) => {
          return (
            <div key={index} className='row'>
              {
                album.map((photo) => {
                  return (<Photo index={index} key={photo.id} url={photo.url} title={photo.title} thumbnailUrl={photo.thumbnailUrl} />)
                })
              }
            </div>
          )
        })}
      </div >
    )
  }
}


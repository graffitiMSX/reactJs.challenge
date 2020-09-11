import React from 'react';
import Photo from './Photo';

export default class Gallery extends React.Component {
  render() {
    console.log('Gallery', this.props.albums)
    return (
      <div>
        {this.props.albums.map((album, index) => {
          console.log('Album', index)
          return (
            <div key={index} className="row">
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


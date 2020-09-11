import React from 'react';

export default class Photo extends React.Component {
    render() {
        console.log('entrou')
        let { index, url, thumbnailUrl, title } = this.props;
        let photo = { index, url, thumbnailUrl, title }
        console.log('Photo 2', photo)
        return (
            <div className={photo.index === 0 ? 'photoBox1' : index === 1 ? 'photoBox2' : 'photoBox3'}>
                <a
                    href={photo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                    <p>{photo.title}</p>
                </a>
            </div>
        )
    }
}

import React from 'react';

export default class Photo extends React.Component {
    render() {
        let { index, url, thumbnailUrl, title } = this.props;
        let photo = { index, url, thumbnailUrl, title }
        return (
            <div className={index === 0 ? 'photoBox1' : index === 1 ? 'photoBox2' : 'photoBox3'}>
                <a                    
                    href={photo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={photo.thumbnailUrl} alt={photo.title} className={index === 0 ? 'pictBox1' : index === 1 ? 'pictBox2' : 'pictBox3'}/>
                    <p>{photo.title}</p>
                </a>
            </div>
        )
    }
}

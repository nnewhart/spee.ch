import React from 'react';
import { Link } from 'react-router-dom';

const AssetPreview = (props) => {
  const {defaultThumbnail, claimData} = props;
  const {name, claimId, fileExt, contentType, thumbnail} = claimData;
  const embedUrl = `/${claimId}/${name}.${fileExt}`;
  const showUrl = `/${claimId}/${name}`;
  return (
    <Link to={showUrl} className='asset-preview'>
      {(() => {
        switch (contentType) {
          case 'image/jpeg':
          case 'image/jpg':
          case 'image/png':
          case 'image/gif':
            return (
              <div>
                <img
                  className={'asset-preview-image'}
                  src={embedUrl}
                  alt={name}
                />
                <h3 className='list-title'>{title}</h3>
              </div>
            );
          case 'video/mp4':
            return (
              <div>
                <img
                  className={'asset-preview-video'}
                  src={thumbnail || defaultThumbnail}
                  alt={name}
                />
                <h3 className='list-title'>{title}</h3>
              </div>
            );
          default:
            return (
              <p>unsupported file type</p>
            );
        }
      })()}
    </Link>
  );
};

export default AssetPreview;

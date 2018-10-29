import React from 'react';
import { Link } from 'react-router-dom';
import Label from '@components/Label';
import RowLabeled from '@components/RowLabeled';
import Row from '@components/Row';
import SpaceBetween from '@components/SpaceBetween';
import AssetShareButtons from '@components/AssetShareButtons';
import ClickToCopy from '@components/ClickToCopy';

import siteConfig from '@config/siteConfig.json';
const { details: { host } } = siteConfig;
import createCanonicalLink from '../../../../utils/createCanonicalLink';

class AssetInfo extends React.Component {
  render () {
    // const { asset: { shortId, claimData : { channelName, certificateId, description, name, claimId, fileExt, contentType, thumbnail, host } } } = this.props;
    const { asset } = this.props;
    const { shortId, claimData: { channelName, channelShortId, certificateId, description, name, claimId, fileExt, contentType, thumbnail, host } } = asset;

    const assetCanonicalUrl = `${host}${createCanonicalLink({
      asset,
      absolute: true,
    })}`;

    let channelCanonicalUrl;
    if (channelName) {
      const channel = {
        name: channelName,
        shortId: channelShortId,
      };
      channelCanonicalUrl = `${createCanonicalLink({channel})}`;
    }
    return (
      <div>
        {channelName && (
          <Row>
            <RowLabeled
              label={
                <Label value={'Channel:'} />
              }
              content={
                <span className='text'>
                  <Link to={channelCanonicalUrl}>{channelName}</Link>
                </span>
              }
            />
          </Row>
        )}

        <Row>
          <RowLabeled
            label={
              <Label value={'Share:'} />
            }
            content={
              <AssetShareButtons
                name={name}
                assetUrl={assetCanonicalUrl}
              />
            }
          />
        </Row>

        <Row>
          <RowLabeled
            label={
              <Label value={'Link:'} />
            }
            content={
              <ClickToCopy
                id={'short-link'}
                value={assetCanonicalUrl}
              />
            }
          />
        </Row>

        <Row>
          <RowLabeled
            label={
              <Label value={'Embed:'} />
            }
            content={
              <div>
                {(contentType === 'video/mp4') ? (
                  <ClickToCopy
                    id={'embed-text-video'}
                    value={`<video width="100%" controls poster="${thumbnail}" src="${assetCanonicalUrl}.${fileExt}"/></video>`}
                  />
                ) : (
                  <ClickToCopy
                    id={'embed-text-image'}
                    value={`<img src="${assetCanonicalUrl}.${fileExt}"/>`}
                  />
                )}
              </div>
            }
          />
        </Row>

        <Row>
          <SpaceBetween>
            <a
              className='link--primary'
              href={`${assetCanonicalUrl}.${fileExt}`}
            >
              Direct Link
            </a>
            <a
              className={'link--primary'}
              href={`${assetCanonicalUrl}.${fileExt}`}
              download={name}
            >
              Download
            </a>
            <a
              className={'link--primary'}
              target='_blank'
              href='https://lbry.io/dmca'
            >
              Report
            </a>
          </SpaceBetween>
        </Row>

        {description && (
          <Row>
            <p>{description}</p>
          </Row>
        )}

        <Row>
          <p>
            Hosted via the <a className={'link--primary'} href={'https://lbry.io/get'} target={'_blank'}>LBRY</a> blockchain
          </p>
        </Row>

      </div>
    );
  }
};

export default AssetInfo;

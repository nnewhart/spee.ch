import {connect} from 'react-redux';
import {setPublishInChannel, updateSelectedChannel, updateError} from '../../actions/publish';
import View from './view';

const mapStateToProps = ({ channel, publish, site }) => {
  return {
    loggedInChannelName  : channel.loggedInChannel.name,
    publishInChannel     : site.disableAnonPublishing ? true : publish.publishInChannel,
    selectedChannel      : publish.selectedChannel,
    channelError         : publish.error.channel,
    disableAnonPublishing: site.disableAnonPublishing,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPublishInChannelChange: (value) => {
      dispatch(updateError('channel', null));
      dispatch(setPublishInChannel(value));
    },
    onChannelSelect: (value) => {
      dispatch(updateError('channel', null));
      dispatch(updateSelectedChannel(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);

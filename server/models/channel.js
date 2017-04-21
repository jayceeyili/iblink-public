const _liveChannels = [];

module.exports.getNewChannel = function () {
  const length = _liveChannels.length;
  for (let i = 1; i < length; i++) {
  	if (!_liveChannels[i]) {
  		_liveChannels[i] = true;
  		return i;
  	}
  }
  _liveChannels.push(true);
  return length;
};

module.exports.deleteChannel = function (channel) {
  _liveChannels[channel] = false;
};

module.exports.channelIsLive = function (channel) {
  return !!_liveChannels[channel];
};

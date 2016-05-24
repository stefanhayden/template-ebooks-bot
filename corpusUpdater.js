var twitterCorpus = require('twitter-ebooks-corpus-builder');
var path = require('path');
var config = require('./config');

twitterCorpus(
	path.join(__dirname, './input/'), 
	path.join(__dirname, './output.txt'), 
	{
		account: 'HUMAN_ACCOUNT_NAME_HERE',
		consumer_key: config.twitter.consumer_key,
		consumer_secret: config.twitter.consumer_secret,
		access_token_key: config.twitter.access_token_key,
		access_token_secret: config.twitter.access_token_secret,
	}
);


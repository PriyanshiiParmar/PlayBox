const apiKey = process.env.REACT_APP_API_KEY;
export const youtubeVideoAPI =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+apiKey;


export const youtubeSearchAPI = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const OFFSET_LIVE_CHAT = 10

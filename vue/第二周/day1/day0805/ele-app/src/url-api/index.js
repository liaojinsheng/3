//const host = 'https://mainsite-restapi.ele.me';

const imgHost = 'http://fuss10.elemecdn.com/';

const addressApi = '/bgs/poi/reverse_geo_coding?latitude=22.54286&longitude=114.059563';

const weatherApi = '/bgs/weather/current?latitude=22.54286&longitude=114.059563';

const hotWordsApi = '/shopping/v3/hot_search_words?latitude=22.54286&longitude=114.059563';

const categoryApi = '/shopping/v2/entries?latitude=22.54286&longitude=114.059563&templates[]=main_template';

const homeListApi = '/shopping/restaurants?latitude=22.54286&longitude=114.059563&offset=0&limit=20&extras[]=activities&terminal=h5'

//const addressApi = '/static/data/address.json';
//
//const weatherApi = '/static/data/weather.json';
//
//const hotWordsApi = '/static/data/hotSearch.json'
//
//const categoryApi = '/static/data/entries.json';



export default {
	imgHost,
	addressApi,
	weatherApi,
	hotWordsApi,
	categoryApi,
	homeListApi
}



//export default {
//	addressApi: host+addressApi
//}



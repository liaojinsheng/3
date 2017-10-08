//const host = 'https://mainsite-restapi.ele.me';

const imgHost = 'http://fuss10.elemecdn.com/';

//接口参数
//latitude 
//longitude
const addressApi = '/bgs/poi/reverse_geo_coding';

//接口参数
//latitude=22.54286
//&longitude=114.059563
const weatherApi = '/bgs/weather/current';

//接口参数
//latitude=22.54286&longitude=114.059563
const hotWordsApi = '/shopping/v3/hot_search_words';

//接口参数
//latitude=22.54286&longitude=114.059563
const categoryApi = '/shopping/v2/entries?templates[]=main_template';

//接口参数
//latitude=22.54286&longitude=114.059563
const homeListApi = '/shopping/restaurants?offset=0&limit=20&extras[]=activities&terminal=h5'

//接口参数
//longitude=114.059563&latitude=22.54286
const addressSearchApi = '/bgs/poi/search_poi_nearby?offset=0&limit=10';

export default {
	imgHost,
	addressApi,
	weatherApi,
	hotWordsApi,
	categoryApi,
	homeListApi,
	addressSearchApi
}



//专门为home处理请求
import API from '../url-api'
import axios from 'axios'

//请求地址
function getAddressData(lg, lt){
	return new Promise((resolve, reject)=>{
//		axios.get(API.addressApi+'?longitude='+lg+'&latitude='+lt)
		axios.get(`${API.addressApi}?longitude=${lg}&latitude=${lt}`)
		//请求成功
		.then((response)=>{
		    resolve(response.data.name);
		})
		//请求失败
		.catch(function (error) {
		    console.log(error);
		});
	})
}

//请求天气
function getWeatherData(lg, lt){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.weatherApi}?longitude=${lg}&latitude=${lt}`)
		.then((response)=>{
		    resolve(response.data);
//		    resolve({
//		    	temperature: response.data.temperature,
//		    	imgPath: response.data.image_hash,
//		    	description: response.data.description
//		    });
		})
		.catch(function (error) {
		    console.log(error);
		});
	})
}

//请求热搜词
function getHotWordsData(lg, lt){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.hotWordsApi}?longitude=${lg}&latitude=${lt}`)
		.then((response)=>{
			var newArr = response.data.map((item)=>{
				return item.word;
			})
			resolve(newArr);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}

//请求轮播图数据
function getHomeBannerData(lg, lt){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.categoryApi}&longitude=${lg}&latitude=${lt}`)
		.then((response)=>{
			var newArr = response.data[0].entries.map((item)=>{
				var newItem = {};
				newItem.name = item.name;
				newItem.id = item.id;
				newItem.imgPath = item.image_hash;
				newItem.flag = item.business_flag;
				return newItem;
			})
			resolve(newArr);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}

//请求商家列表
function getHomeListData(lg, lt){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.homeListApi}&longitude=${lg}&latitude=${lt}`)
		.then((response)=>{
			var newArr = response.data.map((sellerItem)=>{
				var newItem = {};
				newItem.id = sellerItem.id;
				newItem.name = sellerItem.name;
				newItem.imgPath = sellerItem.image_path;
				newItem.rating = sellerItem.rating;
				newItem.orderNum = sellerItem.recent_order_num;
				newItem.orderNum = sellerItem.recent_order_num;
				newItem.activities = sellerItem.activities;
				return newItem;
			})
			resolve(newArr);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}

//搜索地址请求
function searchAddressData(keyword, lg, lt){
	return new Promise((resolve, reject)=>{
		axios.get(API.addressSearchApi+'&keyword='+keyword)
		axios.get(`${API.addressSearchApi}&longitude=${lg}&latitude=${lt}&keyword=${keyword}`)
		.then((response)=>{
			console.log(response)
			resolve(response.data);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}




export default {
	getAddressData,
	getWeatherData,
	getHotWordsData,
	getHomeBannerData,
	getHomeListData,
	searchAddressData
}




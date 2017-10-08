//专门为home处理请求
import API from '../url-api'
import axios from 'axios'

//请求地址
function getAddressData(){
	return new Promise((resolve, reject)=>{
		axios.get(API.addressApi)
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
function getWeatherData(){
	return new Promise((resolve, reject)=>{
		axios.get(API.weatherApi)
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
function getHotWordsData(){
	return new Promise((resolve, reject)=>{
		axios.get(API.hotWordsApi)
		.then((response)=>{
			console.log(response);
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







export default {
	getAddressData,
	getWeatherData,
	getHotWordsData
}




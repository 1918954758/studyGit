/**
 * 判断浏览器
 */
//方法一：
function click() {
	
	//"mozilla/5.0 (windows nt 10.0; win64; x64; rv:89.0) gecko/20100101 firefox/89.0"
	let Firefox = /(firefox)\/([\w.]+)/;
	//"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36 Edg/92.0.902.62"
	let Edg = /(chrome)\/([\w.]+)[ ]+(Edg)\/([\w.]+)/;
    
	//"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36"
    let Chrome = /(chrome)\/([\w.]+)[ ]+((Safari)\/([\w.]+))$/;
	
	let Msie = /(msie\s|trident.*rv:)([\w.]+)/;
    
	let agent = navigator.userAgent.toLowerCase();
    var browserType;
    
    if (Firefox.test(agent)) {
        browserType = 'firefox';
    } else if (Edg.test(agent)) {
        browserType = 'Edg';
    } else if (Chrome.test(agent)) {
    	browserType = 'Chrome';
    } else if (Msie.test(agent)) {
        browserType = 'IE';
    }
	console.log(browserType);
	//alert(browserType);
}
//方法二：
function userBrowser () {
	var browserName = navigator.userAgent.toLowerCase();
	if(/mise/i.test(browserName) && !/opera/.test(browserName)){
		alert("IE");
		return;
	}else if(/firefox/i.test(browserName)){
		alert("Firefox");
		return;
	}else if(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)){
		alert("Chrome");
		return;
	}else if(/opera/i.test(browserName)){
		alert("Opera");
		return;
	}else if(/webkit/i.test(browserName) && !(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))){
		alert("Safari");
		return;
	}else{
		alert("unKnow");
	}
}

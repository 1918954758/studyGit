/**
 * 
 */
(function() {
	Ext.onReady(function() {
		//alert("ddddddddadfgadffg");
		//Ext.MessageBox.alert("hello", "hello word");
		var myArray = [1, 2, 3, 45, 6, 7, 4];
		
		// test every - 遍历 myArray
		Ext.Array.every(myArray, function(item) {
			if (item > 6) {
				return true;
			} else {
				//alert(item);
				return false;
			}
		}, this);
		debugger;
		alert(myArray[1]);
		
		//test filter - 过滤需要的元素
		var filter = Ext.Array.filter(myArray, function(item) {
			if (item == 45) {
				return true;
			} else {
				return false;
			}
		}, this);
		
		alert(filter);
	});
})();
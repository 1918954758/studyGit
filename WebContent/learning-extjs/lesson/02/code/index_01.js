/**
 * 类的声明，其实就是一个function
 */
function User() {
	//相当于 java中的 public
	this.Name = 'zichen';
	this.age = 26;
	//相当于 java中的 private
	var email = "zichen@163.com";
	this.getEmail = function() {
		return email;
	}
}

var u = new User();
alert(u.Name + " , " + u.age);
alert(u.getEmail());


var person = {
	name: 'zichen',
	age: '26'
}
alert(person.name + " , " + person.age);
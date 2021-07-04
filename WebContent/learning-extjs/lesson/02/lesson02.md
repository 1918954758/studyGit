# 1. JS 类的声明和对象的创建

# 2. 原始方法用ExtJS创建一个window

# 3. 利用一个按钮触发window窗体，了解一下ExtJS的事件机制

# 4. 利用ExtJS的create来创建一个window

# 5. 利用define自定义类，并且继承（extend） window
	//构造器
	initComponent: function() {
		this.callParent(arguments);
	}
	
# 6. requires JS的异步加载
## 6.1. requires 异步加载js文件（Ext类文件，文件名和类名最好保持一致，对于不同的ExtJS版本可能会有问题）

# 7. config 自动的get和set方法
## 7.1. config 类的配置项，类加载之后，会自动为配置项中的属性生成对应的get和set方法

# 8. mixins 类的混合
## 8.1. 如果要引入单个类，mixins的作用和extend的作用一样，如果要引入多个类，那么extend无法做到（extend只能继承一个类）
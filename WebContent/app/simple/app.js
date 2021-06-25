/**
 * 每个ExtJS 4的应用都从一个Application类的实例开始，
 * 这个实例包含应用的全局配置（例如应用的名字），
 * 这个实例也负责维护对全部模型、视图、控制器的引用的维护，还有一个launch函数，会在所有加载项加载完成之后调用。
 * 
 * 创建一个简单的Account Manager应用管理用户帐户。
 * 首先需要选择一个全局命名空间，所有ExtJS4应用都需要有一个全局命名空间，以让所有应用中的类安放到其中，
 * 这个例子中我们使用AM(Account Manager)
 * 
 * step: 1
 * 首先我们调用了Ext.application创建了一个应用实例，并设置了应用名称”AM”，
 * 这样做会自动创建一个全局变量”AM”，并自动注册命名空间”AM”到Ext.Loader，
 * 用类似的方式也设置了app作为appFolder。另外在launch函数中，创建了一个Viewport，只包含一个撑满浏览器窗口的Panel。
 */
Ext.application({
    name: 'AM',
    appFolder: 'app',

    // automatically create an instance of AM.view.Viewport
    autoCreateViewport: true,
    //requires: 'Ext.container.Viewport',

    /**
     * step: 3
     * 添加对Users控制器的引用：
     */
    controllers: [
        'Users'
    ],
    /**
     * step: 4
     * 当我们通过index.html查看应用，
     * Users控制器会被自动加载（因为在app.js的Application中增加了引用），
     * 并且Users的init方法会在launch之前调用
     */
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    title: 'Users',
                    html : 'List of users will go here'
                }
            ]
        });
    }
});

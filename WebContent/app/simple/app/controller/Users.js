/**
 * step: 2
 * Defining a Controller 定义一个控制器
 * 
 * 控制器是应用的粘合剂，它们所作的事情就是监听事件并执行动作
 */
Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',

    stores: [
        'Users@AM.store'
    ],

    models: [
        'User@AM.model'
    ],

    views: [
        'Edit@AM.view.user',
        'List@AM.view.user'
    ],

    refs: [
        {
            ref: 'usersPanel',
            selector: 'panel'
        }
    ],

    /**
     * step: 5
     * init方法是个极好的地方，可以用来设置如何和view交互，
     * 通常都使用Controller的一个方法control，
     * control方法使得监听view的事件变的容易，更新一下控制器，让它告知我们panel何时渲染：
     */
    init: function() {
        this.control({
        	/**
        	 * step: 6
        	 * 使用this.control给视图设置监听器。这个controll方法，
        	 * 使用最新的组件查询引擎（ComponentQuery）可以快速方便的找到页面上的组件
        	 * 简要一点，ComponentQuery可以允许我们使用一个类似 css 选择器的方式找到组件。
        	 */
            'viewport > userlist': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            }
        });
    },

    editUser: function(grid, record) {
        var edit = Ext.create('AM.view.user.Edit').show();

        edit.down('form').loadRecord(record);
    },

    updateUser: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
        this.getUsersStore().sync();
    }
});

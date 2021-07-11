# 一、定义一个viewport组件
## 1. 自定义的视图组件，继承 Ext.container.Viewport，且采用的布局是border
## 2. border布局的中间部分（region: 'center'）为tabpanel
## 3. border布局的左边部分（region: 'west'）里面放着的是树形面板（xtype: 'menutree', menutree继承treepanel， 下一步介绍menutree）

# 二、定义一个treepanel组件
## 1. 自定义的MenuTree菜单组件，该组件继承treepanel
## 2. store: 'MenuStore'指定了菜单面板数据集，下一步会定义 这个 MenuStore 数据集

# 三、定义一个store组件（数据集）
## 1. 定义的store组件，继承 Ext.data.TreeStore
## 2. 配置 autoLoad: true， 以便自动加载数据
## 3. 配置 proxy 加载远程数据， 请求地址为 data/data.json, 下一步就创建这个文件

# 四、定义 json 数据 用于创建 树型结构

# 五、定义 Main控制器，用于管理这些对象
## 1. 将之前步骤中的组件注册到Main控制器中
## 2. 在Main控制器中，给这些组件添加相应的监听器以及方法

# 六、创建app.js文件
## 1. 将Main控制器注册到应用程序中
## 2. autoCreateViewport: true 自动创建 定义的viewport组件

# 七、创建index.jsp
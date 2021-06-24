## 1. 定义应用
- 在 Ext JS 4 中我们介绍了一种类似MVC模式的架构。这个模式将帮助我们创建应用的最佳实践。
- 通过新的MVC包编写应用的切入点使用的是 Ext.application方法。该方法将为你创建一个Ext.app.Application 实例。
页面加载完成以后将会触发此启动方法。
- 应该用此方法来代替以前的 Ext.onReady ，在此方法中添加自动创建一个viewport和设置命名空间（namespace）.
```js
app/app.js
Ext.application({
    name: 'Pandora',
    
    通过将autoCreateViewport 设置为true，按照约定，框架将会将app/view/Viewport.js文件包含进来
    一个类名为 Pandora.view.Viewport的类应该在此文件中定义。
    autoCreateViewport: true,
    
    models: ['Station', 'Song'],    
    stores: ['Stations', 'RecentSongs', 'SearchResults'],
    controllers: ['Station', 'Song']
});
```
- autoCreateViewport: true
	- 通过将 autoCreateViewport 设置为 true，按照约定，框架将会将 app/view/Viewport.js 文件包含进来一个类名为 Panda.view.Viewport 的类应该在此文件中定义。
## 2. Viewport 类	
- 当我们构思一个页面需要分成几部分的时候，我们关注的是每一个部分。而 Viewport 所扮演的是应用中各个视图部分的粘合剂。
- Viewport 加载应用布局所需的各种视图。我们发现渐进式地来定义你的视图并且将其加入viewport中是构建你UI的最快方式。
	
## 2. 创建一个构建块
- 我们可以一次定义出多个视图
![image-创建一个模块](../image/创建一个模块.png)	

**app/view/NewStation.js**
```js
Ext.define('Pandora.view.NewStation', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.newstation',
    store: 'SearchResults',
	
	emptyText: 'Search station',
    queryMode: 'local',
    displayField: 'name',
    valueField: 'id'
});
```	

**app/view/SongControls.js**
```js
Ext.define('Pandora.view.SongControls', {
    extend: 'Ext.Container',
    alias: 'widget.songcontrols',
	
    height: 70,
    
    initComponent: function() {
        this.layout = {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        };
        
        this.items = [{
            xtype: 'container',
            defaultType: 'button',
            height: 30,
            width: 300,
            layout: {
                type: 'hbox',
                align: 'center',
                pack: 'center'
            },
            items: [{
                text: 'Vote Down',
                action: 'vote-down'
            }, {
                text: 'Vote Up',
                action: 'vote-up'
            }, {
                text: 'Pause',
                action: 'pause'
            }, {
                text: 'Skip',
                action: 'skip'
            }]
        }, {
            width: 300,
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'center'
            },
            items: [{
                xtype: 'component',
                html: '2:00'
            }, {
                xtype: 'progressbar',
                value: 0.5,
                flex: 1           
            }, {
                xtype: 'component',
                html: '4:00'
            }]
        }];
        
        this.callParent();
    }
});
```

**app/view/StationsList.js**
```js
Ext.define('Pandora.view.StationsList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.stationslist',
    
    store: 'Stations',
    title: 'Stations',
    hideHeaders: true,
    
    initComponent: function() {
        this.columns = [{
            dataIndex: 'name',
            flex: 1
        }];
        
        this.dockedItems = [{
            dock: 'bottom',
            xtype: 'toolbar',
            items: [{
                xtype: 'button',
                text: 'Settings',
                action: 'settings'
            }, {
                xtype: 'buttongroup',
                items: [{
                    text: 'By Date',
                    action: 'filter-date'
                }, {
                    text: 'ABC',
                    action: 'filter-name'
                }]
            }]
        }];
        
        this.callParent();
    }
});
```	

**app/view/RecentlyPlayedScroller.js**
```js
Ext.define('Pandora.view.RecentlyPlayedScroller', {
    extend: 'Ext.view.View',
    alias: 'widget.recentlyplayedscroller',    
    store: 'RecentSongs',
    itemTpl: '<div>{name}</div>'
});
```

**app/view/SongInfo.js**
```js
Ext.define('Pandora.view.SongInfo', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.songinfo',
    border: false,
    
    tpl: '<h1>About {artist}</h1><p>{description}</p>',
    
    initComponent: function() {
        this.dockedItems = [{
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'end'
            },
            height: 100,
            items: [{
                xtype: 'component',
                width: 200,
                itemId: 'songdescription',
                tpl: '<h2>{artist}</h2><h1>{name}</h1><h2>{album}</h2>'
            }, {
                xtype: 'button',
                text: 'menu',
                action: 'song-menu'
            }]
        }];
        
        this.callParent();
    },
    
    update: function(record) {
        var data = record ? record.data : {};
        this.down('#songdescription').update(data);
        this.callParent([data]);
    }
});
```

- 在上面的配置中，注意到配置了3个存储。
	- store: 'SearchResults',
	- store: 'Stations',
	- store: 'RecentSongs',
![image-三个存储](../image/三个存储.png)

## 3. models 和 stores
- 在服务端我们可以使用静态json文件里的模拟的数据
- 对于我们的应用，我们决定使用两个模型Station和Song.我们也需要为这两个模型创建3个存储来绑定到数据组件上。
每个存储都将从服务端来获取数据。

**data/songs.json**
```json
{
    'success': true,    
    'results': [
        {
            'name': 'Blues At Sunrise (Live)', 
            'artist': 'Stevie Ray Vaughan', 
            'album': 'Blues At Sunrise', 
            'description': 'Description for Stevie', 
            'played_date': '1',
            'station': 1
        },
        {
            'name': 'Sunshine Of Your Love (Live)', 
            'artist': 'Cream', 
            'album': 'Cream: Gold', 
            'description': 'Description for Cream', 
            'played_date': '2',
            'station': 1
        },
        {
            'name': 'Ziggy Stardust (Remastered)', 
            'artist': 'David Bowie', 
            'album': 'The Rise And Fall Of Ziggy Stardust (Remastered)', 
            'description': 'Description for David', 
            'played_date': '3',
            'station': 1
        },
        {
            'name': 'Runnin\' Down A Dream', 
            'artist': 'Tom Petty', 
            'album': 'Full Moon Fever', 
            'description': 'Description for Tom', 
            'played_date': '4',
            'station': 1
        },
        {
            'name': 'Born Under A Bad Sign', 
            'artist': 'Jimi Hendrix', 
            'album': 'Blues', 
            'description': 'Description for Jimi', 
            'played_date': '5',
            'station': 1
        },
        {
            'name': 'Paint It Black', 
            'artist': 'The Rolling Stones', 
            'album': 'Singles Collection: The London Years', 
            'description': 'Description for the Stones', 
            'played_date': '6',
            'station': 1
        },
        {
            'name': 'Jumping Jack Flash',
            'album': 'Rolling Stones Rock And Roll Cirucus',
            'artist': 'The Rolling Stones',
            'description': 'Description for the Stones',
            'played_date': 7,
            'station': 2
        },
        {
            'name': 'Mama Told Me (Not To Come)',
            'album': 'The Best Of Three Dog Night',
            'artist': 'Three Dog Night',
            'description': 'Description for the Dogs',
            'played_date': 8,
            'station': 2
        },
        {
            'name': 'Digital Love',
            'album': 'Discovery',
            'artist': 'Daft Punk',
            'description': 'Description for Daft Punk',
            'played_date': 9,
            'station': 3
        },
        {
            'name': 'Alone With You',
            'album': 'Random Album Title',
            'artist': 'Deadmau5',
            'description': 'Description for Deadmau5',
            'played_date': 10,
            'station': 3
        },
        {
            'name': 'Love Song For No One',
            'album': 'Room For Squares',
            'artist': 'John Mayer',
            'description': 'Description for John',
            'played_date': 11,
            'station': 4
        },
        {
            'name': 'Mindstate',
            'album': 'Mind State',
            'artist': 'Pete Philly & Perquisite',
            'description': 'Description for Pete',
            'played_date': 12,
            'station': 5
        },
        {
            'name': 'Thieves In The Night',
            'album': 'Mos Def & Talib Kweli Are Black Star',
            'artist': 'Black Star',
            'description': 'Description for Black Star',
            'played_date': 13,
            'station': 6
        },
        {
            'name': 'Kissed it',
            'artist': 'Macy Gray',
            'album': 'The Sellout',
            'description': 'Description for Macy',
            'played_date': 14,
            'station': 7
        }
    ]
}
```

**data/stations.json**
```json
{
    'success': true,    
    'results': [
        {'id': 1, 'played_date': 4, 'name': 'Led Zeppelin'}, 
        {'id': 2, 'played_date': 3, 'name': 'The Rolling Stones'}, 
        {'id': 3, 'played_date': 2, 'name': 'Daft Punk'}
    ]
}
```

**data/searchresults.json**
```json
{
    'success': true,    
    'results': [
        {'id': 1, 'name': 'Led Zeppelin'}, 
        {'id': 2, 'name': 'The Rolling Stones'}, 
        {'id': 3, 'name': 'Daft Punk'},
        {'id': 4, 'name': 'John Mayer'}, 
        {'id': 5, 'name': 'Pete Philly & Perquisite'}, 
        {'id': 6, 'name': 'Black Star'},
        {'id': 7, 'name': 'Macy Gray'}
    ]
}
```

## 4. Models（模型）
- 在Ext JS4 中的模型和 Ext JS 3中的Records （记录）非常像。
- 一个关键不同点是在模型中你可以定制一个代理、校验和关联。

**app/model/Song.js**
```js
Ext.define('Pandora.model.Song', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'artist', 'album', 'played_date', 'station'],
    
    proxy: {
        type: 'ajax',
        url: 'data/songs.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});
```
- 可以看到我们为模型定义了一个代理（proxy ）。
- 一般说来是一个比较好的事件，它可以在不需要存储（store）的条情况下获取和保存模型实例。

**app/model/Station.js**
```js
Ext.define('Pandora.model.Station', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name'],
    
    proxy: {
        type: 'ajax',
        url: 'data/stations.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});
```

## 5. Stores（存储）
- Ext JS 4中，多个存储可以使用同一个数据模型，甚至存储还可以从不同的资源来加载数据。
- 在我们的例子中 Station 模型将被 SearchResults 和 Stations存储使用，分别从不同的地方加载数据。
- 一个是返回搜索结果，一个是返回用户喜爱的站点的数据。为了达到这个目的，我们的存储需要重写模型中定义的Proxy。

**app/store/SearchResults.js**
```js
Ext.define('Pandora.store.SearchResults', {
    extend: 'Ext.data.Store',
    requires: 'Pandora.model.Station',
    model: 'Pandora.model.Station',
    
    //sorters: ['name'],
	//Overriding the model's default proxy
	proxy: {
	    type: 'ajax',
	    url: 'data/searchresults.json',
	    reader: {
	        type: 'json',
	        root: 'results'
	    }
	}
});
```

**app/store/Stations.js**
```js
Ext.define('Pandora.store.Stations', {
    extend: 'Ext.data.Store',
    requires: 'Pandora.model.Station',
    model: 'Pandora.model.Station'
});
```

**app/store/RecentSongs.js**
```js
Ext.define('Pandora.store.RecentSongs', {
    extend: 'Ext.data.Store',
    requires: 'Pandora.model.Song', 
    // Make sure to require your model if you are
    // not using Ext JS 4.0.5
    model: 'Pandora.model.Song'
});
```
***当前的  Ext JS版本，在一个存储中的模型属性不会自动创建一个依赖。这就是为什么我们不得不指定requires 来动态加载模型的原因。***
***同样地，根据惯例，我们经常将store的名字写成复数的形式，而把模型名写成单数形式。***

## 6. 为应用添加 stores （存储）和models（模型）

**app/app.js**
```js
Ext.application({
    ...
    models: ['Station', 'Song'],    
    stores: ['Stations', 'RecentSongs', 'SearchResults'],
    ...
});
```
- Ext JS 4 MVC 包的另外一个优势是应用将自动加载在application中配置的模型和存储。

## 7. 应用粘合剂（viewport）
- 目前为止 views, models 和 stores 都有了，我们需要将其粘合在一起。我们将一个个视图添加到viewport中。
- 这对于调试任何一个错误的视图配置非常容易。

**app/view/Viewport.js**
```js
Ext.define('Pandora.view.Viewport', {
    extend: 'Ext.container.Viewport',    
	...
});
```

- Viewport 类通常拓展自 Ext.container.Viewport 这就使得你的应用可以占据浏览器窗口的所有可用空间。
**app/view/Viewport.js**
```js
Ext.define('Pandora.view.Viewport', {
    ...
	requires: [
        'Pandora.view.NewStation',
        'Pandora.view.SongControls',
        'Pandora.view.StationsList',
        'Pandora.view.RecentlyPlayedScroller',
        'Pandora.view.SongInfo'
    ],
	...
});
```

- 我们也设置了viewport的视图依赖。这里允许我们使用之前在视图中定义好的别名作为xtype的值。
**app/view/Viewport.js**
```js
Ext.define('Pandora.view.Viewport', {
    ...
	layout: 'fit',
	...
	initComponent: function() {
        this.items = {
            xtype: 'panel',
            dockedItems: [{
                dock: 'top',
                xtype: 'toolbar',
                height: 80,
                items: [{
                    xtype: 'newstation',
                    width: 150
                }, {
                    xtype: 'songcontrols',
                    height: 70,
                    flex: 1
                }, {
                    xtype: 'component',
                    html: 'Panda<br>Internet Radio'
                }]
            }],
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                width: 250,
                xtype: 'panel',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [{
                    xtype: 'stationslist',
                    flex: 1
                }, {
                    html: 'Ad',
                    height: 250,
                    xtype: 'panel'
                }]
            }, {
                xtype: 'container',
                flex: 1,
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [{
                    xtype: 'recentlyplayedscroller',
                    height: 250
                }, {
                    xtype: 'songinfo',
                    flex: 1
                }]
            }]
        };
 
        this.callParent();
    }
	...
});
```

- 由于 Viewport拓展自Container，Container（容器）还不能有停驻元素，我们添加一个面板作为viewport的唯一元素。
由于viewport中laylout(布局)设置为fit，这个面板将和viewport的尺寸相同。
- 我们在视图中没有定义flex, width, height等属性。因此我们可以非常容易的在一个地方就可以调整应用的整体布局，增加了架构的可维护性和灵活性。

## 8. 应用逻辑

-  Ext JS 4中我们在MVC包里提供了controlleres（控制器） 类。
- 他们负责监听来之视图或者其他控制器的事件，并且实现对应事件的逻辑。

## 9. 创建 Controllers（控制器）

**app/controller/Station.js**
```js
Ext.define('Pandora.controller.Station', {
    extend: 'Ext.app.Controller',

    ...

    stores: ['Stations', 'RecentSongs'],
    
    init: function() {
        ...
    },
    
    ...
});
```

**app/controller/Song.js**
```js
Ext.define('Pandora.controller.Song', {
    extend: 'Ext.app.Controller',

	...

    stores: ['RecentSongs'],
    
    init: function() {
        ...
    },
    
    ...
});
```

- 当你的应用中包含了这些控制器，框架将自动加载这个控制器并且调用功能init方法。
- 在init方法中，你应该设置对视图和应用事件的监听器。
- 在大型的应用中，你也许希望在运行时再加载额外的控制器。你可以通过getController 方法来实现。

```js
someAction: function() {
    var controller = this.getController('AnotherController');
 
    // Remember to call the init method manually
    controller.init();
}
```

***当你在运行时想加载外部控制器，你一定要记住手动去调用init方法。***
***对我们的例子来说，如果我们想让框架加载和初始化我们的控制器，我们需要将其添加到application 的控制器数组中。***

**app/controller/app.js**
```js
Ext.application({
    name: 'Pandora',
    ...
    controllers: ['Station', 'Song']
});
```

## 10. 设置监听器

**app/controller/Song.js**
```js
Ext.define('Pandora.controller.Song', {
    ...
    
    init: function() {
        this.control({
			//使用 view/RecentlyPlayedScroller.js的alias: 'widget.recentlyplayedscroller',属性
            'recentlyplayedscroller': {
                selectionchange: this.onSongSelect
            }
        });
        ...
    },
    ...
});
```

**app/controller/Station.js**
```js
Ext.define('Pandora.controller.Station', {
    ...
    
    init: function() {
		//设置监听器
        this.control({
			//使用 StationsList.js 的 alias: 'widget.stationslist', 属性
            'stationslist': {
                selectionchange: this.onStationSelect
            },
			//使用 NewStation.js 的 alias: 'widget.newstation', 属性
            'newstation': {
                select: this.onNewStationSelect
            }
        });
    },
    ...
});
```
- 每个查询都绑定一个监听器配置。 在每个监听器配置里，我们想要监听事件名。
- 如果想要了解有哪些可用的事件可以查询API 文档搜索events（事件）部分。
	- [events（事件）](https://docs.sencha.com/extjs/4.2.1/#!/api/Ext.grid.Panel)

- 监听器配置的值是一个当事件发生时执行的方法。这个方法的范围一般是控制器自身。

**app/controller/Song.js**
```js
Ext.define('Pandora.controller.Song', {
    ...
    
    init: function() {
        this.control({
			//使用 view/RecentlyPlayedScroller.js的alias: 'widget.recentlyplayedscroller',属性
            'recentlyplayedscroller': {
                selectionchange: this.onSongSelect
            }
        });
        ...
    },
    ...
	onSongSelect: function(selModel, selection) {
        this.getSongInfo().update(selection[0]);
    }
});
```

**app/controller/Station.js**
```js
Ext.define('Pandora.controller.Station', {
    ...
    
    init: function() {
		//设置监听器
        this.control({
			//使用 StationsList.js 的 alias: 'widget.stationslist', 属性
            'stationslist': {
                selectionchange: this.onStationSelect
            },
			//使用 NewStation.js 的 alias: 'widget.newstation', 属性
            'newstation': {
                select: this.onNewStationSelect
            }
        });
    },
    ...
	onNewStationSelect: function(field, selection) {
        var selected = selection[0],
            store = this.getStationsStore(),
            list = this.getStationsList();
            
        if (selected && !store.getById(selected.get('id'))) {
            store.add(selected);
            list.getSelectionModel().select(selected);
        }
    }
});
```

- 除了RecentlyPlayedScroller视图中监听selectionchange 事件，我们也为应用事件设置了一个监听器。
- 我们通过application实例的on方法来实现。
- 每个控制器使用 this.application来访问application 实例。

****
```js
Ext.define('Pandora.controller.Song', {
    ...
    
    init: function() {
        this.control({
        	//使用 view/RecentlyPlayedScroller.js的alias: 'widget.recentlyplayedscroller',属性
            'recentlyplayedscroller': {
                selectionchange: this.onSongSelect
            }
        });
        
        this.application.on({
            stationstart: this.onStationStart,
            scope: this
        });
    },
	onStationStart: function(station) {
        var store = this.getRecentSongsStore();

        store.load({
            callback: this.onRecentSongsLoad,
            params: {
                station: station.get('id')
            },            
            scope: this
        });
    },
    ...
});
```

- Application 事件对于事件和多个控制器对应的情况下非常有用。
- 不是在每个控制器中都监听同一个视图事件，只有一个控制器监听此视图事件和触发一个应用范围的事件，其他控制器来监听。

- 这也允许控制器在不知道或者不相互依赖的情况下彼此交互。
- 我们的Song 控制器对新创建站点比较敏感，因为当创建新的站点时它需要更新song滚动条和歌曲信息。
- 我们看一下Station 控制器：

**app/controller/Station.js**
```js
Ext.define('Pandora.controller.Station', {
    ...
    init: function() {
        this.control({
        	//使用 StationsList.js 的 alias: 'widget.stationslist', 属性
            'stationslist': {
                selectionchange: this.onStationSelect
            },
            //使用 NewStation.js 的 alias: 'widget.newstation', 属性
            'newstation': {
                select: this.onNewStationSelect
            }
        });
    },
    ...
    onStationSelect: function(selModel, selection) {
        this.application.fireEvent('stationstart', selection[0]);
    },
    ...
});

```

**我们只是简单地获取selectionchange 事件提供的单个选择项然后将其作为触发stationstart 事件的一个参数。**
**stationstart 是事件名**


***在本文中，我们了解了应用的基本架构。下一节我们将了解更高级的控制器技术，通过实现我们的控制器行为和为视图添加更多的细节继续拓展我们的潘多拉应用。***

[Ext JS4 架构你的应用 第3节](https://blog.csdn.net/w605283073/article/details/51480140)



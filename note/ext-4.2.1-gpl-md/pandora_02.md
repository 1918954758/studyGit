## 1. 
- 将 Ext.application 中的 stores 和 models 数组方式自动加载 stores 和 models

**app/app.js**
```js
Ext.application({
    ...
    models: ['Station', 'Song'],    
    stores: ['Stations', 'RecentSongs', 'SearchResults'],
    ...
});
```

- 除了加载和实例化这些类之外，框架也自动为这些类（models, stores）添加了 getter 方法，（对于controllers 和 views 也是一样）

**app/controller/Station.js**
```js
...
stores: ['Stations'],
...
```

- 现在我们可以在此控制器的任意位置获取Stations store的引用（通过自动产生的名为getStationsStore的getter）

```js
views: ['StationsList'] // creates getter named 'getStationsListView' -> returns reference to StationsList class
models: ['Station']     // creates getter named 'getStationModel'     -> returns reference to Station model class
controllers: ['Song']   // creates getter named 'getSongController'   -> returns the Song controller instance
stores: ['Stations']    // creates getter named 'getStationsStore'    -> returns the Stations store instance
```

- 注意视图和模型的 getters 返回一个类的引用，而 stores 和 controllers 的 getter 返回的却是实际的实例。

## 2. 引用view 实例
- 上面学习了 stores, models, controllers 和 views 怎样配置自动创建 getter 来获取他们的引用。
- getStationsListView 的 getter 将返回 view 类的一个引用。在我们的应用流中，我们想要选择 StationsLis 的第一个项。
- 这样我们不想要引用视图。而是引用 viewport 中 StationsList 的实例。

- Ext JS 3中一个获取一个页面中存在组件实例的一个非常通用的做法是使用Ext.getCmp方法。

- 虽然这个方法仍然可以使用，但是在Ext JS 4中我们不建议这么用。

- 使用Ext.getCmp 为了引用它，需要你给每一个组件定义一个唯一的id。

- 在新的MVC包中，使用 Ext JS 4:的ComponentQuery新特性来获取视图的引用。

**app/controller/Station.js**
```js
...
refs: [{
    // A component query
    selector: 'viewport > #west-region > stationslist',
    ref: 'stationsList'
}]
...
```

- 在 refs  配置中，可以设置视图实例的引用。允许你在控制器的行为中检索和操作页面组件。可以使用 ComponentQuery 来获取组件的引用。
- 另外如果你没在控制器中设置引用。你可以继续在控制器的行为中使用Ext.getCmp 。

- 但是不建议这么用，它强迫我们管理项目中组件唯一ID,通常随着项目的增长，将带来一些问题。

- 需要记住的时 这些getters 将被独立的创建，不管页面中是否真的存在这个view.

- 如果此getter 没有匹配页面的任意的view（视图）将返回null.

- 这就也为这如果你有一个基于视图的逻辑而且在页面中还没有存在，这样你就需要对逻辑进行检查只有getter 方法有返回值时再执行。最后当你销毁一个你引用的组件后再调用getter方法将返回null,直到页面中存在另外一个符合选择器的组件出现。










































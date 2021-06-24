Ext.application({
    name: 'Pandora',
    
    //通过将autoCreateViewport 设置为true，按照约定，框架将会将app/view/Viewport.js文件包含进来
    //一个类名为 Pandora.view.Viewport的类应该在此文件中定义。
    autoCreateViewport: true,
    
    models: ['Station', 'Song'],    
    stores: ['Stations', 'RecentSongs', 'SearchResults'],
    controllers: ['Station', 'Song']
});
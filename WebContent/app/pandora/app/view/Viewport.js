Ext.define('Pandora.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'fit',
    
    requires: [
        'Pandora.view.NewStation',
        'Pandora.view.SongControls',
        'Pandora.view.StationsList',
        'Pandora.view.RecentlyPlayedScroller',
        'Pandora.view.SongInfo'
    ],
    
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
});
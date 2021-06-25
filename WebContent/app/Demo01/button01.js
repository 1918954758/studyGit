/**
 * 
 */
Ext.application(function() {
	Ext.create('Ext.Button', {
	    text    : 'Dynamic Handler Button',
	    renderTo: Ext.getBody(),
	    handler : function() {
	        // this button will spit out a different number every time you click it.
	        // so firstly we must check if that number is already set:
	        if (this.clickCount) {
	            // looks like the property is already set, so lets just add 1 to that number and alert the user
	            this.clickCount++;
	            alert('You have clicked the button "' + this.clickCount + '" times.\n\nTry clicking it again..');
	        } else {
	            // if the clickCount property is not set, we will set it and alert the user
	            this.clickCount = 1;
	            alert('You just clicked the button for the first time!\n\nTry pressing it again..');
	        }
	    }
	});
	
	Ext.create('Ext.Container', {
	    renderTo: Ext.getBody(),
	    items   : [
	        {
	            xtype: 'button',
	            text : 'My Button'
	        }
	    ]
	});
	
	Ext.create('Ext.Button', {
	    text     : 'Button',
	    renderTo : Ext.getBody(),
	    listeners: {
	        click: function() {
	            // this == the button, as we are in the local scope
	            this.setText('I was clicked!');
	        },
	        mouseover: function() {
	            // set a new config which says we moused over, if not already set
	            if (!this.mousedOver) {
	                this.mousedOver = true;
	                alert('You moused over a button!\n\nI wont do this again.');
	            }
	        }
	    }
	});
	
	Ext.create('Ext.Button', {
	    text      : 'Menu button',
	    renderTo  : Ext.getBody(),
	    arrowAlign: 'bottom',
	    menu      : [
	        {text: 'Item 1'},
	        {text: 'Item 2'},
	        {text: 'Item 3'},
	        {text: 'Item 4'}
	    ]
	});
});
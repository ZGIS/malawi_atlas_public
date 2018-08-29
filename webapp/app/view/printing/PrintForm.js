/**
 * A form where the user can enter parameters for
 * the PDF map
 */
Ext.define("MalawiAtlas.view.printing.PrintForm", {
  extend: 'Ext.form.Panel',
  xtype: 'ma-print-form',

  requires: [
    'MalawiAtlas.controller.printing.PrintFormController'
  ],

  controller: 'ma-print-form',

  width: 400,
  height: 200,
  layout: 'fit',
  plain: true,

  items: [{
    xtype: 'form',

    defaultType: 'textfield',
    fieldDefaults: {
      labelWidth: 60
    },

    layout: {
      type: 'vbox',
      align: 'stretch'
    },

    bodyPadding: 5,
    border: false,

    items: [{
      fieldLabel: 'Map Title',
      name: 'title'
    }, {
      xtype: 'textarea',
      fieldLabel: 'Comment',
      name: 'comment',
      flex: 1
    }]
  }],
  buttons: [{
      text: 'Cancel',
      handler: function() {
        this.up('window').close();
      }
    },
    {
      text: 'Print',
      handler: 'onPrintSubmit'
    }
  ]
});

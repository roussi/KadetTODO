/**
 *  Form for viewing task
 *
 * Created by Alex Soroka on 11/13/2014.
 */
Ext.define('kadetTODO.view.form.ViewTaskForm', {

    extend: 'kadetTODO.view.form.AbstractForm',

    alias: 'widget.viewTaskForm',

    items: [
        {
            title: 'VIEW_TASK_FORM_TITLE'.translate(),
            layout: 'column',
            bodyStyle: 'padding:10px',
            border: false,
            items: [
                {
                    border: false, layout: 'anchor', defaultType: 'textfield',
                    items: [
                        {
                            xtype: 'displayfield',
                            fieldLabel: "VIEW_TASK_FORM_ID".translate(),
                            name: 'id'
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: "VIEW_TASK_FORM_TASK_TITLE".translate(),
                            name: 'title'
                        },
                        {
                            xtype: 'textarea',
                            fieldLabel: "VIEW_TASK_FORM_DESCRIPTION".translate(),
                            name: 'description',
                            readOnly: true
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: "VIEW_TASK_FORM_LEVEL".translate(),
                            name: 'level',
                            readOnly: true
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: "VIEW_TASK_FORM_STATUS".translate(),
                            name: 'status',
                            readOnly: true
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: "VIEW_TASK_FORM_OPENED_DATE".translate(),
                            name: 'openedDate',
                            readOnly: true,
                            submitFormat: 'Y-m-d H:i:s',
                            format: 'Y-m-d H:i:s'
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: "VIEW_TASK_FORM_REOPENED_DATE".translate(),
                            name: 'reopenedDate',
                            readOnly: true,
                            submitFormat: 'Y-m-d H:i:s',
                            format: 'Y-m-d H:i:s'
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: "VIEW_TASK_FORM_CLOSED_DATE".translate(),
                            name: 'closedDate',
                            readOnly: true,
                            submitFormat: 'Y-m-d H:i:s',
                            format: 'Y-m-d H:i:s'
                        }
                    ]
                }
            ]
        }
    ]
});
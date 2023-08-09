sap.ui.define([
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel'
], function(JSONModel, ResourceModel) {
    'use strict';
    return {
        createJSONModel: function(path){
            // 1. Create a brand new model object
            var oModel = new JSONModel();
            // 2. We will set / load the data in the model
            //oModel.setData();
            oModel.loadData(path);
            return oModel;
        },
        createResourceModel: function(){
            //TODO: Work in progress - heavy dose of anti-biotic
        }
    };
});
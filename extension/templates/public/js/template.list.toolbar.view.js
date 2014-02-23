﻿define(["jquery", "app", "codemirror", "core/utils", "core/view.base", "underscore"],
    function($, app, CodeMirror, Utils, LayoutBase) {
        return LayoutBase.extend({
            template: "template-list-toolbar",

            initialize: function() {
                var self = this;
                this.listenTo(this, "render", function() {
                    var contextToolbar = {
                        collection: self.collection,
                        region: self.extensionsToolbarRegion,
                        view: self,
                    };
                    app.trigger("template-list-extensions-toolbar-render", contextToolbar);
                });
            },

            regions: {
                extensionsToolbarRegion: {
                    selector: "#extensionsToolbarBox",
                    regionType: Marionette.MultiRegion
                }
            },

            events: {
                "click #deleteCommand": "deleteCommand",
            },

            deleteCommand: function() {
                this.contentView.dataGrid.deleteItems();
            }
        });
    });
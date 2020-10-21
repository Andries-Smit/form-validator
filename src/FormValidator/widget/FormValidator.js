define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "dojo/_base/lang",
], function (declare, _WidgetBase, lang) {
    "use strict";
    return declare("FormValidator.widget.FormValidator", [ _WidgetBase ], {
        selectedNameAttribute: "",
        selectedSizeAttribute: "",
        selectedContentAttribute: "",

        postCreate: function () {
            this.mxform.listen("submit", lang.hitch(this, function(callback, error) {
                var uploadInput = this.domNode.parentNode.querySelector("input[type=file]");
                if (!uploadInput) {
                    console.info("No file input found");
                }
                if (uploadInput && this.selectedNameAttribute) {
                    var name = uploadInput.files && uploadInput.files.length ? uploadInput.files[0].name : "";
                    this.mxcontext.trackObject.set(this.selectedNameAttribute, name);
                    var size = uploadInput.files && uploadInput.files.length ? uploadInput.files[0].size : -1;
                    this.mxcontext.trackObject.set(this.selectedSizeAttribute, size);
                    this.mxcontext.trackObject.set(this.selectedContentAttribute, size > 0);
                }
                mx.data.callNanoflow({
                    nanoflow: this.validationNanoflow,
                    origin: this.mxform,
                    context: this.mxcontext,
                    callback: function(result) {
                        if (result) {
                            callback();
                        } else {
                            error(mendix.lib.ValidationError());
                        }
                    },
                    error: error
                });
            }));
        }
    });
});

require(["FormValidator/widget/FormValidator"]);

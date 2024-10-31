jQuery(document).ready((function(e){window.onload=function(){for(var e=document.getElementsByTagName("TEXTAREA"),t=0,o=e.length;t<o;t++)if(/^[0-9]+$/.test(e[t].getAttribute("maxlength"))){var c=function(){var e=parseInt(this.getAttribute("maxlength"),10);if(this.value.length>e)return this.value=this.value.substr(0,e),!1};e[t].onkeyup=c,e[t].onblur=c}},setInterval((()=>{e(".convert-popup-box").css("background-color",e("#rock_convert_popup_color").val()),e(".convert-popup-close").css("color",e("#rock_convert_popup_button_close_color").val()),e(".convert-popup-btn").css("background-color",e("#rock_convert_popup_button_color").val()),e(".convert-popup-btn").css("color",e("#rock_convert_popup_button_text_color").val()),e(".popup-preview-title").css("color",e("#rock_convert_popup_title_color").val()),e(".popup-preview-descricao").css("color",e("#rock_convert_popup_description_color").val()),e(".popup-preview-descricao-ni").css("color",e("#rock_convert_popup_description_color").val());let t=document.getElementById("rock_convert_popup_image_activate");null!=t&&t.checked?(e(".convert-popup").css("display","block"),e(".convert-popup-ni").css("display","none")):(e(".convert-popup").css("display","none"),e(".convert-popup-ni").css("display","block"))}),100);var t=e("#rock_convert_popup_title").val();e(".popup-preview-title").text(t),t=e("#rock_convert_popup_descricao").val(),e(".popup-preview-descricao").text(t),t=e("#rock_convert_popup_descricao-ni").val(),e(".popup-preview-descricao-ni").text(t),e("#rock_convert_popup_title").on("input",(function(){e(".popup-preview-title").text(e(this).val())})),e("#rock_convert_popup_descricao").on("input",(function(){e(".popup-preview-descricao").text(e(this).val())})),e("#rock_convert_popup_descricao-ni").on("input",(function(){e(".popup-preview-descricao-ni").text(e(this).val())})),jQuery("input#convert_popup_media").click((function(t){var o;t.preventDefault(),o&&o.open(),(o=wp.media({title:"Select Media",multiple:!1,library:{type:"image"}})).on("close",(function(){var t=o.state().get("selection"),c=o.state().get("selection").first().toJSON(),n=new Array,r=0;t.each((function(e){n[r]=e.id,r++}));var i=n.join(",");jQuery("input#rock_convert_popup_image").val(i),e("#rock_convert_popup_image_preview").attr("src",c.url).css("width","300px"),e("#rock_convert_popup_image_preview").css("height","400px"),e(".popup-content").css("display","none"),e(".popup-content-preview").css("display","flex"),e(".popup-content-preview").css("flex-direction","column"),e(".popup-content-select-image-hide").css("display","none")})),o.on("open",(function(){var e=o.state().get("selection");jQuery("input#rock_convert_popup_image").val().split(",").forEach((function(t){var o=wp.media.attachment(t);o.fetch(),e.add(o?[o]:[])}))})),o.open()}))})),function(e){let t=[],o=e(".rock-convert-upload-button"),c=e(".rock-convert-upload-button-remove");o.on("click",(function(o){o.preventDefault();let c=e(this),n=c.attr("id");t[n]||(t[n]=wp.media.frames.file_frame=wp.media({title:c.data("uploader_title"),button:{text:c.data("uploader_button_text")},multiple:!1}),t[n].on("select",(function(){let o=t[n].state().get("selection").first().toJSON();e("#"+n+"-value").val(o.id);let r='<img src="'+o.url+'" style="max-width:100%;" />';c.next("input").next(".rock-convert-image-preview").html(r)}))),t[n].open()})),c.on("click",(function(t){t.preventDefault();let o=e(this),c=o.prev("input").attr("id");o.next(".rock-convert-image-preview").html(""),e("#"+c+"-value").val(0)}))}(jQuery),function(e){"use strict";function t(t){t.find(".color-picker").wpColorPicker({change:function(t,o){e(t.target).val(o.color.toString()),e(t.target).trigger("change")},clear:function(t,o){e(t.target).trigger("change")}})}e(document).on("click",".rock-convert-exclude-pages-add",(function(){e(".rock-convert-exclude-pages-link").first().clone().appendTo(".rock-convert-exclude-pages").children("input[type=text]").val("").focus()})),e(document).on("click",".rock-convert-exclude-pages-remove",(function(){e(this).parent().remove()})),e(document).on("change",'input[name="rock_convert_visibility"]',(function(){"exclude"==e('input[name="rock_convert_visibility"]:checked').val()?e(".rock-convert-exclude-control").show():e(".rock-convert-exclude-control").hide()})),e(document).on("widget-added widget-updated",(function(e,o){t(o)})),e(document).ready((function(){e("#widgets-right .widget:has(.color-picker)").each((function(){t(e(this))})),function(e){e((function(){e(".color-picker-popup").wpColorPicker()}))}(jQuery),jQuery(".rconvert_announcement_bar_page .color-picker").each((function(){jQuery(this).wpColorPicker({change:function(e,t){var o=e.target.id,c=t.color.toString(),n="rconvert_announcement_text_color"===o||"rconvert_announcement_btn_text_color"===o?{color:c}:{backgroundColor:c};jQuery("."+o).css(n)}})}))})),e(document).ready((function(){let t=e(".widefat").attr("data-ajaxurl"),o=!1;e(".rock-lead-delete-action").each((function(){e(this).on("click","a",(function(c){c.preventDefault();let n=e(this).attr("data-entry"),r=e(this).attr("data-nonce"),i=e(this).attr("data-email");o||(o=!0,e.ajax({url:t,type:"POST",data:{action:"confirm_delete_lead",security:r,email:i,entry:n},beforeSend:function(){e("body.wp-admin").addClass("rock-ajax-request-load")}}).success((function(t){e("body").append(t)})).complete((function(){e("body.wp-admin").removeClass("rock-ajax-request-load"),o=!1;let c=e(".delete-actions");c.on("click",".cancel-action",(function(t){t.preventDefault(),e(".rock-confirm-delete-lead ~ span").remove(),e(".rock-confirm-delete-lead").remove()})),c.on("click",".confirm-action",(function(c){c.preventDefault();let n=e(this).attr("data-entry");o||(o=!0,e.ajax({url:t,type:"POST",data:{action:"delete_lead",security:r,entry:n},beforeSend:function(){e("body.wp-admin").addClass("rock-ajax-request-load")}}).complete((function(){e("body.wp-admin").removeClass("rock-ajax-request-load"),e("#entry-"+n).remove(),e(".rock-confirm-delete-lead ~ span").remove(),e(".rock-confirm-delete-lead").remove(),o=!1})))}))})))}))}))})),e(document).ready((function(){let t=e("#rock_convert_enable_custom_field"),o=e("#rock-convert-label-container"),c=e("#rock_convert_custom_field_label");t.is(":checked")?o.removeClass("d-none"):o.addClass("d-none").removeAttr("style"),e("body").on("click",t,(function(){e("#rock_convert_enable_custom_field").is(":checked")?(o.removeClass("d-none").css("display","block"),c.attr("required","required")):(o.addClass("d-none").removeAttr("style"),c.removeAttr("required").val(""))}))}))}(jQuery);
//# sourceMappingURL=admin.js.map
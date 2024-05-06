/*
Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/

CKEDITOR.skin.name = "kama";
CKEDITOR.skin.ua_editor = "ie,iequirks,ie7,ie8";
CKEDITOR.skin.ua_dialog = "ie,iequirks,ie7,ie8";

CKEDITOR.skin.chameleon = function (d, c) {
    var b,
        a = "." + d.id;

    if (c === "editor") {
        b = a + " .cke_inner," + a + " .cke_dialog_tab{" +
            "background-color: $color;" +
            "linear-gradient(to bottom, #fff -15px, $color 40px);" +
            "}" +
            a + " .cke_toolgroup{" +
            "linear-gradient(to bottom, #fff, $color 100px);" +
            "}" +
            a + " .cke_combo_button{" +
            "linear-gradient(to top, #fff, $color 100px);" +
            "}" +
            a + " .cke_dialog_contents," + a + " .cke_dialog_footer{" +
            "background-color: $color !important;" +
            "}" +
            a + " .cke_dialog_tab:hover," + a + " .cke_dialog_tab:active," + a + " .cke_dialog_tab:focus," + a + " .cke_dialog_tab_selected{" +
            "background-color: $color;" +
            "background-image: none;" +
            "}";
    } else if (c === "panel") {
        b =
            ".cke_menubutton_icon{" +
            "background-color: $color !important;" +
            "border-color: $color !important;" +
            "}." +
            a + ":hover .cke_menubutton_icon," + a + ":focus .cke_menubutton_icon," + a + ":active .cke_menubutton_icon{" +
            "background-color: $color !important;" +
            "border-color: $color !important;" +
            "}." +
            a + ":hover .cke_menubutton_label," + a + ":focus .cke_menubutton_label," + a + ":active .cke_menubutton_label{" +
            "background-color: $color !important;" +
            "}." +
            a + "_disabled:hover .cke_menubutton_label," + a + "_disabled:focus .cke_menubutton_label," + a + "_disabled:active .cke_menubutton_label{" +
            "background-color: transparent !important;" +
            "}." +
            a + "_disabled:hover .cke_menubutton_icon," + a + "_disabled:focus .cke_menubutton_icon," + a + "_disabled:active .cke_menubutton_icon{" +
            "background-color: $color !important;" +
            "border-color: $color !important;" +
            "}." +
            a + "_disabled .cke_menubutton_icon{" +
            "background-color: $color !important;" +
            "border-color: $color !important;" +
            "}." +
            a + "_menuseparator{" +
            "background-color: $color !important;" +
            "}." +
            a + ":hover," + a + ":focus," + a + ":active{" +
            "background-color: $color !important;" +
            "}";
    }

    return b;
};

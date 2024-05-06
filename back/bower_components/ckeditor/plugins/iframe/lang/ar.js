CKEDITOR.plugins.add('iframe', {
    lang: 'ar',
    init: function(editor) {
        editor.lang.iframe = {
            border: 'إظهار حدود الإطار',
            noUrl: 'فضلا أكتب رابط ال\-iframe',
            scrolling: 'تفعيل أشرطة الإنتقال',
            title: 'خصائص iframe',
            toolbar: 'iframe'
        };
    }
});

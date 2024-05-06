CKEDITOR.plugins.add('iframe', {
    lang: 'ko',
    icons: 'iframe',
    init: function(editor) {
        editor.ui.addButton('Iframe', {
            label: '아이프레임',
            command: 'iframe'
        });

        editor.addCommand('iframe', new CKEDITOR.dialogCommand('iframeDialog'));

        CKEDITOR.dialog.add('iframeDialog', function(editor) {
            return {
                title: '아이프레임 속성',
                minWidth: 400,
                minHeight: 200,
                contents: [{
                    id: 'tab1',
                    label: '아이프레임 설정',
                    elements: [{
                            type: 'text',
                            id: 'iframeUrl',
                            label: '아이프레임 URL',
                            validate: CKEDITOR.dialog.validate.notEmpty('아이프레임 URL을 입력해주세요.'),
                            setup: function(widget) {
                                this.setValue(widget.data.url);
                            },
                            commit: function(widget) {
                                widget.setData('url', this.getValue());
                            }
                        },
                        {
                            type: 'checkbox',
                            id: 'iframeBorder',
                            label: '프레임 테두리 표시',
                            setup: function(widget) {
                                this.setValue(widget.data.border);
                            },
                            commit: function(widget) {
                                widget.setData('border', this.getValue());
                            }
                        },
                        {
                            type: 'checkbox',
                            id: 'iframeScrolling',
                            label: '스크롤바 사용',
                            setup: function(widget) {
                                this.setValue(widget.data.scrolling);
                            },
                            commit: function(widget) {
                                widget.setData('scrolling', this.getValue());
                            }
                        }
                    ]
                }]
            };
        });
    }
});

CKEDITOR.plugins.setLang('iframe', 'ko', {
    border: '프레임 테두리 표시',
    noUrl: '아이프레임 URL을 입력해주세요.',
    scrolling: '스크롤바 사용',
    title: '아이프레임 속성'
});

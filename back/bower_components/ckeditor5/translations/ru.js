(function (d) {
    const l = d.ru = d.ru || {};
    l.dictionary = Object.assign(
        l.dictionary || {},
        {
            "%0 of %1": "%0 из %1",
            "Block quote": "Цитата",
            Bold: "Жирный",
            "Bulleted List": "Маркированный список",
            Cancel: "Отмена",
            "Cannot upload file:": "Невозможно загрузить файл",
            "Centered image": "Выравнивание по центру",
            "Change image text alternative": "Редактировать альтернативный текст",
            "Choose heading": "Выбор стиля",
            Column: "Столбец",
            // ... more translations ...
        }
    );

    l.getPluralForm = function (n) {
        if (n % 10 == 1 && n % 100 != 11) {
            return 0;
        } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14)) {
            return 1;
        } else if (n % 10 == 0 || (n % 10 >= 5 && n % 10 <= 9) || (n % 100 >= 11 && n % 100 <= 14)) {
            return 2;
        } else {
            return 3;
        }
    };
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));

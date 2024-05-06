/*
 Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/

const a11yHelpTT = {
  title: "Accessibility Instructions",
  contents: "Help Contents. To close this dialog press ESC.",
  legend: [
    {
      name: "Editor",
      items: [
        {
          name: "Editor Toolbar",
          legend: "Press ${toolbarFocus} to navigate to the toolbar. Move to the next and previous toolbar group with TAB and SHIFT+TAB. Move to the next and previous toolbar button with RIGHT ARROW or LEFT ARROW. Press SPACE or ENTER to activate the toolbar button."
        },
        {
          name: "Editor Dialog",
          legend: "Inside a dialog, press TAB to navigate to the next dialog element, press SHIFT+TAB to move to the previous dialog element, press ENTER to submit the dialog, press ESC to cancel the dialog. When a dialog has multiple tabs, the tab list can be reached either with ALT+F10 or with TAB as part of the dialog tabbing order. With tab list focused, move to the next and previous tab with RIGHT and LEFT ARROW, respectively."
        },
        {
          name: "Editor Context Menu",
          legend: "Press ${contextMenu} or APPLICATION KEY to open context-menu. Then move to next menu option with TAB or DOWN ARROW. Move to previous option with SHIFT+TAB or UP ARROW. Press SPACE or ENTER to select the menu option. Open sub-menu of current option with SPACE or ENTER or RIGHT ARROW. Go back to parent menu item with ESC or LEFT ARROW. Close context menu with ESC."
        },
        {
          name: "Editor List Box",
          legend: "Inside a list-box, move to next list item with TAB OR DOWN ARROW. Move to previous list item with SHIFT+TAB or UP ARROW. Press SPACE or ENTER to select the list option. Press ESC to close the list-box."
        },
        {
          name: "Editor Element Path Bar",
          legend: "Press ${elementsPathFocus} to navigate to the elements path bar. Move to next element button with TAB or RIGHT ARROW. Move to previous button with SHIFT+TAB or LEFT ARROW. Press SPACE or ENTER to select the element in editor."
        }
      ]
    },
    {
      name: "Commands",
      items: [
        { name: "Undo", legend: "${undo}" },
        { name: "Redo", legend: "${redo}" },
        { name: "Bold", legend: "${bold}" },
        { name: "Italic", legend: "${italic}" },
        { name: "Underline", legend: "${underline}" },
        { name: "Link", legend: "${link}" },
        { name: "Toolbar Collapse command", legend: "${toolbarCollapse}" },
        {
          name: "Access Previous Focus Space command",
          legend:
            "Press ${accessPreviousSpace} to access the closest unreachable focus space before the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces."
        },
        {
          name: "Access Next Focus Space command",
          legend:
            "Press ${accessNextSpace} to access the closest unreachable focus space after the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces."
        },
        { name: "Accessibility Help", legend: "${a11yHelp}" },
        {
          name: "Paste as plain text",
          legend: "Press ${pastetext}",
          legendEdge: "Press ${pastetext}, followed by ${paste}"
        }
      ]
    },
    {
      name: "Keyboard",
      items: [
        { name: "Tab", legend: "Tab" },
        { name: "Pause", legend: "Тыныш" },
        { name: "Caps Lock", legend: "Caps Lock" },
        { name: "Escape", legend: "Escape" },
        { name: "Page Up", legend: "Page Up" },
        { name: "Page Down", legend: "Page Down" },
        { name: "Left Arrow", legend: "Сул якка ук" },
        { name: "Up Arrow", legend: "Өскә таба ук" },
        { name: "Right Arrow", legend: "Уң якка ук" },
        { name: "Down Arrow", legend: "Аска таба ук" },
        { name: "Insert", legend: "Өстәү" },
        { name: "Left Windows Key", legend: "Сул Windows төймəсе" },
        { name: "Right Windows Key", legend: "Уң Windows төймəсе" },
        { name: "Select Key", legend: "Select төймəсе" },
        { name: "Numpad 0", legend: "Numpad 0" },
        { name: "Numpad 1", legend: "Numpad 1" },
        { name: "Numpad 2", legend: "Numpad 2" },
        { name: "Numpad 3", legend: "Numpad 3" },
        { name: "Numpad 4", legend: "Numpad 4" },
        { name: "Numpad 5", legend: "Numpad 5" },
        { name: "Numpad 6", legend: "Numpad 6" },
        { name: "Numpad 7", legend: "Numpad 7" },
        { name: "Numpad 8", legend: "Numpad 8" },
        { name: "Numpad 9", legend: "Numpad 9" },
        { name: "Multiply", legend: "Тапкырлау" },
        { name: "Add", legend: "Кушу" },
        { name: "Subtract", legend: "Алу" },
        { name: "Decimal Point", legend: "Унарлы нокта" },
        { name: "Divide", legend: "Бүлү" },
        { name: "F1", legend: "F1" },
        { name: "F2", legend: "F2" },
        { name: "F3", legend: "F3" },
        { name: "F4", legend: "F4" },
        { name: "F5", legend: "F5" },
        { name: "F6", legend: "F6" },
        { name: "F7", legend: "F7" },
        { name: "F8", legend: "F8" },
        { name: "F9", legend: "F9" },
        { name: "F10", legend: "F10" },
        { name: "F11", legend: "F11" },
        { name: "F12", legend: "F12" },
        { name: "Num Lock", legend: "Num Lock" },
        { name: "Scroll Lock", legend: "Scroll Lock" },
        { name: "Semicolon", legend: "Нокталы өтер" },
        { name: "Equal Sign", legend: "Тигезлек билгесе" },
        { name: "Comma", legend: "Өтер" },
        { name: "Dash", legend: "Сызык" },
        { name: "Period", legend: "Дәрәҗә" },
        { name: "Forward Slash", legend: "Кыек сызык" },
        { name: "Grave Accent", legend: "Гравис" },
        { name: "Open Bracket", legend: "Җәя ачу" },
        { name: "Backslash", legend: "Кире кыек сызык" },
        { name: "Close Bracket", legend: "Җәя ябу" },
        { name: "Single Quote", legend: "Бер иңле куштырнаклар" }
      ]
    }
  ]
};

CKEDITOR.plugins.setLang("a11yhelp", "tt", a11yHelpTT);

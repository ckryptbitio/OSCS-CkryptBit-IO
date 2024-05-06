/*
 Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/

const a11yHelp = {
  title: "Keyboard Shortcuts",
  contents: "Help. To close this window, press ESC.",
  legend: [
    {
      name: "Main",
      items: [
        {
          name: "Toolbar",
          legend:
            "Press ${toolbarFocus} to move to the toolbar. To navigate between toolbar groups, use TAB and SHIFT+TAB. To navigate between toolbar buttons, use the RIGHT and LEFT ARROW keys. Press SPACE or ENTER to activate a toolbar button."
        },
        {
          name: "Dialogs",
          legend:
            "Within a dialog, press TAB to move to the next element, press SHIFT+TAB to move to the previous element, press ENTER to submit the dialog, press ESC to cancel the dialog. When a dialog has multiple tabs, you can access the tab panel as part of the dialog by pressing or holding ALT+F10 or TAB, and the dialog elements will be navigated in tab order. When the tab panel is active, you can navigate to the previous or next tab by pressing the LEFT or RIGHT ARROW keys, respectively."
        },
        {
          name: "Context Menu",
          legend:
            "Press ${contextMenu} or the APPLICATION key to open the context menu. Navigate to the next menu item using TAB or the DOWN ARROW key. Navigate to the previous menu item using SHIFT+TAB or the UP ARROW key. Press SPACE or ENTER to activate a menu item. Open a submenu of the current menu item by pressing SPACE or ENTER or the RIGHT ARROW key. Return to the parent menu item by pressing ESC or the LEFT ARROW key. Close the context menu by pressing ESC."
        },
        {
          name: "List Box",
          legend:
            "Within a list box, navigate to the next item using TAB or the DOWN ARROW key. Navigate to the previous item using SHIFT+TAB or the UP ARROW key. Press SPACE or ENTER to activate an option. Press ESC to close the list box."
        },
        {
          name: "Elements Path",
          legend:
            "Press ${elementsPathFocus} to move to the elements path bar. Navigate to the next button using TAB or the RIGHT ARROW key. Navigate to the previous button using SHIFT+TAB or the LEFT ARROW key. Press SPACE or ENTER to select an element in the editor."
        }
      ]
    },
    {
      name: "Commands",
      items: [
        { name: "Undo", legend: "Press ${undo}" },
        { name: "Redo", legend: "Press ${redo}" },
        { name: "Bold", legend: "Press ${bold}" },
        { name: "Italic", legend: "Press ${italic}" },
        { name: "Underline", legend: "Press ${underline}" },
        { name: "Link", legend: "Press ${link}" },
        { name: "Collapse Toolbar", legend: "Press ${toolbarCollapse}" },
        {
          name: "Access Previous Focus Space",
          legend:
            "Press ${accessPreviousSpace} to move to the closest unreachable focus space before the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces."
        },
        {
          name: "Access Next Focus Space",
          legend:
            "Press ${accessNextSpace} to move to the closest unreachable focus space after the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces."
        },
        { name: "Help", legend: "Press ${a11yHelp}" },
        {
          name: "Paste as Text",
          legend: "Press ${pastetext}",
          legendEdge: "Press ${pastetext} and then ${paste}"
        }
      ]
    },
    {
      name: "Keyboard Navigation",
      items: [
        { name: "Tab", legend: "Tab" },
        { name: "Pause", legend: "Pause" },
        { name: "Caps Lock", legend: "Caps Lock" },
        { name: "Esc", legend: "Esc" },
        { name: "Page Up", legend: "Page Up" },
        { name: "Page Down", legend: "Page Down" },
        { name: "Left Arrow", legend: "Left Arrow" },
        { name: "Up Arrow", legend: "Up Arrow" },
        { name: "Right Arrow", legend: "Right Arrow" },
        { name: "Down Arrow", legend: "Down Arrow" },
        { name: "Insert", legend: "Insert" },
        { name: "Left Windows Key", legend: "Left Windows Key" },
        { name: "Right Windows Key", legend: "Right Windows Key" },
        { name: "Select", legend: "Select" },
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
        { name: "Multiply", legend: "Multiply" },
        { name: "Add", legend: "Add" },
        { name: "Subtract", legend: "Subtract" },
        { name: "Decimal Point", legend: "Decimal Point" },
        { name: "Divide", legend: "Divide" },
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
        { name: "Semicolon", legend: "Semicolon" },
        { name: "Equal Sign", legend: "Equal Sign" },
        { name: "Comma", legend: "Comma" },
        { name: "Dash", legend: "Dash" },
        { name: "Period", legend: "Period" },
        { name: "Forward Slash", legend: "Forward Slash" },
        { name: "Grave Accent", legend: "Grave Accent" },
        { name: "Open Bracket", legend: "Open Bracket" },
        { name: "Back Slash", legend: "Back Slash" },
        { name: "Close Bracket", legend: "Close Bracket" },
        { name: "Single Quote", legend: "Single Quote" }
      ]
    }
  ]
};

CKEDITOR.plugins.setLang("a11yhelp", "ru", a11yHelp);

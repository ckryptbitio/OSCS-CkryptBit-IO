/*
 Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/

const a11yHelp Ko = {
  title: "Accessibility Help",
  contents: "Help. To close this window, press ESC.",
  legend: [
    {
      name: "General",
      items: [
        {
          name: "Editor Toolbar",
          legend:
            "Navigate the toolbar by pressing ${toolbarFocus}. To move to the previous/next toolbar group, press TAB or SHIFT+TAB. To move to the previous/next toolbar button, press the left or right arrow keys. To activate a toolbar button, press SPACE or ENTER."
        },
        {
          name: "Editor Dialogs",
          legend:
            "Press TAB to move to the next dialog and SHIFT+TAB to move to the previous dialog. To submit the dialog, press ENTER, and to cancel it, press ESC. When a dialog has multiple tabs, press ALT+F10 or TAB to navigate to the tab list. Use the right and left arrow keys to move to the next and previous tabs. Press SPACE or ENTER to select a tab."
        },
        {
          name: "Editor Context Menu",
          legend:
            "Press ${contextMenu} or the APPLICATION KEY to open the context menu. Press TAB or the down arrow key to move to the next menu option, and SHIFT+TAB or the up arrow key to move to the previous option. Press SPACE or ENTER to select a menu option. Press SPACE, ENTER, or the right arrow key to open a sub-menu. Press ESC or the left arrow key to close the parent menu item. Press ESC to close the context menu."
        },
        {
          name: "Editor List Boxes",
          legend:
            "In a list box, press TAB or the down arrow key to move to the next item, and SHIFT+TAB or the up arrow key to move to the previous item. Press SPACE or ENTER to select an option. Press ESC to close the list box."
        },
        {
          name: "Editor Element Path Bar",
          legend:
            "Press ${elementsPathFocus} to navigate the element path bar. Press TAB or the right arrow key to move to the next element, and SHIFT+TAB or the left arrow key to move to the previous element. Press SPACE or ENTER to select the corresponding item in the editor."
        }
      ]
    },
    {
      name: "Commands",
      items: [
        { name: "Undo Command", legend: "Press ${undo}" },
        { name: "Redo Command", legend: "Press ${redo}" },
        { name: "Bold Command", legend: "Press ${bold}" },
        { name: "Italic Command", legend: "Press ${italic}" },
        { name: "Underline Command", legend: "Press ${underline}" },
        { name: "Link Command", legend: "Press ${link}" },
        { name: "Collapse Toolbar Command", legend: "Press ${toolbarCollapse}" },
        {
          name: "Access Previous Space Command",
          legend:
            "Press ^${accessPreviousSpace} to access the closest preceding focusable space. For example, if there are two adjacent HR elements, you can reach the previous focusable space by repeating the key combination."
        },
        {
          name: "Access Next Space Command",
          legend:
            "Press ^${accessNextSpace} to access the closest following focusable space. For example, if there are two adjacent HR elements, you can reach the next focusable space by repeating the key combination."
        },
        { name: "Accessibility Help Command", legend: "Press ${a11yHelp}" },
        {
          name: "Paste as Plain Text Command",
          legend: "Press ${pastetext}",
          legendEdge: "Press ${pastetext}, followed by ${paste}"
        }
      ]
    },
    {
      name: "Keyboard Shortcuts",
      items: [
        { name: "Tab Key", legend: "Tab" },
        { name: "Pause Key", legend: "Pause" },
        { name: "Caps Lock Key", legend: "Caps Lock" },
        { name: "Escape Key", legend: "Escape" },
        { name: "Page Up Key", legend: "Page Up" },
        { name: "Page Down Key", legend: "Page Down" },
        { name: "Left Arrow Key", legend: "Left Arrow" },
        { name: "Up Arrow Key", legend: "Up Arrow" },
        { name: "Right Arrow Key", legend: "Right Arrow" },
        { name: "Down Arrow Key", legend: "Down Arrow" },
        { name: "Insert Key", legend: "Insert" },
        { name: "Left Windows Key", legend: "Left Windows" },
        { name: "Right Windows Key", legend: "Right Windows" },
        { name: "Select Key", legend: "Select" },
        { name: "Numpad 0 Key", legend: "Numpad 0" },
        { name: "Numpad 1 Key", legend: "Numpad 1" },
        { name: "Numpad 2 Key", legend: "Numpad 2" },
        { name: "Numpad 3 Key", legend: "Numpad 3" },
        { name: "Numpad 4 Key", legend: "Numpad 4" },
        { name: "Numpad 5 Key", legend: "Numpad 5" },
        { name: "Numpad 6 Key", legend: "Numpad 6" },
        { name: "Numpad 7 Key", legend: "Numpad 7" },
        { name: "Numpad 8 Key", legend: "Numpad 8" },
        { name: "Numpad 9 Key", legend: "Numpad 9" },
        { name: "Multiply Key", legend: "*" },
        { name: "Add Key", legend: "+" },
        { name: "Subtract Key", legend: "-" },
        { name: "Decimal Point Key", legend: "." },
        { name: "Divide Key", legend: "/" },
        { name: "F1 Key", legend: "F1" },
        { name: "F2 Key", legend: "F2" },
        { name: "F3 Key", legend: "F3" },
        { name: "F4 Key", legend: "F4" },
        { name: "F5 Key", legend: "F5" },
        { name: "F6 Key", legend: "F6" },
        { name: "F7 Key", legend: "F7" },
        { name: "F8 Key", legend: "F8" },
        { name: "F9 Key", legend: "F9" },
        { name: "F10 Key", legend: "F10" },
        { name: "F11 Key", legend: "F11" },
        { name: "F12 Key", legend: "F12" },
        { name: "Num Lock Key", legend: "Num Lock" },
        { name: "Scroll Lock Key", legend: "Scroll Lock" },
        { name: "Semicolon Key", legend: ";" },
        { name: "Equals Sign Key", legend: "=" },
        { name: "Comma Key", legend: "," },
        { name: "Dash Key", legend: "-" },
        { name: "Period Key", legend: "." },
        { name: "Forward Slash Key", legend: "/" },
        { name: "Grave Accent Key", legend: "`" },
        { name: "Open Bracket Key", legend: "[" },
        { name: "Backslash Key", legend: "\\" },
        { name: "Close Bracket Key", legend: "]" },
        { name: "Single Quote Key", legend: "'" }
      ]
    }
  ]
};

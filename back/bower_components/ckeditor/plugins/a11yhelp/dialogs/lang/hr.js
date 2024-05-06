/*
 Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/

const a11yHelpTranslations = {
  title: "Upute dostupnosti",
  contents: "Sadržaj pomoći. Za zatvaranje pritisnite ESC.",
  legend: [
    {
      name: "Općenito",
      items: [
        {
          name: "Alatna traka",
          legend: "Pritisni ${toolbarFocus} za navigaciju do alatne trake. Pomicanje do prethodne ili sljedeće alatne grupe vrši se pomoću SHIFT+TAB i TAB. Pomicanje do prethodnog ili sljedećeg gumba u alatnoj traci vrši se pomoću lijeve i desne strelice kursora. Pritisnite SPACE ili ENTER za aktivaciju alatne trake."
        },
        {
          name: "Dijalog",
          legend: "Unutar dijaloga, pritisnite TAB kako bi navigirali do sljedećeg elementa dijaloga, pritisnite SHIFT+TAB kako bi se pomaknuli do prethodnog elementa, pritisnite ENTER kako bi poslali dijalog, pritisnite ESC za gašenje dijaloga. Kada dijalog ima više kartica, listi kartica se može pristupiti pomoću ALT+F10 ili sa TAB. Kada je fokusirana lista kartica, pomaknite se naprijed ili nazad pomoću strelica LIJEVO ili DESNO."
        },
        {
          name: "Kontekstni izbornik",
          legend: "Pritisnite ${contextMenu} ili APPLICATION tipku za otvaranje kontekstnog izbornika. Pomicanje se vrši TAB ili strelicom kursora prema dolje ili SHIFT+TAB ili strelica kursora prema gore. SPACE ili ENTER odabiru opciju izbornika. Otvorite podizbornik trenutne opcije sa  SPACE, ENTER ili desna strelica kursora. Povratak na prethodni izbornik vrši se sa ESC ili lijevom strelicom kursora. Zatvaranje se vrši pritiskom na tipku ESC."
        },
        {
          name: "Lista",
          legend: "Unutar list-boxa, pomicanje na sljedeću stavku vrši se sa TAB ili strelica kursora prema dolje. Na prethodnu sa SHIFT+TAB ili strelica prema gore. Pritiskom na SPACE ili ENTER odabire se stavka ili ESC za zatvaranje."
        },
        {
          name: "Traka putanje elemenata",
          legend: "Pritisnite ${elementsPathFocus} za navigaciju po putanji elemenata. Pritisnite TAB ili desnu strelicu kursora za pomicanje na sljedeći element ili SHIFT+TAB ili lijeva strelica kursora za pomicanje na prethodni element. Pritiskom na SPACE ili ENTER vrši se odabir elementa."
        }
      ]
    },
    {
      name: "Naredbe",
      items: [
        { name: "Vrati naredbu", legend: "Pritisni ${undo}" },
        { name: "Ponovi naredbu", legend: "Pritisni ${redo}" },
        { name: "Bold naredba", legend: "Pritisni ${bold}" },
        { name: "Italic naredba", legend: "Pritisni ${italic}" },
        { name: "Underline naredba", legend: "Pritisni ${underline}" },
        { name: "Link naredba", legend: "Pritisni ${link}" },
        { name: "Smanji alatnu traku naredba", legend: "Pritisni ${toolbarCollapse}" },
        {
          name: "Naredba za pristupi prethodnom prostoru fokusa",
          legend:
            "Pritisni ${accessPreviousSpace} za pristup najbližem nedostupnom razmaku prije kursora, npr.: dva spojena HR elementa. Ponovnim pritiskom dohvatiti će se sljedeći nedostupni razmak."
        },
        {
          name: "Naredba za pristup sljedećem prostoru fokusa",
          legend:
            "Pritisni ${accessNextSpace} za pristup najbližem nedostupnom razmaku nakon kursora, npr.: dva spojena HR elementa. Ponovnim pritiskom dohvatiti će se sljedeći nedostupni razmak."
        },
        { name: "Pomoć za dostupnost", legend: "Pritisni ${a11yHelp}" },
        {
          name: "Zalijepi kao čisti tekst",
          legend: "Pritisnite ${pastetext}",
          legendEdge: "Pritisnite ${pastetext}, zatim ${paste}"
        }
      ]
    },
    {
      name: "Tipkovnica",
      items: [
        { name: "Tab", legend: "TAB" },
        { name: "Pause", legend: "PAUSE" },
        { name: "Caps lock", legend: "CAPS LOCK" },
        { name: "Escape", legend: "ESCAPE" },
        { name: "Page up", legend: "PAGE UP" },
        { name: "Page down", legend: "PAGE DOWN" },
        { name: "Left arrow", legend: "LEFT ARROW" },
        { name: "Up arrow", legend: "UP ARROW" },
        { name: "Right arrow", legend: "RIGHT ARROW" },
        { name: "Down arrow", legend: "DOWN ARROW" },
        { name: "Insert", legend: "INSERT" },
        { name: "Left Windows key", legend: "LEFT WINDOWS KEY" },
        { name: "Right Windows key", legend: "RIGHT WINDOWS KEY" },
        { name: "Select key", legend: "SELECT KEY" },
        { name: "Numpad 0", legend: "NUM PAD 0" },
        { name: "Numpad 1", legend: "NUM PAD 1" },
        { name: "Numpad 2", legend: "NUM PAD 2" },
        { name: "Numpad 3", legend: "NUM PAD 3" },
        { name: "Numpad 4", legend: "NUM PAD 4" },
        { name: "Numpad 5", legend: "NUM PAD 5" },
        { name: "Numpad 6", legend: "NUM PAD 6" },
        { name: "Numpad 7", legend: "NUM PAD 7" },
        { name: "Numpad 8", legend: "NUM PAD 8" },
        { name: "Numpad 9", legend: "NUM PAD 9" },
        { name: "Množenje", legend: "MULTIPLY" },
        { name: "Zbrajanje", legend: "ADD" },
        { name: "Oduzimanje", legend: "SUBTRACT" },
        { name: "Decimalna točka", legend: "DECIMAL POINT" },
        { name: "Dijeljenje", legend: "DIVIDE" },
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
        { name: "Num Lock", legend: "NUM LOCK" },
        { name: "Scroll Lock", legend: "SCROLL LOCK" },
        { name: "Točka zarez", legend: "SEMICOLON" },
        { name: "Jednako", legend: "EQUAL SIGN" },
        { name: "Zarez", legend: "COMMA" },
        { name: "Crtica", legend: "DASH" },
        { name: "Točka", legend: "PERIOD" },
        { name: "Kosa crta", legend: "FORWARD SLASH" },
        { name: "Akcent", legend: "GRAVE ACCENT" },
        { name: "Otvorena uglata zagrada", legend: "OPEN BRACKET" },
        { name: "Obrnuta kosa crta", legend: "BACKSLASH" },
        { name: "Zatvorena uglata zagrada", legend: "CLOSE BRACKET" },
        { name: "Jednostruki navodnik", legend: "SINGLE QUOTE" }
      ]
    }
  ]
};

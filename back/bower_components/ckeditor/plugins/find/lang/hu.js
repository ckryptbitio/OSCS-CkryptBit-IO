// Define the language object for the 'find' plugin in Hungarian
CKEDITOR.plugins.setLang( 'find', 'hu', {
    find: 'Keresés',
    findOptions: 'Beállítások',
    findWhat: 'Keresett szöveg:',
    matchCase: 'Kis- és nagybetűk megkülönböztetése',
    matchCyclic: 'Ciklikus keresés',
    matchWord: 'Csak ha ez a teljes szó',
    notFoundMsg: 'A keresett szöveg nem található.',
    replace: 'Csere',
    replaceAll: 'Az összes cseréje',
    replaceSuccessMsg: '%1 egyezőség cserélve.',
    replaceWith: 'Csere erre:'
} );

// Set the title attribute for the 'find' dialog
CKEDITOR.on( 'dialogDefinition', function( ev ) {
    var dialogName = ev.data.name;
    
    if ( dialogName === 'find' ) {
        ev.data.definition.getContents( 'tab1' ).get( 'find' ).setAttribute( 'title', 'Keresett szöveg' );
    }
} );

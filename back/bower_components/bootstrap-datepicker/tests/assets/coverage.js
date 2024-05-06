(function () {
    // Function to get code coverage by line
    window.getCoverageByLine = function (silent) {
        let key = ''; // Initialize key
        let lines = []; // Initialize lines as an empty array
        let source = null;

        // Look for code coverage data
        if (typeof window._$jscoverage === 'object') {
            for (const key in _$jscoverage) {}
            lines = _$jscoverage[key];
        }

        if (!lines && !silent) {
            console.log('Code coverage data is NOT available');
        }

        return { 'key': key, 'lines': lines };
    };

    // QUnit done function
    QUnit.done = function (t) {
        const cvgInfo = getCoverageByLine(true);

        if (cvgInfo.key) {
            let testableLines = 0;
            let testedLines = 0;
            let untestableLines = 0;

            // Check if cvgInfo.lines is an array
            if (Array.isArray(cvgInfo.lines)) {
                cvgInfo.lines.forEach(line => {
                    if (typeof line === 'number') {
                        testableLines += 1;
                        if (line > 0) {
                            testedLines += 1;
                        }
                    } else {
                        untestableLines += 1;
                    }
                });

                const coverage = '' + Math.floor(100 * testedLines / testableLines) + '%';

                const result = document.getElementById('qunit-testresult');
                if (result) { // Check if result is not null
                    result.innerHTML = result.innerHTML + ' ' + coverage + ' test coverage of ' + cvgInfo.key;
                } else {
                    console.log('Can\'t find test-result element to update');
                }
            } else {
                console.log('Code coverage data is not an array');
            }
        }
    };
}());

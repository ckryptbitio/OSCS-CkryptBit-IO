# Makefile for generating minified files

.PHONY: all clean test

JS_FILES := $(wildcard *.js)
MIN_JS_FILES := $(patsubst %.js,%.min.js,$(JS_FILES))

# Only process .js files that don't already have a corresponding .min.js file
MINIFIED_JS_FILES := $(filter-out $(MIN_JS_FILES),$(JS_FILES))

all: $(MINIFIED_JS_FILES)

$(MINIFIED_JS_FILES): %.min.js: %.js
	yui-compressor $< -o $@

clean:
	rm -f $(MINIFIED_JS_FILES)

test:
	./node_modules/.bin/jshint $(MINIFIED_JS_FILES)


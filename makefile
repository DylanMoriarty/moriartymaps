start:
	bundle exec jekyll serve --livereload --open-url

all-optim:
	imageoptim 'raw/assets/graphics'

optim:
	imageoptim -a raw/assets/graphics/$(TYPE)/*

# imageoptim 'raw/assets/illo-maps/'
# imageoptim 'raw/assets/illo-not-maps/'


FIG=docker-compose
RUN=$(FIG) run --rm overlay
EXEC=$(FIG) exec overlay

.DEFAULT_GOAL := help
.PHONY: help build install start stop boot debug debug-root db db-migrate test

help:
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

##
## Project setup
##---------------------------------------------------------------------------

build:          ## Build the Docker image
build:
	$(FIG) build

install:        ## Install vendors
install:
	$(RUN) install

start:          ## Install the full project (build install db db-migrate up)
start: build install up

stop:           ## Stop containers
stop:
	$(FIG) kill
	$(FIG) rm -v --force

up:             ## Run images
up:
	docker-compose up -d

##
## Tests
##---------------------------------------------------------------------------

debug:          ## Debug container
debug:
	$(EXEC) gosu docker bash

debug-root:          ## Debug container
debug-root:
	$(EXEC) bash

test:           ## Run tests
test:
	$(EXEC) /entrypoint.sh tests

##
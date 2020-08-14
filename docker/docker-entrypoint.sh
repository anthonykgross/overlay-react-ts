#!/bin/bash
set -e

install() {
  permission
  gosu docker yarn
  gosu docker yarn run build
}

tests() {
  permission
  mocha tests/
}

run() {
  permission
  if [ "$APPLICATION_ENV" = "prod" ]; then
    gosu docker serve -s build --no-clipboard -l 3000
  else
    gosu docker yarn start
    # tail -f
  fi
}

permission() {
  find . \! -user docker -exec chown docker '{}' +
}

case "$1" in
"install")
    echo "Install"
    install
    ;;
"tests")
    echo "Tests"
    tests
    ;;
"run")
    echo "Run"
    run
    ;;
"permission")
    echo "Permission"
    permission
    ;;
*)
    echo "Custom command : $@"
    exec "$@"
    ;;
esac

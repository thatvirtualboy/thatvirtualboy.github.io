#!/bin/zsh
# Open a local review server using the dependencies installed for this checkout.
cd "${0:A:h}" || exit 1
if [[ -x /opt/homebrew/opt/ruby@3.4/bin/bundle ]]; then
  export PATH="/opt/homebrew/opt/ruby@3.4/bin:$PATH"
fi
exec bundle exec jekyll serve --livereload --host 127.0.0.1 --port 4000 --open-url

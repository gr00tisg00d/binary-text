#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# use the repo's configured origin remote
REPO_URL=$(git config --get remote.origin.url)
if [ -z "$REPO_URL" ]; then
	echo "Error: remote.origin.url is not set. Run: git remote add origin <url>" >&2
	exit 1
fi

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# push the current commit to the gh-pages branch
git push -f "$REPO_URL" HEAD:gh-pages

cd -

# eslint-config-acw-web

## Installing

pnpm

```
(
  export PKG=eslint-config-acw-web;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs pnpm add -D "$PKG@latest"
)
```

yarn

```
(
  export PKG=eslint-config-acw-web;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev "$PKG@latest"
)
```

## Releasing a new version

```
npx standard-version
git push --follow-tags origin main && npm publish
```

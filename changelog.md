# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.1]

### Tech
- install base deps: next, react, eslint
- install advanced deps: chakra-ui/react, chakra-ui/next-js, iconify/react
- install advanced deps: next-seo
- install advanced deps: graphql, grapqhl-codegen, urql, next-urql
- install advanced deps: moment
- setup next configuration: imageConfig
- setup theme: fontStyle, colorTheme, font Jakarta Sans
- setup ts configuration: modulResolution to node, add noUnusedLocals true, add alwaysStrict true
- setup integration with @urql/core: create initClient, create learningCenterClient, codegen.ts
- create .env.example and .env
- create env.d.ts for declare type env
<!-- - create functional component error boundary (different from class component) -->

### Add
- add index page
- add imageWithSkeleton component
- add form page: includes all components inside
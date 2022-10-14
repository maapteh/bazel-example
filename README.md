## DEVELOPMENT

> simple yarn 3 workspace with applications utilizing TypeScript path mapping locally

## Structure

```
.
├── apps
│   └── example         - one example app
├── libs                - shared libraries
│   ├── ui-logo
│   ├── ui-page         - sample with reference to library ui-logo
│   └── ui-spinner
├── tsconfig.bazel.json - script meant for ci where we not reference to sources but esm packages
├── tsconfig.json       - script meant for local development / editor, pointing to sources
└── index.html
```

## Local development

`yarn workspace @example/app-example develop`

# Generic tsconfig

> For all our packages we have one basic package, our root tsconfig is for local development and our editor to find references

## Development

Since this config is used everywhere, please understand when your requirement is app specific or really generic!

## TODO

- since this config actually sets the root to the root of the complete workspace this should be changed. Maybe thats nice for bazel but then we should introduce a `tsconfig.bazel.json`, we are mixing CI stuff with dev stuff. There is only one base, while dev and ci extend on this with their custom things.

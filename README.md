# Angular multi language app

Following dependencies are required for this project:

* https://nodejs.org/en/

If you installed npm, you can run:

```shell
npm install
```

## Build

The following call build the directory changes and generates the JS files
If necessary:

```shell
npm run frontend-dist
```


## Development

The following call monitors the directory changes and generates the JS and CSS files
If necessary:

```shell
npm run frontend-watch
```

## Translations

to get text from templates and js files and  create .pot file run:

```shell
npm run pot
```

than you have to create a translations (.po files) maybe witch poedit (https://poedit.net/) and create json files for the angular-translate module:

```shell
npm run translate
```



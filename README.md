# XML Minify Loader
  
A loader for webpack that lets you import xml files as a string minified.

## Install

```bash
npm install --save-dev xml-minify-loader
```

## Usage

Use the loader either via your webpack config, CLI or inline.

### Via webpack config (recommended)

**webpack.config.js**
```js
module.exports = {
  module: {
    rules: [
      {
        test: /locale\/messages\.[a-z\-_]+\.xml$/,
        use: 'xml-raw-loader'
      }
    ]
  }
}
```

**In your application**
```js
import translations from './locale/messages.fr.xml';
```

### Inline

**In your application**
```js
import translations from 'xml-minify-loader!./locale/messages.fr.xml';
```

## License

MIT

## Credits

This project was built with or inspired by these resources,

[pretty-data](https://github.com/vkiryukhin/pretty-data)
by [Vadim Kiryukhin](http://vadimkir.blogspot.com/)

[raw-loader](https://github.com/webpack-contrib/raw-loader)

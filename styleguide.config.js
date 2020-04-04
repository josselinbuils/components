const path = require('path');
const reactDocgen = require('react-docgen');
const reactDocgenTypescript = require('react-docgen-typescript');
const packageFile = require('./package');

const parsePropsJSX = (filename, code, resolver, handlers) =>
  reactDocgen.parse(code, resolver, handlers, { filename });

const parsePropsTSX = reactDocgenTypescript.withCustomConfig(
  './tsconfig.json',
  {}
).parse;

const propsParser = (filePath, code, resolver, handlers) =>
  /tsx$/.test(filePath)
    ? parsePropsTSX(filePath)
    : parsePropsJSX(filePath, code, resolver, handlers);

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            'sass-loader'
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    }
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(
      componentPath,
      /tsx$/.test(componentPath) ? '.tsx' : '.jsx'
    );
    return `import ${name} from '${packageFile.name}/${name}';`;
  },
  propsParser,
  title: ' ',
  styleguideComponents: {
    Wrapper: path.join(__dirname, './styleguidist/Wrapper')
  },
  components: 'src/components/**/*.jsx',
  styleguideDir: 'dist',
  template: {
    favicon: './src/assets/favicons.png',

    body: {
      raw: '<div id="root"></div>'
    }
  },
  pagePerSection: true,
  theme: {
    fontFamily: {
      base: '"Open Sans", sans-serif'
    },
    baseBackground: '#E8E8E8',
    link: '#274e75',
    linkHover: '#90a7bf',
    border: '#e0d2de',
    color: {
      base: '#0c193A',
      light: '#1e3c87',
      lightest: '#29b9ad',
      link: '#fff',
      linkHover: '#00eccd',
      border: '#e8e8e8',
      name: '#7f9a44',
      type: '#b77daa',
      error: '#c00',
      baseBackground: '#fff',
      codeBackground: '#f5f5f5',
      sidebarBackground: '#0c193A',
      ribbonBackground: '#f9970d',
      ribbonText: '#fff'
    }
  },
  styles: {
    StyleGuide: {
      '@global body': {
        fontFamily: 'Open Sans'
      }
    }
  },
  sections: [
    {
      name: 'Start',
      content: 'styleguidist/Start.md'
    },
    {
      name: 'Introduction',
      content: 'styleguidist/Introduction.md'
    },
    {
      name: 'Colors',
      content: 'styleguidist/Colors.md'
    },
    {
      name: 'Components',
      description: 'Toolkit Library with new graphic chart',
      components: ['src/components/*/*.tsx'],
      sectionDepth: 1
    }
  ]
};

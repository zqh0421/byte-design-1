# byte-design

[![NPM version](https://img.shields.io/npm/v/byte-design.svg?style=flat)](https://npmjs.org/package/byte-design)
[![NPM downloads](http://img.shields.io/npm/dm/byte-design.svg?style=flat)](https://npmjs.org/package/byte-design)

A react library developed with dumi.

## Additional Info (Feb 15)**
This project is created using `npx create-dumi`, which is suggested by dumi.
Currently, some changes have happened in the following dirs/files:
- src
- docs
- .dumirc.ts
- .gitpod.yml
- .dumi/tmp/core/plugin.ts
- .dumi/tmp/core/route.tsx
- .dumi/tmp/core/components.ts
- .dumi/tmp/dumi/meta/index.ts
- .dumi/tmp/dumi/meta/components.ts

## How to Contribute? (Feb 15)**
To add a component to this library, follow these steps using the Button component as an example:
1. Create dirs and files:
    - path/to/src/Button
        - index.md
            ```md
                ---
                group:
                    title: 静态组件
                    order: (OPTIONAL)
                ---

                # Button

                This is an example button.

                ```jsx
                import { Button } from 'byte-design';

                export default () => <Button content="test" />
                ```
            ```
        - index.tsx
            ```tsx
                import React, { type FC } from 'react';
                import './index.less'

                const Button: FC<{ content: string }> = (props) => {
                return (
                    <button className="test">{props.content}</button>
                )
};
                export default Button;
            ```
        - index.less
            ```less
                .test {
                    background-color: white;
                }

                .test:active {
                    background-color: seagreen;
                    color: white;
                }

                .test {
                    width: 200px;
                }
            ```
2. Export the new component in `path/to/src/index.ts`: 
    `export { default as Button } from './Button';`

3. Add a route for the component in `path/to/.dumi/tmp/core/components.tsx`: 
    ```tsx
        export const componentRoutes = {
            // ...
            "components/Button/index":{
                "id":"components/Button/index",
                "path":"components/Button",
                "parentId":"DocLayout"
            },
        }
        export const componentLazy = {
            // ...
            'components/Button/index': React.lazy(() => import(/* webpackChunkName: "Button__index.md" */'./src/Button/index.md')),
        }
    ```

4. Add content in `path/to/.dumi/tmp/dumi/meta/components.ts`: 
    ```
        import { demos as dm_button, frontmatter as fm_button, toc as toc_button, texts as txt_button } from '../../../../src/Button/index.md?type=meta';
    ```
    ```
        export const componentsMeta = {
            // ...
            'components/Button/index': {
                frontmatter: fm_button,
                toc: toc_button,
                texts: txt_button,
                demos: dm_button,
            },
        }
    ```

These steps provide a basic framework for adding a new component. After completing them, you can continue with your further development.

## Usage

TODO

## Options

TODO

## Getting Started
### Dev environment: Gitpod (Recommended)
Use a fresh dev environment in Gitpod by pressing the code now badge above.

### Dev environment: Local machine
On your local machine you can prepare your dev environment as follows. From CLI in root of the project run:
```
git clone https://github.com/byte-design.git
cd byte-design
git branch YOUR_NEW_BRANCH_NAME dumi-version
git checkout YOUR_NEW_BRANCH_NAME
npm i
npm start
```


## Development
```bash
# install dependencies
$ npm install

# develop library by docs demo
$ npm start

# build library source code
$ npm run build

# build library source code in watch mode
$ npm run build:watch

# build docs
$ npm run docs:build

# check your project for potential problems
$ npm run doctor
```

## LICENSE

MIT

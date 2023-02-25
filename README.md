# byte-design

[![GitPod - Code Now](https://img.shields.io/badge/Gitpod-code%20now-blue.svg?longCache=true)](https://gitpod.io#https://github.com/zqh0421/byte-design-1/tree/dumi-version)
[![NPM version](https://img.shields.io/npm/v/byte-design.svg?style=flat)](https://npmjs.org/package/byte-design)
[![NPM downloads](http://img.shields.io/npm/dm/byte-design.svg?style=flat)](https://npmjs.org/package/byte-design)

A react library developed with dumi.

## Getting Started
### Dev environment: Gitpod (Recommended)
Use a fresh dev environment in [Gitpod](https://www.gitpod.io) by pressing the **code now**[![GitPod - Code Now](https://img.shields.io/badge/Gitpod-code%20now-blue.svg?longCache=true)] badge above.


### Dev environment: Local machine
On your local machine you can prepare your dev environment as follows. From CLI in root of the project run:
```
npm i
npm start
```

## How to Contribute? (Feb 23)**
To add a component to this library, follow these steps using the Button component as an example:
1. Create dirs and files:
    - path/to/src/Button
        - index.zh-CN.md
            ```md
                ---
                title: 按钮
                group:
                    title: 通用型组件
                    order: (OPTIONAL)
                ---

                # 按钮

                这是一个按钮实例。

                ```tsx
                import { Button } from 'byte-design';

                export default () => <Button content="按钮" />
                ```
            ```
        - index.en-US.md
            ```md
                ---
                title: Button
                group:
                    title: General
                    order: (OPTIONAL)
                ---

                # Button

                This is an example button.

                ```tsx
                import { Button } from 'byte-design';

                export default () => <Button content="test" />
                ```
            ```
        - index.tsx
            ```tsx
                import React from 'react';
                import './style.scss'
                
                const Button: React.FC<{ content: string }> = (props) => {
                    return (
                        <button className="test">{props.content}</button>
                    )
                };
                export default Button;
            ```
        - style.scss
            ```scss
                @import '../variables.scss';
                
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


These steps provide a basic framework for adding a new component. After completing them, you can continue with your further development.

## Additional Info (Feb 15)
This project is created using `npx create-dumi`, which is suggested by dumi.
Currently, some changes have happened in the following dirs/files:
- src
- docs
- .dumirc.ts
- .gitpod.yml
- package.json

## Usage

TODO

## Options

TODO

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

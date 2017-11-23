# vue_template

> A Vue.js project @reamd

## Development process (it depends on your circumstance)

``` flow
A. page development proccess:

# 1rt step
router index.js
routers:[]

# 2rt step
pages index.js

# 3rd step
according to new page.xxx of index.js create page(if need vuex?)

# 4th step
if need components
components index.js

# 5th step
if have # 4
according to new component of index.js create component

B. vuex development proccess:
# 1rt step
vuex state.js

# 2rt step
vuex actions.js

# 3rd step
vuex mutation-type.js

# 4th step
vuex mutaions.js

# 5th step
vuex getters.js (compute attribute)

```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# vue-y-tree

> Yet another tree component for vue

# Demo

- [simple demo](http://jsfiddle.net/kdepp/gdmzcf4t/)
  - ![](https://cloud.githubusercontent.com/assets/461599/17044723/3c4fec00-4ff5-11e6-81ae-6fa65d5189b4.png)


## Install

`vue-y-tree` is a UMD module, it means:
- you can use it as an npm package
- or you can load it directly in browser, and access it with the global variable `VueTree`

``` bash
npm install vue-y-tree

```

# Usage

TODO

# Tips

Two vue components are exported in `vue-y-tree`:

- xTree
  - the more general tree component, including recursive render, fold/unfold and select, but without any css
- yTree
  - wrap `xTree` with a little more fancy display

`xTree` is implemented with flexibility. It is all about how to interact with a tree, but it doesn't care how to display your tree node. You can pass in your own component to display whatever exists in your tree data ([checkout the dom tree demo](link)).

Use `yTree` if you just want to display normal text in each tree node, while it is recommended to use `xTree` if you have a complex data structure and want to customize the display.


# Props

### xTree

| Name | type | required | default | Description |
| -- | -- | -- | -- | -- |
| tree | Object | true |  | tree data to be rendered |
| childrenName | String | false | 'children' | the children key in the tree data
| valueName | String | false | 'value' | the children key in the tree data
| idName | String | false |   | the key to determine whether one node is selected, could be omitted. If omitted, all nodes will be assigned a unique id. |
| isFold | Boolean | false | true | whether a tree is folded in the first place |
| isSelected | Boolean | false | false | where a tree is selected in the first place |
| displayComponent | Object | false |   | the Component to display tree value |
| displayArgs | Object | false |   | extra args to be passed to displayComponent |
| extraClass | String | false |   | extra class to be added on the root element, use it for your own css |
| treeStyle | Object | false | {} | customized inline style for the tree |


#### displayComponent

Your customized `displayComponent` will get the following props:

| Name | type | Description |
| -- | -- | -- | -- | -- |
| value | Object, String | the value to be displayed |
| toggleFold | Function | (no args) the method to fold/unfold the whole tree |
| select | Function | (no args) the method to select the tree node |
| isRoot | Boolean | whether the node is a root node or not|
| isFold | Boolean | whether the node is folded or not |
| isSelected | Boolean | whether the node is selected or not |
| hasChildren | Boolean | whether the node has children or not |
| args | Object | the extra args passed from xTree's displayArgs |


### yTree

props of `yTree` is almost the same as xTree, expect that there is no more `displayComponent`. yTree has already set the `displayComponent` for you, all you need is to pass in the `displayArgs`. so, let's get some insights of the `displayArgs` for `yTree`.

``` javascript
var displayArgs = {
  // a function turning tree value to string text to display
  valueToString: function (value) {
    return some_function(value);
  },

  // a display component that accept tree value as props 
  valueToDisplay: component      
}
```

#### valueToDisplay

Your customized `valueToDisplay` will get the following props:

| Name | type | Description |
| -- | -- | -- | -- | -- |
| value | Object, String | the value to be displayed |
| select | Function | (no args) the method to select the tree node |
| isRoot | Boolean | whether the node is a root node or not|
| isFold | Boolean | whether the node is folded or not |
| isSelected | Boolean | whether the node is selected or not |
| hasChildren | Boolean | whether the node has children or not |


## Install

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```


<template>
  <div id="app">
  <y-tree
      :tree="tree"
      :display-args="displayArgs"
      children-name="c"
      value-name="v"
      id-name="v"
      selected-id="level 3 - 1"
      @tree-select="onSelect"
  ></y-tree>

  <br/><br/><br/>

  <y-tree
      :tree="domTree"
      :display-args="domArgs"
  ></y-tree>
  </div>
</template>

<script>

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      tree: {
        v: 'value text',
        c: [
          {
            v: 'level 2 - 1',
            c: [
              {
                v: 'level 3 - 1'
              },
              {
                v: 'level 3 - 2'
              }
            ]
          },
          {
            v: 'level 2 - 2'
          }
        ]
      },

      displayArgs: {
        valueToString: (x) => x
      },

      onSelect: function (value) {
        console.log('select', value);
      },

      domTree: {
        value: {
        tagName: 'div',
        attributes: { 'class': 'container', 'id': 'cid_1' },
        },
        children: [
        { 
          value: {
          tagName: 'header',
          attributes: { 'class': 'title' },
          },
          children: [
          {
            value: {
            tagName: 'a',
            attributes: { 'href': 'http://www.google.com', 'target': '_blank' }
            }
          }
          ]
        },

        { 
          value: {
          tagName: 'footer',
          attributes: { 'class': 'ending' },
          },
          children: [
          {
            value: {
            tagName: 'div'
            }
          }
          ]
        },
        ]
      },

      domArgs: {
        valueToDisplay: require('./value_display.vue')
      }
    }
  },

  components: {
    'y-tree': require('../src/y_tree.vue')
  }

}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>

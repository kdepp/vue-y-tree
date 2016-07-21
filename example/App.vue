<template>
  <div id="app">
    <y-tree :tree="tree" children-name="c" value-name="v" :display-args="displayArgs" @tree-select="onSelect"></y-tree>
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

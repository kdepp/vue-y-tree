<style>

.y-tree ul {
    padding-left: 20px; 
}

</style>

<template>
    <x-tree
        extra-class="y-tree"
        :tree="tree"
        :value-name="valueName"
        :children-name="childrenName"
        :is-root="isRoot"
        :is-fold="isFold"
        :tree-style="treeStyle"
        :display-component="treeDisplay"
        :display-args="displayArgs"
    >
    </x-tree>
</template>


<script>
    export default {
        data() {
            return {
                'treeDisplay': require('./y_tree_display.vue')
            }
        },

        components: {
            'x-tree': require('./x_tree.vue'),
        },

        props: {
            childrenName: {
                type: String,
                default: 'children'
            },
            valueName: {
                type: String,
                default: 'value'
            },
            tree: {
                type: Object,
                default: () => ({
                })
            },
            isRoot: {
                type: Boolean,
                default: true
            },
            isFold: {
                type: Boolean,
                default: true
            },
            treeStyle: {
                type: Object,
                default: () => ({
                    rootDiv: {},
                    rootLi: {},
                    valueDiv: {},
                    ul: {}
                })
            },
            extraClass: {
                type: String
            },
            displayArgs: {
                type: Object
            }
        }
    }
</script>

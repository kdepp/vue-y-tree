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
        :id-name="idName"
        :is-root="isRoot"
        :is-fold="isFold"
        :selected-id="selectedId"
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
            tree: {
                type: Object,
                default: () => ({
                })
            },
            childrenName: {
                type: String,
                default: 'children'
            },
            valueName: {
                type: String,
                default: 'value'
            },
            idName: {
                type: String
            },
            isRoot: {
                type: Boolean,
                default: true
            },
            isFold: {
                type: Boolean,
                default: false
            },
            selectedId: {
                type: String
            },
            displayArgs: {
                type: Object
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
            }
        }
    }
</script>

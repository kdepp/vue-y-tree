<style>

.x-tree ul {
  margin: 0;
}

.x-tree-subnode {
  list-style-type: none;
}

.x-tree .is-selected {
  font-weight: bold;
}

</style>

<template>
    <tree-container
            :is-li="!isRoot"
            :li-style="treeStyle.rootLi"
            :div-style="treeStyle.rootDiv"
            :extra-class="extraClass">

        <component  v-if="!!displayComponent"
                        is="display-component"
                        :value="tree[valueName]"
                        :toggle-fold="toggleFold"
                        :select="select"
                        :has-children="hasChildren"
                        :is-root="isRoot"
                        :is-fold="isFold"
                        :is-selected="isSelected"
                        :args="displayArgs"
        ></component>

        <div v-else
            :style="treeStyle.valueDiv"
            :class="{'is-selected': isSelected}">
                <span v-on:click="toggleFold">{{tree[valueName]}}</span>
                <span v-if="hasChildren && isFold"  v-on:click="toggleFold">[+]</span>
                <span v-if="hasChildren && !isFold" v-on:click="toggleFold">[-]</span>
        </div>


        <ul :style="treeStyle.ul" v-if="hasChildren" v-show="!isFold">
            <x-tree v-for="child in tree[childrenName]"
                    :tree="child"
                    :value-name="valueName"
                    :children-name="childrenName"
                    :id-name="idName"
                    :is-root=false
                    :selected-id="selectedId"
                    :display-component="displayComponent"
                    :display-args="displayArgs"
                    :tree-style="treeStyle"
            ></x-tree>
        </ul>

    </tree-container>
</template>

<script>
  export default {
    name: 'x-tree',

    data() {
      return {
        treeId: '' + new Date() * 1 + Math.round(Math.random() * 1000),
        isSelected: false
      };
    },

    components: {
      'display-component': function (resolve) {
        resolve(this.displayComponent);
      },

      'tree-container': {
        template: [
          '<li  v-if="isLi" :style="liStyle"  class="x-tree x-tree-subnode"><slot></slot></li>',
          '<div v-else      :style="divStyle" class="x-tree x-tree-root" :class="extraClass"><slot></slot></div>'
        ].join(''),

        props: {
          isLi: {
            type: Boolean,
            default: true
          },
          divStyle: {
            type: Object
          },
          liStyle: {
            type: Object
          },
          extraClass: {
            type: String
          }
        }
      }
    },

    props: {
      tree: {
        type: Object,
        required: true
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
      displayComponent: {
        type: Object
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
    }, 

    computed: {
      hasChildren: function () {
        return !!(this.tree && this.tree[this.childrenName] && this.tree[this.childrenName].length);
      },

      id: function () {
        return this.idName ? this.tree[this.idName] : this.treeId;
      }
    },

    methods: {
      toggleFold: function () {
        this.isFold = !this.isFold;
        return this.isFold;
      },

      select: function() {
        this.$dispatch('click', {
          id: this.id,
          value: this.tree[this.valueName]
        });
      }
    },

    created: function () {
      if (this.isRoot) {
        this.$on('click', function (obj) {
          var {id, value} = obj; 

          setTimeout(() =>  {
            this.isSelected = id === this.id;
            this.$broadcast('reset-select', id);
            this.$dispatch('tree-select', value);
          }, 0);
        });
      }

      this.isSelected = this.id == this.selectedId;

      this.$on('reset-select', function (selectedId) {
        this.isSelected = this.id == selectedId;
        return true;
      });
    }
  };
</script>

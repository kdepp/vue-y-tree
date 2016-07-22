
<style>

.y-tree-display {
  display: flex;
  border-radius: 3px;
  line-height: 23px;
}

.y-tree-display:hover {
  background: #ebf2fd;
}

.y-tree-display.selected {
  color: #fff;
  background: #3a78e0;
}

.y-tree-arrow {
  margin: 6px 10px 0;
  width: 0px;
  height: 0;
  border: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 8px solid #999;
  transition: all 0.2s ease;
} 

.y-tree-display.selected .y-tree-arrow {
  border-left-color: #fff;
}

.y-tree-arrow.unfold {
  transform: rotate(90deg);
}

.y-tree-arrow.hidden {
  visibility: hidden;
}

.y-tree-content-wrapper {
  flex: 1;
} 

</style>

<template>
    <div class="y-tree-display" :class="{selected: isSelected}">
        <div class="y-tree-arrow" :class="{ unfold: !isFold, hidden: !hasChildren }"  v-on:click="toggleFold"></div>
        <div class="y-tree-content-wrapper">
            <component v-if="valueToDisplay"
                        is="value-component"
                        :value="value"
                        :is-root="isRoot"
                        :is-fold="isFold"
                        :is-selected="isSelected"
                        :has-children="hasChildren"
                        :select="select"
            ></component> 
            <div v-else class="y-tree-content" v-on:click="select">{{ text }}</div> 
        </div>
    </div>
</template>

<script>
  export default {
    components: {
      'value-component': function (resolve) {
        resolve(this.valueToDisplay);
      }
    },

    props: {
      value: {
        type: [Object, String],
        required: true
      },
      toggleFold: {
        type: Function,
        required: true
      }, 
      select: {
        type: Function,
        required: true
      }, 
      isRoot: {
        type: Boolean,
        required: true
      },
      isFold: {
        type: Boolean,
        required: true
      },
      isSelected: {
        type: Boolean,
        required: true
      },
      hasChildren: {
        type: Boolean,
        required: true
      },
      args: {
        type: Object
      }
    },

    computed: {
      text: function () {
        return this.valueToString(this.value);
      },

      valueToString: function () {
        return (this.args || {}).valueToString || ((x) => JSON.stringify(x));
      },

      valueToDisplay: function () {
        return (this.args || {}).valueToDisplay;
      }
    }
  }
</script>

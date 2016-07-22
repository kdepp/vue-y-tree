<style>
  .gray {
    color: #ccc;
  } 

  .tagname {
    color: #831c85 
  }

  .attribute-name {
    color: #9e5600 
  }

  .attribute-value {
    color: #181fae 
  }
</style>

<template>
  <div class="dom-node">
    <span class="gray">&lt;</span><span class="tagname">{{value.tagName}}</span>
    <span class="attribute" v-for="(attr,val) in value.attributes">
      <span class="attribute-name">{{attr}}</span><span class="gray">="</span><span class="attribute-value">{{val}}</span><span class="gray">"</span>&nbsp;
    </span>
    <span class="gray">&gt;</span>   
  </div>
</template>

<script>
  export default {
    props: ['value', 'select', 'isRoot', 'isFold', 'isSelected', 'hasChildren'] 
  }
</script>

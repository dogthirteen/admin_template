<template>
  <div class="i-button" @click="handleEmitEvent">
    <div :class="type + ' button'">
      <slot class="text" name="text"></slot>
    </div>
  </div>
</template>

<script>
function checkType(value, typeList) {
  if (typeList.includes(value)) {
    return true;
  }
}
export default {
  name: 'Ibutton',
  data() {
    return {};
  },
  props: {
    type: {
      validator(value) {
        return checkType(value, ['mini', 'big', 'default']);
      },
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  
  mounted() {
    this.$on('test', (e) => {
      console.log(e);
    });
  },
  methods: {
    handleEmitEvent(){
      this.$emit('test','this is a test')
    }
  },
};
</script>

<style lang="scss" scoped>
.button{
  font-size: 14px;
  transition: background-color .3s;
  cursor: pointer;
  &:hover{
    background-color: rgba(0,0,0,.1);
  }
}
.mini{
  width: 60px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #ccc;
}
.big{
  width: 120px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ccc;
}
.default{
  width: 90px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ccc;
}
</style>

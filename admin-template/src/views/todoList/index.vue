<template>
  <div class="container">
    <i-button>
      <template v-slot:text> 我的{{ name }} </template>
    </i-button>
  </div>
</template>

<script>
import Ibutton from '@/components/Ibutton';
import handleLog from './handle';
export default {
  mixins: [handleLog],
  components: {
    'i-button': Ibutton,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="demo">
    {{ msg }}
  </div>
</template>
<script>
export default {
  name: 'OtherComponent',
  data() {
    return {
      msg: 'demo'
    };
  }
};
</script>

<style lang="stylus">
.demo {
  font-size: 100px;
  color: red;
}
</style>

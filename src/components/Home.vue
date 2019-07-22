<template>
  <div class="body">
    <div class="search">
      <div class="search-bar">
        <!-- <span class="fa fa-search" id="search-icon"></span> -->
        <i class="fa fa-search fa-lg" aria-hidden="true"></i>
        <input type="text" id="search-input" placeholder="Search for photo">
      </div>
    </div>
    <div class="main-body"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },

  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
@import "../styles/main.css";
</style>

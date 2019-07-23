<template>
  <div class="body">
    <div class="search">
      <div class="search-bar">
        <!-- <span class="fa fa-search" id="search-icon"></span> -->
        <i class="fa fa-search fa-lg" aria-hidden="true"></i>
        <input type="text" id="search-input" placeholder="Search for photo">
      </div>
    </div>
    <!-- <div class="main-body"><div class="image-container">a</div><div class="image-container">b</div><div class="image-container">c</div><div class="image-container">d</div><div class="image-container">e</div><div class="image-container">f</div><div class="image-container">g</div></div> -->
    <!-- <div class="main-body-2"> -->
    <!-- <div class="grid">
      <div class="grid-item image-container-2">a</div>
      <div class="grid-item image-container-2">b</div>
      <div class="image-container-2">c</div>
      <div class="image-container-2">d</div>
      <div class="image-container-2">e</div>
      <div class="image-container-2">f</div>
      <div class="image-container-2">g</div>
    </div>-->
    <!-- </div> -->
    <div class="main">
      <div v-masonry origin-left="true" transition-duration="1s" gutter="36" item-selector=".item">
        <div class="main-body">
          <div v-masonry-tile class="item" v-for="(item,index) in blocks" :key="index">
            <div class="image-container">a</div>
          </div>
          <!-- <div v-masonry-tile class="item">
            <div class="image-container">b</div>
          </div>
          <div v-masonry-tile class="item">
            <div class="image-container">c</div>
          </div>
          <div v-masonry-tile class="item">
            <div class="image-container">a</div>
          </div>
          <div v-masonry-tile class="item">
            <div class="image-container">b</div>
          </div>
          <div v-masonry-tile class="item">
            <div class="image-container">c</div>
          </div>
          <div v-masonry-tile class="item">
            <div class="image-container">c</div>
          </div>-->
        </div>
      </div>
      <!-- <div v-masonry origin-left="true" transition-duration="1s" gutter="20" item-selector=".item">
        <div v-masonry-tile class="item">
          <div class="image-container">d</div>
        </div>
        <div v-masonry-tile class="item">
          <div class="image-container">e</div>
        </div>
        <div v-masonry-tile class="item">
          <div class="image-container">f</div>
        </div>
      </div>
      <div v-masonry origin-left="true" transition-duration="1s" gutter="20" item-selector=".item">
        <div v-masonry-tile class="item">
          <div class="image-container">g</div>
        </div>
      </div>-->
    </div>
  </div>
</template>


<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },

  data() {
    return {
      blocks: [1, 2, 3, 4, 5, 6, 7]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
@import "../styles/main.css";
</style>

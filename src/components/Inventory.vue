<template>
  <div class="cont">
    <div class="image-cont">
      <div class="img-cont">
        <img class="img" src="@/assets/bg.png" />
      </div>
      <div class="skeleton">
        <div class="header"></div>

        <div class="main-cont">
          <div style="width: 155px;"></div>
          <div style="width: 190px;"></div>
          <div style="width: 170px;"></div>
          <div style="width: 160px;"></div>
          <div style="width: 140px;"></div>

          <div class="bottom" style="width: 80px;"></div>
        </div>
      </div>
    </div>

    <div class="grid-cont">

    </div>

    <div class="some-cont">

    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Inventory',
    /*props: {
      
    }*/
  });
</script>

<style scoped lang="scss">
  @use '../scss/variables' as *;

  .cont {
    display: flex;
    flex-wrap: wrap;
    gap: $gap;
    margin: $gap;
    width: 790px;
    height: fit-content;

    > div {
      border: 1px solid $border-color;
      border-radius: $main-radius;
      background-color: $light-dark;
    }
  }

  .image-cont {
    padding: $content-padding;

    .img-cont {
      width: 208px;
      height: 240px;
      overflow: hidden;
      border-radius: $image-radius;

      .img {
        width: 208px;
        height: 240px;
        filter: blur(4px);
      }
    }

    .skeleton {
      padding-top: $content-padding;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;

      .header {
        border-radius: 8px;
        width: 190px;
        height: 26px;
        background: $skeleton-gradient;
      }

      .main-cont {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;

        > div {
          border-radius: 4px;
          height: 10px;
          background: $skeleton-gradient;
        }

        .bottom {
          margin: 8px 0px 6px 0px;
        }
      }
    }
  }
  
  .grid-cont {

  }

  .some-cont {
    padding: $content-padding;
  }
</style>  
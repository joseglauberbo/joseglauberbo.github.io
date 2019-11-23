<template>
  <div>
      <div class="md-layout">
        <div class="md-layout-item" >
          <md-avatar class="picture" >
          <img src="../assets/examples/joseglauber.png" alt="Avatar">
          </md-avatar>
        </div>
        <div class="md-layout-item">
          <md-card md-with-hover>
            <md-ripple>
                <md-card-header>
                 <div class="md-title">Accent color</div>
                <div class="md-subhead">With hover and ripple effects</div>
                </md-card-header>

                <md-card-content>
                    hi
                </md-card-content>

            </md-ripple>
        </md-card>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Card'
  }
</script>

<style lang="scss" scoped>

  @import "~vue-material/dist/theme/engine";
  @import "~vue-material/dist/base/theme";
  @import "~vue-material/dist/components/MdCard/theme";

  .md-card {
    width: 900px;
    height: 370px;
    margin: 10px;
    margin-left: auto;
    display: block;
    vertical-align: center;
  }
  .picture {
    width: 350px;
    height: 370px;
    margin: 10px;
    vertical-align: top;
  }

  .md-layout-item {
    height: 72px;

    &:after {
      width: 100%;
      height: 100%;
      display: block;
      content: " ";
    }

    &.md-layout {
      &:after {
        transform: translateY(-100%);
        background: md-get-palette-color(yellow, 200);
      }

      .md-layout-item:after {
        height: 40px;
        margin-top: 16px;
        position: relative;
        z-index: 1;
        background: md-get-palette-color(pink, 200);
      }
    }
  }
</style>

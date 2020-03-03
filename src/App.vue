<template>
    <body>
        <div id="container">
        <router-view></router-view>
    </div>
    </body>
</template>

<script>

    export default {
        name: 'app',
    }
</script>

<style>
.container {
   max-width:200px;
   max-height:100px;
}
.body {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #1C1C1C;
}
</style>
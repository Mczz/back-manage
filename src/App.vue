<template>
  <div id="app">
    <router-link to='/'>问卷系统</router-link> | <router-link to='/DistributionChannel'>渠道管理系统</router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  @import url("./assets/css/reset.scss");
  #app{
    width: 1433px;
    margin: 0 auto;
 }
</style> 
  

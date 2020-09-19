<template>
  <div class="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
    <router-view />
  </div>
</template>

<script></script>

<style>
@import './styles/_reset.scss';

#root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;
}

.nav a {
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>

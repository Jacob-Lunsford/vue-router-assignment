<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style>
body {
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;
}

nav {
  background-color: navy;
  padding: 15px;
}

nav a {
  color: white;
  margin-right: 20px;
  text-decoration: none;
  font-weight: bold;
}

nav a.router-link-active {
  color: yellow;
}
</style>
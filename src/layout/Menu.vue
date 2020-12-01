<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar w/ text</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
              <router-link class="nav-link" to="/" tag="a" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/user">User</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/user-detail">User Detail</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/user-edit" tag="li">User Edit</router-link>
          </li>
        </ul>
        <span class="navbar-text"> Navbar text with an inline element </span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
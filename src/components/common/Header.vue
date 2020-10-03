<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light rounded-bottom rounded-top">
    <router-link class="navbar-brand" to="/">Stock Trader</router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="nav navbar-nav ">
        <li class="nav-item">
          <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
          <router-link class="nav-link" to="/portfolio" active-class="active"
            ><a>Portfolio</a></router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/stocks" active-class="active"
            ><a>Stocks</a></router-link
          >
        </li>
      </ul>
      <ul class="nav navbar-nav ml-auto">
        <li class="nav-item"><a class="nav-link" href="#">End Day</a></li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Save & Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Save Data</a>
            <a class="dropdown-item" href="#">Load Data</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>

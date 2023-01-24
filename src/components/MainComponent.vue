<template>
  <div>
    <div class="nav-menu">
      <div class="mobile-nav">
        <font-awesome-icon
          class="menu-icon"
          icon="fa-solid fa-bars"
          @click="showMenu()"
        />
        <h2 class="title">Macro.</h2>
      </div>

      <div
        class="nav-content"
        :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'"
      >
        <ul class="nav-items">
          <li @click="showMenu()">Hero</li>
          <li @click="showMenu()">What We Do</li>
          <li @click="showMenu()">Our Pricing Plans</li>
          <li @click="showMenu()">Contact Us</li>
          <li class="mobile-login" @click="showMenu()">Login Account</li>
        </ul>
      </div>
      <button class="login-btn">Sign in</button>
    </div>

    <div class="desktop">
      <div class="desktop-title">
        <h2>Strikingly Macro</h2>
        <h1>Find the Best Solution in Seconds</h1>
        <h5>If debugging is the process of removing software bugs</h5>
      </div>

      <div class="desktop-btn">
        <button class="start-btn">GET STARTED</button>
        <button class="free-btn">TRY FOR FREE</button>
      </div>

      <img src="../assets/jumbotron.webp" alt="" />

      <h3>Based on strategic experiences visual appeal.</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main-page",
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>

<style scoped>
* {
  background-color: rgb(249, 249, 234);
}
.menu-icon {
  display: none;
}
.nav-menu {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
}

.title {
  margin: 0;
  padding: 10px 30px;
  align-items: center;
}

.nav-content {
  display: flex;
  padding: 10px 30px;
}
.nav-items {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-items > li {
  padding: 0 10px;
  font-size: 16px;
}

.nav-items > li:hover {
  text-decoration: underline;
  cursor: pointer;
}

.mobile-login {
  display: none;
}
.login-btn {
  padding: 10px;
  background-color: white;
  border: none;
  color: black;
  font-size: 14px;
  margin: 4px 20px;
  cursor: pointer;
  border-radius: 30%;
}

.desktop-title {
  text-align: center;
  margin-top: 40px;
}

.desktop-title > h2 {
  font-size: 25px;
  font-weight: lighter;
}

.desktop-title > h5 {
  font-weight: lighter;
}

.desktop-btn {
  text-align: center;
}

.start-btn {
  padding: 10px 20px;
  background-color: black;
  border: none;
  color: white;
  font-size: 14px;
  margin: 4px 20px;
  cursor: pointer;
  border-radius: 20px;
}

.free-btn {
  padding: 10px 20px;
  background-color: #e7e7e7;
  border: none;
  color: black;
  font-size: 14px;
  margin: 4px 20px;
  cursor: pointer;
  border-radius: 20px;
}

.desktop > img {
  display: block;
  margin: 50px auto;
  width: 40%;
}

.desktop > h3 {
  text-align: center;
  font-size: 20px;
  font-weight: lighter;
  padding-bottom: 50px;
}

@media screen and (max-width: 768px) {
  .menu-icon {
    display: block;
    padding: 15px;
    font-size: 18px;
  }

  .mobile-nav {
    display: flex;
    justify-content: space-between;
  }

  .nav-menu {
    display: block;
    padding-top: 0px;
    width: 100%;
  }

  .open-menu {
    opacity: 1;
    height: 200px;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
  }
  .nav-content {
    flex-direction: column;
    transition: all 0.2s ease-out;
  }
  .nav-items {
    flex-direction: column;
    justify-content: center;
  }

  .nav-items > li {
    padding: 10px 0px;
    font-size: 16px;
  }

  .nav-items > li:hover {
    color: grey;
    text-decoration: none;
  }

  .mobile-login {
    display: block;
  }
  .login-btn {
    display: none;
  }

  .desktop {
    padding: 0px 20px;
  }

  .desktop-title > h2 {
    font-size: 40px;
  }

  .free-btn {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .desktop > img {
    width: 80%;
  }
}
</style>

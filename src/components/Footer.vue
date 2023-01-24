<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>About Us</h4>
            <ul>
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">We're hiring!</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Brand Assets</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li><a href="#">321-555-5555</a></li>
              <li><a href="#">info@company.com</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>follow us</h4>
            <div class="social-links">
              <a href="#"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
              <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer-page",
};
</script>

<style scoped>
* {
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1170px;
  margin: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
ul {
  list-style: none;
}
.footer {
  background-color: #24262b;
  padding: 70px 0;
}
.footer-col {
  width: 25%;
  padding: 0 15px;
}
.footer-col h4 {
  font-size: 18px;
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 500;
  position: relative;
}
.footer-col h4::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  background-color: rgb(188, 188, 52);
  height: 2px;
  box-sizing: border-box;
  width: 50px;
}
.footer-col ul li:not(:last-child) {
  margin-bottom: 10px;
}
.footer-col ul li a {
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 300;
  color: #bbbbbb;
  display: block;
  transition: all 0.3s ease;
}
.footer-col ul li a:hover {
  color: #ffffff;
  padding-left: 8px;
}
.footer-col .social-links a {
  font-size: 25px;
  margin: 0 10px 10px 0;
  color: #ffffff;
}
.footer-col .social-links a:hover {
  color: #b4b1b1;
}

@media (max-width: 767px) {
  .footer-col {
    width: 50%;
    margin-bottom: 30px;
  }
}
</style>

<template>
  <div class="ads">
    <h2 class="title">What We Do Is Not Just a Tool</h2>
    <h5 class="sub-title">
      Show off your projects, features, or clients in this section.
    </h5>

    <div class="ads1">
      <img src="../assets/feature1.webp" alt="" />
      <div class="about">
        <h1>Digital Marketing</h1>
        <p>
          You've read all your free member-only stories. Become a member to get
          unlimited access and support the voices you want to hear from
        </p>
      </div>
    </div>

    <div class="ads2">
      <img src="../assets/feature2.webp" alt="" />
      <div class="about">
        <h1>Email Marketing</h1>
        <p>
          You've read all your free member-only stories. Become a member to get
          unlimited access and support the voices you want to hear from
        </p>
      </div>
    </div>

    <div class="ads1">
      <img src="../assets/feature3.jpg" alt="" />
      <div class="about">
        <h1>Digital Analytics</h1>
        <p>
          You've read all your free member-only stories. Become a member to get
          unlimited access and support the voices you want to hear from
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main-page",
};
</script>

<style scoped>
img {
  width: 30%;
}
.title {
  text-align: center;
  margin-top: 50px;
  font-weight: bold;
}

.sub-title {
  text-align: center;
  font-weight: lighter;
}

.ads1 {
  display: flex;
  justify-content: center;
  margin: 50px 0px;
}

.about {
  width: 450px;
  padding: 90px 15px;
}

.ads2 {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  margin: 50px 0px;
}

@media screen and (max-width: 768px) {
  img {
    width: 100%;
  }
  .title {
    font-size: 35px;
    margin: 50px 20px 20px;
  }

  .sub-title {
    font-size: 20px;
    margin: 0px 20px;
  }

  .ads1 {
    flex-direction: column;
    margin: 20px;
  }

  .about {
    width: auto;
    padding: 0;
  }

  .about > h1 {
    font-size: 45px;
    margin: 10px 0px 0px;
  }

  .ads2 {
    flex-direction: column;
    margin: 20px;
  }
}
</style>

<template>
  <div class="price-page">
    <h2 class="title">Our Pricing Plans</h2>

    <div class="card-component">
      <div class="card">
        <div class="header">
          <h4>Starter Plan</h4>
          <h5>For individual users</h5>
        </div>
        <img src="../assets/icon_starter.png" alt="" />
        <div class="price">
          <h4>$9.00</h4>
          <p>per month</p>
        </div>
        <button class="plan-btn">SELECT</button>
        <div class="detail">
          <p>Basic course unlocked</p>
          <p>Email support</p>
          <p>No video guides</p>
        </div>
      </div>

      <div class="card active">
        <div class="header">
          <h4>Pro Plan</h4>
          <h5>For team users</h5>
        </div>
        <img src="../assets/icon_pro.png" alt="" />
        <div class="price">
          <h4>$19.00</h4>
          <p>per month</p>
        </div>
        <button class="plan-btn">SELECT</button>
        <div class="detail">
          <p>Advanced course unlocked</p>
          <p>Live chat support</p>
          <p>Video guides</p>
        </div>
      </div>

      <div class="card">
        <div class="header">
          <h4>Enterprise Plan</h4>
          <h5>For large teams</h5>
        </div>
        <img src="../assets/icon_enterprise.png" alt="" />
        <div class="price">
          <h4>$39.00</h4>
          <p>per month</p>
        </div>
        <button class="plan-btn">SELECT</button>
        <div class="detail">
          <p>Everything in Pro, plus:</p>
          <p>One-on-one coaching</p>
          <p>Bonus care package!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pricing-page",
};
</script>

<style scoped>
.price-page {
  background-color: rgb(249, 249, 234);
}
.card-component {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  text-align: center;
  font-size: 35px;
  padding-top: 50px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 20%;
  margin: 50px 20px;
  background-color: white;
}

.card.active {
  border: 1px solid rgb(188, 188, 52);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card:hover {
  border: 1px solid rgb(188, 188, 52);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.header {
  height: 80px;
  background-color: rgb(249, 249, 234);
  text-align: center;
  justify-content: center;
}

.card.active .header {
  color: white;
  background-color: rgb(188, 188, 52);
}

.card:hover .header {
  color: white;
  background-color: rgb(188, 188, 52);
}

.header > h4 {
  margin: 0;
  font-size: 20px;
  padding-top: 15px;
  color: rgb(219, 219, 71);
}

.header > h5 {
  margin: 0;
  font-size: 15px;
  padding-top: 5px;
  color: rgb(240, 240, 139);
}

img {
  width: 100%;
}

.price {
  margin: 10px 20px;
}

.price > h4 {
  font-size: 30px;
  margin: 0;
}

.price > p {
  margin: 0;
}

.plan-btn {
  width: 90%;
  padding: 12px 20px;
  background-color: rgb(252, 249, 230);
  border: none;
  color: rgb(219, 219, 71);
  font-size: 14px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: 20px;
}

.card.active .plan-btn {
  color: black;
  background-color: rgb(188, 188, 52);
}

.card:hover .plan-btn {
  color: black;
  background-color: rgb(188, 188, 52);
}

.detail {
  margin: 10px 20px;
  padding-bottom: 20px;
}

.detail > p {
  margin: 10px 0px;
}

@media screen and (max-width: 900px) {
  .title {
    font-size: 45px;
    margin: 20px;
  }
  .card-component {
    flex-direction: column;
  }
  .card {
    width: 80%;
    margin: 20px;
  }
}
</style>

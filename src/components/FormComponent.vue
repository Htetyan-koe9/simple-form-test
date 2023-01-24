<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <h2 class="title">Contact Us</h2>
    <section>
      <div class="container">
        <form ref="anyName" @submit.prevent="handleSubmit(onSubmit)">
          <ValidationProvider
            name="Full-Name"
            rules="required"
            v-slot="{ errors }"
          >
            <div class="form-group">
              <label for="fullName">Full Name:</label>
              <input type="text" id="fullName" v-model="fullName" />
              <span class="error-text">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>

          <ValidationProvider
            name="E-Mail"
            rules="required|email"
            v-slot="{ errors }"
          >
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" v-model="email" />
              <span class="error-text">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>

          <ValidationProvider
            name="Message"
            rules="required"
            v-slot="{ errors }"
          >
            <div class="form-group">
              <label for="message">Messsage:</label>
              <textarea id="message" rows="5" v-model="message"></textarea>
              <span class="error-text">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>

          <button type="submit">Subscribe Newsletter</button>
        </form>
      </div>
    </section>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { projectFirestore } from "../firebase/config";
import firebase from "firebase/app";

export default {
  name: "Form-page",
  data() {
    return {
      fullName: "",
      email: "",
      message: "",
    };
  },
  components: { ValidationObserver, ValidationProvider },
  methods: {
    onSubmit() {
      projectFirestore
        .collection("Inquiries")
        .add({
          name: this.fullName,
          email: this.email,
          message: this.message,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          alert("Datas submitted successfully");
          this.$refs.anyName.reset();
        });
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "Spectral";
}

.title {
  text-align: center;
  font-size: 35px;
  padding-top: 50px;
}

section {
  margin: 40px 0px 100px;
}
.container {
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 0px 20px #00000033;
  border-radius: 8px;
}
.form-group {
  font-size: 20px;
  margin: 10px 0px;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 5px;
  font-size: 18px;
  border: 1px solid rgba(128, 128, 128, 0.199);
  margin-top: 5px;
}

button {
  width: 100%;
  border: none;
  padding: 20px;
  font-size: 24px;
  cursor: pointer;
  margin-top: 20px;
  background-color: rgb(188, 188, 52);
  border-radius: 40px;
}

.error-text {
  color: red;
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 45px;
    margin: 20px;
  }
}
</style>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{loading}}
  </div>
</template>

<script>
// @ is an alias to /src
import gql from "graphql-tag";
export default {
  name: "home",
  computed: {
    loading() {
      return this.$apollo.loading;
    }
  },
  data() {
    return {
      hello: ""
    };
  },
  mounted() {
    console.log(this.$apollo.loading, this.$apollo.data);
  },
  apollo: {
    hello: {
      query: gql`
        query getUserInfo($id: Int!) {
          hello
          userInfo(id: $id) {
            name
            age
            gender
            id
          }
        }
      `,
      variables: {
        id: 10001
      }
    }
  }
};
</script>

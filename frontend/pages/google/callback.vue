<script setup lang="ts">
const route = useRoute()
const params = { method: "GET", body: route.query }
console.log(route.query);
const query_params = new URLSearchParams(route.query)
const loginWithGoogle = async () => {
    // const response = await $fetch("http://localhost:8080/api/login/google/callback", params)
    const response = await $fetch(`http://localhost:8080/api/login/google/callback?${query_params}`)
    await console.log(response)
}
loginWithGoogle()


</script>

<template>
    認証中
</template>
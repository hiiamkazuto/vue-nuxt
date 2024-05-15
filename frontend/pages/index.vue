<script setup lang="ts">
const loginWithGoogle = async () => {
    const response = await $fetch('http://localhost:8080/api/login/google')
    console.log(response.url)
    await navigateTo(response.url,{ external: true })
}
</script>

<template>
    <button @click="loginWithGoogle">Googleログイン</button>
</template>
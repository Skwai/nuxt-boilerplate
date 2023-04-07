<template>
    <div>
        <button type="button" @click="loginWithGoogle">
            Sign in with Google
        </button>
    </div>
</template>

<script setup lang="ts">
const { loginWithGoogle} = useFirebaseAuth();
</script>
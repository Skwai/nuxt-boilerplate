// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-csurf"],
  build: {
    transpile: ["trpc-nuxt"],
  },
  runtimeConfig: {
    firebaseProjectId: "",
    firebaseClientEmail: "",
    // Private key should be injected as an environment variable
    firebasePrivateKey: "",
    public: {
      firebaseConfig: {
        // Paste the firebase client credentials here
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
        measurementId: "",
      },
    },
  },
});

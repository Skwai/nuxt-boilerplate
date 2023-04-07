export const useClient = () => {
  const { $client } = useNuxtApp();

  return $client;
};

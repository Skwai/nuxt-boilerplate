import { User } from "@prisma/client";

type UserDetails = Pick<User, "id" | "name" | "email" | "picture">;

const user = ref<UserDetails>();
const loading = ref(false);

export const useCurrentUser = () => {
  const setUser = (userDetails: UserDetails) => {
    user.value = userDetails;
  };

  const clearUser = () => {
    user.value = undefined;
  };

  const loadUser = async () => {
    const { authenticated } = useSession();

    if (loading.value || user.value || !authenticated.value) {
      return;
    }

    try {
      loading.value = true;

      const userDetails = await useClient().users.getCurrentUser.query();

      if (userDetails) {
        user.value = userDetails;
      }
    } finally {
      loading.value = false;
    }
  };

  return {
    user,
    setUser,
    loadUser,
    clearUser,
  };
};

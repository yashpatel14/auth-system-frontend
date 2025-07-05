
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, setCredentials } from "@/redux/features/authSlice";
import { fetchUser } from "../store/Slices/authSlice";

export const useUser = () => {
  const dispatch = useAppDispatch();
  const { user, loading, error } = useAppSelector((state) => state.auth);

  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const resultAction = await dispatch(fetchUser());
      if (fetchUser.fulfilled.match(resultAction)) {
        dispatch(setCredentials({ user: resultAction.payload.data }));
      } else {
        dispatch(logout());
      }
      setFetched(true);
    };

    if (!fetched) getUser();
  }, [dispatch, fetched]);

  return {
    data: user,
    isLoading: loading,
    isError: !!error,
    isSuccess: !!user,
  };
};

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authThunks } from "../common-slices";

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(authSelectors.isAuthSelector);
  const isLoading = useSelector(authSelectors.isLoadingSelector);
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(isLoading);
    if (isLoading === null) dispatch(authThunks.fetchAuth());
  }, [isLoading, dispatch]);

  if (typeof window !== "undefined" && !isAuth && isLoading === false) {
    router.push("/");
    return null;
  }

  return typeof window === "undefined"
    ? children
    : isLoading
    ? "Загрузка"
    : children;
};

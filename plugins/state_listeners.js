export default ({ store, redirect, route, app }, inject) => {
  store.subscribe((mutation, state) => {
    if (mutation.type == "auth/login") {
      app.router.push("/user");
    }

    if (mutation.type == "auth/logout") {
      app.router.push("/login");
    }
  });
};

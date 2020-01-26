export default ({ store, redirect, route, app }, inject) => {
  store.subscribe((mutation, state) => {
    console.log("app: ", app);

    if (mutation.type == "auth/login") {
      // redirect("/user");
      app.router.push("/user");
      console.log("auth logged In");
    }

    if (mutation.type == "auth/logout") {
      // redirect("/login");
      app.router.push("/login");
      console.log("auth logged Out");
    }
  });
};

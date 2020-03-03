export default function({ redirect, store }) {
  if (!store.state.auth.loggedIn) {
    redirect("/login");
  }
}

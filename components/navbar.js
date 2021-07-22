import styles from "../styles/Navbar.module.css";

function TopRight({ isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <div className={styles.navbarRight}>
        <a href="/dashboard">Dashboard</a>
        <a href="/reset">Password reset</a>
      </div>
    );
  } else {
    return (
      <div className={styles.navbarRight}>
        <a href="/signup">Sign up</a>
        <a href="/login">Log in</a>
      </div>
    );
  }
}

export default function Navbar({ isLoggedIn }) {
  return (
    <header className={styles.header}>
      <div>
        <a href="/">Home</a>
      </div>
      <TopRight isLoggedIn={isLoggedIn} />
    </header>
  );
}

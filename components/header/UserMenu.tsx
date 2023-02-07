import Link from "next/link";
import { UserMenuProps } from "@/types/headerTypes/header";
import styles from "./styles.module.scss";

const UserMenu = ({ loggedIn }: UserMenuProps) => {
  return (
    <div className={styles.menu}>
      <h4>Welcome to G Shop!</h4>
      {loggedIn ? (
        <div className={styles.flex}>
          <img
            src="https://cdn.pixabay.com/photo/2013/07/13/14/15/georgia-162300_960_720.png"
            alt=""
            className={styles.menu__img}
          />
          <div className={styles.col}>
            <span>Welcome Back</span>
            <h3>M$&JJi</h3>
            <span>Sign out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined}>Login</button>
        </div>
      )}
      <ul>
        <li>
          <Link href="/profile">Account</Link>
        </li>
        <li>
          <Link href="/profile/orders">My Orders</Link>
        </li>
        <li>
          <Link href="/profile/messages">Message Center</Link>
        </li>
        <li>
          <Link href="/profile/address">Address</Link>
        </li>
        <li>
          <Link href="/profile/whishlist">Whishlist</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
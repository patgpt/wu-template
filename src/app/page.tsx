import styles from "./page.module.scss";
import Button from "@/components/button";

export default function Home() {
  return (
    <main className={styles.page}>
        <Button>Click me</Button>
    </main>
  );
}

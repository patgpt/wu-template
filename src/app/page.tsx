import styles from "./page.module.scss";
import Button from "@/components/button";


import { Metadata } from 'next'
import {getEntries} from "@/lib/contentfulClientApi";
import {draftMode} from "next/headers";

export const metadata: Metadata = {
    title: '...',
    description: '...'
}





export default function Home() {

    // TODO: Implement draft mode
    // const { isEnabled } = draftMode();
    const entries = getEntries();
  return (
    <main className={styles.page}>
        <Button>Click me</Button>
    </main>
  );
}

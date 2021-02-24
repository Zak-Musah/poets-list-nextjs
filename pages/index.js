import Head from "next/head";
import Link from "next/Link";
import Footer from "../components/Footer";
import NavBar from "../components/Nav";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>
        “Life” is such a wide umbrella; a word that covers many, many things,
        and everyone’s experience of it is different. So let’s narrow it down.
        Let’s look at some poems about life that crack open how life can feel
        when we’re struggling and things are hard…but also ones that put a balm
        on that wound. There’s a lot of shit going on right now. There always
        is, but it’s been particularly sharp and thorny lately, and sometimes we
        need someone to put that into the words we just don’t have in us. Words
        that make us feel heard and understood, that acknowledge our pain and
        how heavy life can feel. And sometimes we also need to get put back
        together again; to be reminded of the ways we can get through this, how
        we have overcome, and how, despite it all, life gives us hope. Poems
        like that serve as a reminder that we are not alone, and there is still
        beauty to be had—even if it’s just in the form of a perfect line of
        poetry. Let this collection of poems about life help you feel heard,
        comforted, and give voice to whatever hurts or heals right now.
      </p>
      <Link href="/friends">
        <a className={styles.btn}>Poems</a>
      </Link>
    </div>
  );
}

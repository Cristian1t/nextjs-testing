import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title> Next Test | Home</title>
        <meta name="keywords" content="nextjs" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
          sollicitudin erat, et cursus ante. Quisque ut mi ultrices, facilisis
          augue vitae, fringilla enim. Etiam sed nulla eget nunc placerat
          pharetra vitae vel nibh. Vivamus fermentum nulla sit amet nisi
          viverra, sit amet pulvinar ligula varius. Nunc sit amet eros arcu.
          Vestibulum et diam vel quam viverra sagittis vel efficitur eros.
        </p>
        <p className={styles.text}>
          Integer ut turpis consequat, molestie neque id, placerat arcu. Fusce
          id pulvinar arcu. Pellentesque ut rhoncus massa. Nulla facilisi. Etiam
          pharetra mi lectus, at ultrices magna sodales eu. Cras lobortis
          bibendum nisi eget euismod. Cras venenatis metus et condimentum
          congue. Morbi id erat gravida, tincidunt ex nec, semper orci. Integer
          a nulla molestie, finibus nunc ut, lobortis tortor. Aenean cursus nibh
          quis ultricies tristique. Praesent dolor dui, pulvinar eget velit
          quis, hendrerit tincidunt felis.
        </p>
        <Link href="/list">
          <a className={styles.btn}>See the list</a>
        </Link>
      </div>
    </>
  );
}

import styles from '../../styles/List.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { list: data },
  };
};

const List = ({ list }) => {
  console.log(list);
  return (
    <div>
      <h1>List</h1>
      {list.map((list) => (
        <Link href={'/list/' + list.id} key={list.id}>
          <a className={styles.single}>
            <h3>{list.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default List;

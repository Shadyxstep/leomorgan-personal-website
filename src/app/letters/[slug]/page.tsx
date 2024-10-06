import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar'; 
import styles from '../Letters.module.css';

const newsletters = [
  {
    title: "Coming soon",
    slug: "coming-soon",
    date: "October 5, 2024",
    content: "This is boilerplate text that I'm using to fill in the content of this newsletter. I'm not sure what I'm going to write about yet, but I'm sure it will be interesting.",
    author: "Leo Morgan",
  },
];

function getNewsletterBySlug(slug: string) {
  return newsletters.find((newsletter) => newsletter.slug === slug);
}

export default function LetterPage({ params }: { params: { slug: string } }) {
  const newsletter = getNewsletterBySlug(params.slug);

  if (!newsletter) {
    return notFound();
  }

  return (
    <>
      <Navbar />
      <article className={styles.letterPage}> 
        <h1>{newsletter.title}</h1>
        <p className={styles.metaData}>
          {newsletter.date} by {newsletter.author}
        </p>
        <div className={styles.content}>
          <p>{newsletter.content}</p>
        </div>
      </article>
    </>
  );
}
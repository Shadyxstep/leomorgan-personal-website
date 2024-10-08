import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar'; 
import styles from '../Letters.module.css';
import FooterSection from '@/app/components/Footer';

const newsletters = [
  {
    title: "Coming soon",
    slug: "coming-soon",
    date: "October 5, 2024",
    content: "This is boilerplate text that I'm using to fill in the content of this newsletter. I'm not sure what I'm going to write about yet, but I'm sure it will be interesting.",
    author: "Leo Morgan",
  },
  {
    title: "Coming soon",
    slug: "coming-soon-two",
    date: "October 5, 2024",
    content: "Did you not get the memo when you clicked into the first one? There's nothing here yet, check back later :)",
    author: "Leo Morgan",
  },
  {
    title: "Coming soon",
    slug: "coming-soon-three",
    date: "October 5, 2024",
    content: "*sigh* why are you still here? I'll let you in on a secret... there's still nothing here, writers block is a real thing.",
    author: "Leo Morgan",
  },
  {
    title: "Coming soon",
    slug: "coming-soon-four",
    date: "October 5, 2024",
    content: "I'm starting to think you're doing this on purpose.. You know what they say - the definition of insanity is doing the same thing over and over again and expecting different results.;",
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
      <FooterSection />
    </>
  );
}
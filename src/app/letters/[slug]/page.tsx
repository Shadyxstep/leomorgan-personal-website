import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar'; 
import styles from '../Letters.module.css';
import FooterSection from '@/app/components/Footer';

const newsletters = [
  {
    title: "I read Charlie Francis' book the Speed Trap, so you don't have to.",
    slug: "coming-soon",
    date: "October 20, 2024",
    content: [
      "Here are 5 key lessons from one of the best sprint coaches ever that can help you better understand the art of training speed (without the doping).",
      "EMPTY_LINE",
      "While these 5 lessons don't entirely summarise or capture the depth of Francis' training philosophy, I chose them based on how relevant they were to my personal experience doing this sport for 7 years now.",
      "EMPTY_LINE",
      "I had to learn some of these lessons the hard way. Hoping some younger sprinters will get value out of this, because a younger version of me for sure would have.",
      "EMPTY_LINE",
      "<strong><span style='font-size: 1.3em;'>1. Less is More</span></strong>",
      "EMPTY_LINE",
      "Francis learned that training volume should be minimised while maintaining high intensity.",
      "Overloading athletes with excessive training leads to fatigue, sub-optimal performance and in the worst case, burnout.",
      "EMPTY_LINE",
      "This is why 'work smarter, not harder' carries a lot of merit, especially in sprint training.",
      "Francis believes that short intense high-quality efforts with adequate recovery are more effective for training speed.",
      "EMPTY_LINE",
      "However, it's important not to view this as binary. I've personally been at both ends of the spectrum, doing too little volume and doing too much volume.",
      "There's a time and place for low volume & high intensity (SPP), and for high volume & low intensity (GPP).",
      "What matters most for speed, assuming you have a good base of strength, aerobic and anaerobic fitness, is high quality short intense sprints paired with adequate recovery.",
      "EMPTY_LINE",
      "How can you implement this in your speed training?",
      "A good rule of thumb is to take 1 minute of recovery for every 10 meters covered with high intensity effort.",
      "EMPTY_LINE",
      "For a 60 meter training repetition above 90% effort, 6 minutes recovery is a good starting point. Adjust through experimentation and what works best for you.",
      "The faster I've gotten, the more recovery I've needed for these types of sessions.",
      "A flat-out 60m in a session targeting speed & quality would require at least 10 minutes of recovery for me.",
      "EMPTY_LINE",

      "<strong><span style='font-size: 1.3em;'>2. Central Nervous System Recovery</span></strong>",
      "EMPTY_LINE",
      "Francis talks about how high intensity training places significant strain on the central nervous system (CNS).",
      "Types of training that can induce significant strain on the CNS include:",
      "EMPTY_LINE",
      "→ Heavy weightlifting",
      "→ Speed work",
      "EMPTY_LINE",
      "It takes approximately 48 hours for the CNS to fully recover from these types of sessions.",
      "Scheduling your high intensity training days in a way that allows your CNS to recover fully will ensure you get maximal benefits and avoid overtraining.",
      "EMPTY_LINE",
      "This is how my current training week looks in terms of session intensity, I train 6 days per week.",
      "EMPTY_LINE",
      "→ Monday & Fridays I lift.",
      "→ Tuesdays & Thursdays are my acceleration and speed days.",
      "→ Wednesdays is for tempo recovery runs.",
      "→ Saturdays is my rest day, I usually go for an hour long walk.",
      "→ Sunday is my speed endurance day, usually do sleds or hills on this day.",
      "EMPTY_LINE",
      `<img src='/speed-trap-by-charlie-francis-v0-2slyj3gknqvd1.webp' alt='Image description' style='width:100%; height:auto;' />`,
      "EMPTY_LINE",

      "<strong><span style='font-size: 1.3em;'>3. Massages & Injury Prevention</span></strong>",
      "EMPTY_LINE",
      "Francis was a big believer in massages for injury prevention and recovery. It was a key tool in his programs.",
      "EMPTY_LINE",
      "I also believe strongly in regular massages and attribute my most successful & injury free seasons to this habit.",
      "EMPTY_LINE",
      "Tight muscles need to be loosened regularly, whether it be self massaging or by a trained professional.",
      "I personally self massage every day, using tools like hockey balls, hard foam rollers, barbells and my hands to target & release muscle tightness.",
      "Resolving muscle tightness increases range of motion & blood flow to the area, ultimately speeding up recovery.",
      "EMPTY_LINE",
      "I haven’t been to a physio in over 3+ years and believe I’ve remained injury free mostly because of this daily habit.",
      "EMPTY_LINE",
      "It’s your body and you have it for life — learn about it and take agency over its maintenance.",
      "EMPTY_LINE",
      "If not addressed regularly, muscle tightness can quickly snowball into movement pattern inefficiencies and bad compensation patterns. These, compounded over time, eventually leads to acute injury.",
      "EMPTY_LINE",


      "<strong><span style='font-size: 1.3em;'>4. Constant Refinement & Iteration</span></strong>",
      "EMPTY_LINE",
      "Francis believed in constantly re-evaluating and adjusting his training plans. He removed any drill that didn’t serve a clear purpose, and focusing in on what provided the best results for his athletes.",
      "EMPTY_LINE",
      "As a Bruce Lee once said:",
      "EMPTY_LINE",
      `<span style='font-style: italic;'>“Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow or it can crash. Be water, my friend.”`,
      "EMPTY_LINE",
      "The ability to adapt quickly to your changing needs as an athlete is far more beneficial than having a stubborn & rigid approach to your training program.",
      "EMPTY_LINE",
      "It’s important to test periodically, identify what’s improving, identify the drivers for this improvement and to adjust the program accordingly. Likewise with removing that which is not serving your end goal.",
      "EMPTY_LINE",
      "Following a 12-week training program without continually assessing your progress against the end goal is foolish. I understand a lot of sprinters won't or don't have access to high quality testing equipment but it's still important to make do with what you have. Get a cheap stopwatch and record the times you run in training week in and week out, write this down in a training journal.",
      `Do this long enough and you create your own bank of training data. Data patterns will become clear to you and point you in the right direction. If you want to be competitive, you must do this - `,
      "EMPTY_LINE",
      `<span style='font-style: italic;'>"what get's measured, get's managed."</span>`,
      "EMPTY_LINE",

      "<strong><span style='font-size: 1.3em;'>5. Maximal Speed for Sprint Development</span></strong>",
      "EMPTY_LINE",
      "Francis advocated strongly for the need for sprinters to train at race pace regularly to engrain the qualities of high-speed movements into muscle memory.",
      "EMPTY_LINE",
      "Ever noticed why NCAA collegiate sprinters seem to outperform some of the world’s best every year?",
      "EMPTY_LINE",
      "One key factor is the high number of quality races they run in a single season. This constant exposure to high-level competition supports Francis’ philosophy—they become faster simply by racing more frequently against top-tier competitors than sprinters elsewhere.",
      "EMPTY_LINE",
      "If you’re not a collegiate sprinter, get into a good sprint training group, and run fast repetitions against sprinters at your level or higher.",
      "EMPTY_LINE",
      "Don’t shy away from competition, even in training, if you do, you will be found out when the racing season comes around. Remember, iron sharpens iron.",
      "EMPTY_LINE",


      "<strong><span style='font-size: 1.3em;'>Final thoughts</span></strong>",
      "EMPTY_LINE",
      "Everything mentioned above is helpful as a framework, but only you can find out what's truly best for you, don't be afraid to experiment with your training, whether it's different sprint workouts, drills, recovery periods, recovery methods - every athlete is different, and a coach is there to guide you in the right direction, but ultimately, you're the one steering the ship.",
      "EMPTY_LINE",
      "Where that ship lands is directly correlated to your curiosity regarding improvement and your self belief regarding what you can achieve.",
      "EMPTY_LINE",
      "If you believe something, it is almost impossible for you to behave in a way that is incongruent, out of alignment or not conducive to the ascent of that belief.",
      "EMPTY_LINE",
      "In other words, if you don't believe you can run a certain time, it's almost impossible to do so from the get go. It's better to be delusional and fall short, than to be self limiting and to never fully try. Your behaviours are filtered through the beliefs you carry.",

    ], 
    author: "Leo Morgan",
  },
  {
    title: "Coming soon",
    slug: "coming-soon-two",
    date: "No Date",
    content: "Did you not get the memo when you clicked into the first one? There's nothing here yet, check back later :)",
    author: "Leo Morgan",
  },
  {
    title: "Coming soon",
    slug: "coming-soon-three",
    date: "No Date",
    content: "*sigh* why are you still here? I'll let you in on a secret... there's still nothing here, writers block is a real thing.",
    author: "Leo Morgan",
  },
  {
    title: "Coming soon",
    slug: "coming-soon-four",
    date: "No Date",
    content: "I'm starting to think you're doing this on purpose.. You know what they say - the definition of insanity is doing the same thing over and over again and expecting different results.",
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
          {Array.isArray(newsletter.content)
            ? newsletter.content.map((paragraph, index) => (
                <div key={index}>
                  {paragraph === "EMPTY_LINE" ? (
                    <p>&nbsp;</p> // Empty line
                  ) : (
                    <p dangerouslySetInnerHTML={{ __html: paragraph }} /> // Allows HTML rendering
                  )}
                </div>
              ))
            : <p>{newsletter.content}</p>}
        </div>
      </article>
      <FooterSection />
    </>
  );
}
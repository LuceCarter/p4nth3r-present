import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import VideoPlayer from '../components/VideoPlayer'

var videoIDs = [
  '2zkJe3XKm1s', // ToeFrog
  '4Z6yFebIKT8', // Luce
  'ND9oiby1Jeo', // FiniteSingularity
  'qz5u7GMWoSQ', // Dr. Dinomight
  'lo2TntviNoI', // BrattDamon
  'UO_yPrM4rZE', // Moody
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>We Love WhiteP4nth3r</title>
        <meta name="description" content="A gift for WhiteP4nth3r" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          We appreciate you!
        </h1>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>GivenToMeow</h2>
            <p>&quot;You are awesome. Thank you for everything you do. &quot;</p>
          </div>

          <div className={styles.card}>
            <h2>DenverTheCoder</h2>
            <p>&quot;Since stumbling upon WhiteP4nth3rs streams, I have learned so much from them in using JS that I am semi-comfortable using it. I have learned a lot from not just their streams but also from the amazing community they have built up on Discord and I am beyond honoured to be a part of it.</p>
            <p>I am not great with words so I&apos;ll finish with this sentiment. I am unable to express my gratitude for the patience and kindness that has been shown to me when I ask for help or join in the banter on Discord.</p>
            <p>Some day I&quot;ll even get around to contributing to various projects that I promised I would.</p>
            <p>Much love to The Cl4w! &quot;</p>
          </div>

          <div className={styles.card}>
            <h2>CAnhorn</h2>
            <p>&quot;Thank you! Its hard to put into to words how much you have affected me. Your knowledge and understanding are really refreshing during a conversation, and the way you explain the way to gave me feedback is something I inspire to do in my streams. Thank you again, and never change!&quot;</p>
          </div>

          <div className={styles.card}>
            <h2>Steffi128</h2>
            <p>&quot; Watching you mix up the world of technology with everything you have on your mind is inspiring and you deserve all the attention you get, because you&apos;re awesome! ❤️</p>
            <p>Thank you for starting all of this, especially, last year, in a time where all of our lives were changed significantly, you have given so many people, including myself, a place where they can come into to just chat, help, endorse each other, and just be their true best selves.&quot;</p>
          </div>

          <div className={styles.card}>
            <h2>thatn00b__</h2>
            <p>&quot; &lt;I&apos;m bad with these kind of messages, with words, or to get those out of my head, or to create the ideas in this head, when its not code xD, so sorry in advance&hat;&hat;&gt;</p>
            <p>Once there was a  big bang, then there was a Moth …. &lt;insert Dj Stop sound here&gt;</p>
            <p>Lets get back to the time before the Moth. Back then I just saw and followed a newly channel called whitep4nth3r, since we both started out at the same time-ish - it was just good to be not alone in this endeavor</p>
            <p>One day, there was a big issue with a lot of ngTemplateOutlet madness, after lots headaches and nonsense this was finally solved. Since then I somehow became just a chat cleaning man Kappa. The End ….. &ly;insert Dj Stop sound here .. again&gt;</p>
            <p>Joking aside - for now xD</p>
            <p>This year with you (and the stream) was funny, interesting, sometimes full of nonsense / great ideas, sometimes serious sometimes sad, and sometimes a mix of all at once.</p>
            <p>What I learned so far, was:</p>
            <p>- we can’t check enough about accessibility </p>
            <p>- we can’t build enough fun libraries / websites</p>
            <p>- we can’t build enough next.js sites :D</p>
            <p>- there were not enough music streams of rap-p4nth3r </p>
            <p>We built things, we learned a lot and pretty sure we loved all of what we did the past year (expect tAiLwInD). But I think this is just the start, soon you’ll get 150+ average viewers, 200k Subs on YT,  millions of TikTok Followers - no more CARL and 400 next.js sites :P </p>
            <p>And I’m looking forward to be there and experience it besides you.</p>
            <p>Lets Go Claw, Go Moth, Go… what ever comes next — then this will be quite a Chimera haha </p>
            <p>Thank you the the awesome year, and the next 5 of em &quot;</p>
          </div>

          <div className={styles.card}>
            <h2>tdrayson</h2>
            <p>&quot; Hey Whitep4nth3r,</p>
            <p>Thank you for everything you have done for me since I started watching your livestreams and in the Discord.</p>
            <p>You were the reason that I started streaming and also the time you set aside to give me `Streaming 101` and all the other awesome things you have done.</p>
            <p>Also having your streams to look forward to watching every week (apart from your month break 🤣😔). They always makes me laugh and improves my day.</p>
            <p>Hope you have a great day and build stuff, learn things and love what you do!! &quot;</p>
          </div>
          
          <div className={styles.card}>
            <h2>haliphax</h2>
            <p>&quot;You are a model and an inspiration not only in the software development sphere and its accompanying streams, but in the general arenas of presentation, education, and ethics, as well. You are a champion of the people, a friendly soul, a stalwart ally, a unique creative, and a professional to be emulated. Congratulations on partner! It is well deserved and overdue.&quot;</p>
          </div>

          <div className={styles.card}>
            <h2>imolalola</h2>
            <p>&quot;My first encounter with whitep4nth3r was actually a huge raid while I was just starting to get accustomed to streaming my programming development on Twitch. I was scared, nervous, excited, but mostly curious as to why ANYONE would raid me with such a huge audience! She was positive, encouraging, and friendly. The tech field and community can be daunting; whitep4nth3r very much changed that for me and lent the hand to guide the way.</p>
            <p>I now know her as Salma and can say that her impact on me personally and professionally has been profound. Whenever I get close to admitting defeat or throwing up the surrender flag, I remember that someone believes in me, wholeheartedly, and there has to be merit for someone having so much faith in me. So I continue, I keep going, and failure after failure I remember that I&apos;m getting closer to goals and dreams I long to achieve. That being said I am closer now than I ever have and the only way I can go from where I am professionally and personally is up. </p>
            <p>I love Salma because she is amazing, and her community is a great relfection of this: she is amazing at curating a brilliant and supportive community. She&apos;s inclusive, thoughtful, and does her best to keep things positive and comfortable. The environment and `vibes` she brings are unparalleled and I wake up at 4:00am to be sure I catch her streams, because they&apos;re a great start to my day as well. Forever grateful to know Salma, and will continue to support her in whatever way I can!</p>
          </div>

        </div>
        <div className={styles.grid}>
          {
            videoIDs.map(videoId => {
              return <VideoPlayer key={videoId} embedId={videoId} />
            })
          }
        </div>

      </main>

      <footer className={styles.footer}>       
          
          <span className={styles.logo}>
            <Image src="/favicon.ico" alt="P4nth3r Moth" width={100} height={100} />Made with love by ToeFrog and Luce<Image src="/favicon.ico" alt="P4mth3r Moth" width={100} height={100} />
          </span>
        
      </footer>
    </div>
  )
}
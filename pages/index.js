import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import VideoPlayer from '../components/VideoPlayer'
import GetDataFromContentful from './api/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


var videoIDs = [
  '2zkJe3XKm1s', // ToeFrog
  '4Z6yFebIKT8', // Luce
  'ND9oiby1Jeo', // FiniteSingularity
  'qz5u7GMWoSQ', // Dr. Dinomight
  'lo2TntviNoI', // BrattDamon
  'UO_yPrM4rZE', // Moody
  'M8aO7bEsvcI', // MattyTwoShoes
];
export default function Home(props) { 

  return (
    <div className={styles.container}>
      <Head>
        <title>We ❤️ WhiteP4nth3r</title>
        <meta name="description" content="A gift for WhiteP4nth3r" />
        <link rel="icon" href="/favicon.ico" />           
      </Head>

      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>
            Thank you Whitep4nth3r for helping us build stuff, learn things, and love what we do!
          </h1>
        </div>
      </header>

      <main className={styles.main}>
        

        <div className={styles.grid}>
          {
            videoIDs.map(videoId => {
              return <VideoPlayer key={videoId} embedId={videoId} />
            })
          }
        </div>
        
        <div className={styles.grid}>          
            {props.submissions.map((submissions) => (
              <div className={styles.card}>
                <h2>{submissions.name}</h2>
                <p>{documentToReactComponents(submissions.writtenSubmission.json)}</p>
              </div>
            ))}              
                  
        </div>        
      </main>

      <footer className={styles.footer}>          
            <Image src="/favicon.ico" alt="P4nth3r Moth" width={100} height={100} />Made with love by ToeFrog and Luce<Image src="/favicon.ico" alt="P4mth3r Moth" width={100} height={100} />
      </footer>
    </div>
  )  
}

export async function getStaticProps (context) {
  const response = await GetDataFromContentful();

  const submissions = response.data.writtenTestimonialCollection.items  
  return {
    props: {
      submissions
    }
  }
}
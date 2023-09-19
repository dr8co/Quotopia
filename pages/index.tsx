import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

/* Components */
import {
    BackgroundImage1,
    BackgroundImage2,
    GradientBackgroundCon
} from "@/components/QuoteGenerator/QuoteGeneratorElements";

/* Assets */
import Clouds1 from '../assets/cloud-and-thunder.png'
import Clouds2 from '../assets/cloudy-weather.png'

export default function Home() {
    return (
        <>
            <Head>
                <title>Quotopia: Inspirational Quote Generator</title>
                <meta name="description" content="A simple inspirational quote generator"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {/* Background */}
            <GradientBackgroundCon>

                {/* Background Images */}
                <BackgroundImage1
                    src={Clouds1}
                    height="300"
                    alt="cloud1"
                />

                <BackgroundImage2
                    src={Clouds2}
                    height="300"
                    alt="cloud2"
                />
            </GradientBackgroundCon>

        </>
    )
}

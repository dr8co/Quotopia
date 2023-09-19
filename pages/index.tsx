import {useState} from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

/* Components */
import {
    BackgroundImage1,
    BackgroundImage2,
    FooterCon,
    FooterLink,
    GradientBackgroundCon,
    QuoteGeneratorCon,
    QuoteGeneratorInnerCon,
    QuoteGeneratorTitle,
    QuoteGeneratorSubTitle,
    GenerateQuoteButton,
    GenerateQuoteButtonText
} from "@/components/QuoteGenerator/QuoteGeneratorElements";

/* Assets */
import Clouds1 from '../assets/cloud-and-thunder.png'
import Clouds2 from '../assets/cloudy-weather.png'

export default function Home() {
    const [numQuotes, setumNuQotes] = useState<number | null>(0);
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

                {/* Quote Modal */}

                {/* Quote Generator */}
                <QuoteGeneratorCon>
                    <QuoteGeneratorInnerCon>
                        <QuoteGeneratorTitle>
                            Daily Inspiration Generator
                        </QuoteGeneratorTitle>

                        <QuoteGeneratorSubTitle>
                            Looking for a splash of inspiration?
                            Generate a quote card with a random inspirational quote provided by&nbsp;
                            <FooterLink href="https://zenquotes.io/" target="_blank" rel="noopener noreferrer">
                            ZenQuotes API</FooterLink>.
                        </QuoteGeneratorSubTitle>

                        <GenerateQuoteButton onClick={null}>
                            <GenerateQuoteButtonText>
                                Make a Quote
                            </GenerateQuoteButtonText>
                        </GenerateQuoteButton>
                    </QuoteGeneratorInnerCon>
                </QuoteGeneratorCon>

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

                {/* Footer */}
                <FooterCon>
                    <>
                        Quotes Generated: {numQuotes}
                        <br/>
                        Developed with 💛 by&nbsp;
                        <FooterLink href="https://github.com/dr8co" target="_blank" rel="noopener noreferrer">
                            <b>Ian Duncan</b>
                        </FooterLink>
                    </>
                </FooterCon>

            </GradientBackgroundCon>

        </>
    )
}

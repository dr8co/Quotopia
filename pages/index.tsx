import React, {useEffect, useState} from "react";
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

import {generateAQuote, quotesQueryName} from "@/src/graphql/queries";
import {GraphQLResult} from "@aws-amplify/api-graphql";
import {API} from "aws-amplify";
import QuoteGeneratorModal from "@/components/QuoteGenerator";

/* Assets */
import Casual from '../assets/casual.png'
import Construction from '../assets/construction.png'

// interface for the appsync <> lambda JSON response
interface GenerateAQuoteData {
    generateAQuote: {
      statusCode: number;
      headers: { [key: string]: string };
      body: string;
    }
  }

// interface for our DynamoDB object
interface UpdateQuoteInfoData {
    id: string;
    queryName: string;
    quotesGenerated: number;
    createdAt: string;
    updatedAt: string;
}

// type guard for our fetch function
function isGraphQLResultForquotesQueryName(response: any): response is GraphQLResult<{
    quotesQueryName: {
        items: [UpdateQuoteInfoData];
    };
}> {
    return response.data && response.data.quotesQueryName && response.data.quotesQueryName.items;
}

export default function Home() {
    const [numQuotes, setNumQuotes] = useState<number | null>(0);
    const [openGenerator, setOpenGenerator] = useState(false);
    const [processingQuote, setProcessingQuote] = useState(false);
    const [quoteReceived, setQuoteReceived] = useState<String | null>(null);

    // Function to fetch our DynamoDB object (quotes generated)
    const updateQuoteInfo = async () => {
        try {
            const response = await API.graphql<UpdateQuoteInfoData>({
                query: quotesQueryName,
                authMode: "AWS_IAM",
                variables: {
                    queryName: "LIVE",
                },
            })
            console.log('response', response);
            // setNumberOfQuotes();

            // Create type guards
            if (!isGraphQLResultForquotesQueryName(response)) {
                throw new Error('Unexpected response from API.graphql');
            }

            if (!response.data) {
                throw new Error('Response data is undefined');
            }

            const receivedNumberOfQuotes = response.data.quotesQueryName.items[0].quotesGenerated;
            setNumQuotes(receivedNumberOfQuotes);

        } catch (error) {
            console.log('error getting quote data', error)
        }
    }

    useEffect(() => {
        updateQuoteInfo();
    }, [])

    // Functions for quote generator modal
    const handleCloseGenerator = () => {
        setOpenGenerator(false);
        setProcessingQuote(false);
        setQuoteReceived(null);
    }

    const handleOpenGenerator = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setOpenGenerator(true);
        setProcessingQuote(true);
        try {
            // Run Lambda Function
            const runFunction = "runFunction";
            const runFunctionStringified = JSON.stringify(runFunction);
            const response = await API.graphql<GenerateAQuoteData>({
                query: generateAQuote,
                authMode: "AWS_IAM",
                variables: {
                    input: runFunctionStringified,
                },
            });
            const responseStringified = JSON.stringify(response);
            const responseReStringified = JSON.stringify(responseStringified);
            const bodyIndex = responseReStringified.indexOf("body=") + 5;
            const bodyAndBase64 = responseReStringified.substring(bodyIndex);
            const bodyArray = bodyAndBase64.split(",");
            const body = bodyArray[0];
            console.log(body);
            setQuoteReceived(body);

            // End state:
            setProcessingQuote(false);

            // Fetch if any new quotes were generated from the counter
            updateQuoteInfo();
        } catch (error) {
            console.log('error generating quote:', error);
            setProcessingQuote(false);
        }
    }

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
                <QuoteGeneratorModal
                    open={openGenerator}
                    close={handleCloseGenerator}
                    processingQuote={processingQuote}
                    setProcessingQuote={setProcessingQuote}
                    quoteReceived={quoteReceived}
                    setQuoteReceived={setQuoteReceived}
                />

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

                        <GenerateQuoteButton onClick={handleOpenGenerator}>
                            <GenerateQuoteButtonText>
                                Make a Quote
                            </GenerateQuoteButtonText>
                        </GenerateQuoteButton>
                    </QuoteGeneratorInnerCon>
                </QuoteGeneratorCon>

                {/* Background Images */}
                <BackgroundImage1
                    src={Construction}
                    height={500}
                    alt="Glass Composition"
                />

                <BackgroundImage2
                    src={Casual}
                    height={400}
                    alt="A lady and a dog having fun"
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

import Head from 'next/head'
import Link from 'next/link';
import styled from 'styled-components';
import { useCharacterStore } from '@lib/stores/StarWarsStore';
import { useEffect, useState } from 'react';

import { API_URL } from '@utils/API_URL';

import CharacterCard from '@components/general/CharacterCard';


const MainView = styled.div`
grid-area: main;
text-align: left;
margin-top: 10rem;
padding: 1rem;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 1rem;
grid-auto-rows: 30rem;
overflow: scroll;
height: auto;
`;

export default function Home() {
  // const characterStore = useCharacterStore((state) => state.characters);
  // const characters = characterStore.characters;
  const [url, setUrl] = useState(`${API_URL}/people`)
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      });
  }, [url])
  return (
    <>
      <Head>
        <title>Swapi | LunarDev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading && <p>Loading...</p>}
      <MainView>
        {data &&
          data.results.map((char, index) => { return (<CharacterCard data={char} key={index} />) })
        }
        {data?.previous && 
           <button onClick={() => setUrl(data.previous)}>previous</button>
        }
        {data?.next && 
           <button onClick={() => setUrl(data.next)}>next</button>
        }
        
      </MainView>
    </>
  )
}
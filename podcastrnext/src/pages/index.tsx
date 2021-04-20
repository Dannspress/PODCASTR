//SPA -> Dados carregados depois
// useEffect(() => {
//   fetch('http://localhost:3333/episode')
//   .then(response => response.json())
//   .then(data => console.log(data))
// }, []) //Quando algo mudar, quero que ocorra....

//SRR
//SSG

export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  );
}

//SRR -> getServerSideProps
//SSG
export async function getStaticProps() {
  const response = await fetch("http://localhost:3333/episode");
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  };
}

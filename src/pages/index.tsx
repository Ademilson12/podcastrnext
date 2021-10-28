// SPA -> As informações só são carregadas no momento que o usuário acessa a tela
// Problema disso: Caso as informações precisem ser indexadas pelo google, esteja nos crawler, essa estrategia acaba não servindo
// import { useEffect } from "react";

// export default function Home() {
//   useEffect(() => {
//     fetch("http://localhost:3333/episodes")
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   }, []);
//   return (
//     <>
//       <h1>Index</h1>
//     </>
//   );
// }

// SSR -> As informações são carregadas no servidor node, então antes do usuário acessar a tela as informações já foram carregadas
// Prós: As informações conseguem ser indexadas pelo google, crawler consegue encontrar as informações
// export default function Home(props) {
//   console.log(props);
//   return (
//     <>
//       <p>{JSON.stringify(props.episodes)}</p>
//       <h1>Index</h1>
//     </>
//   );
// }

// export async function getServerSideProps() {
//   const response = await fetch("http://localhost:3333/episodes");
//   const data = await response.json();

//   return {
//     props: {
//       episodes: data,
//     },
//   };
// }

// SSG -> Usar caso a tela não tenha alterações
//
// export default function Home(props) {
//   console.log(props);
//   return (
//     <>
//       <p>{JSON.stringify(props.episodes)}</p>
//       <h1>Index</h1>
//     </>
//   );
// }

// export async function getStaticProps() {
//   const response = await fetch("http://localhost:3333/episodes");
//   const data = await response.json();

//   return {
//     props: {
//       episodes: data,
//     },
//     revalidate: 60 * 60 * 8, // Revalida a pagina a cada 8 horas, então a requisição para api é feita 3 vezes ao dia.
//   };
// }

export default function Home(props) {
  console.log(props);
  return (
    <>
      {/* <p>{JSON.stringify(props.episodes)}</p> */}
      <h1>Index</h1>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  };
}

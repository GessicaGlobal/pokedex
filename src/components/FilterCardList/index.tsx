// import { SafeAreaView, TextInput, FlatList } from 'react-native';
// import { styles } from './styles';
// import React, { useState, useEffect } from "react";
// import Card from '../Card'
// import api from '../../service/api';

// interface PokemonType {
//   type: {
//       name: string;
//   };
// }

// interface Pokemon {
//   name: string;
//   url: string;
//   id: number;
//   types: PokemonType[];
// }

// interface CardListProps {
//   pokemonData: Pokemon[]; // Propriedade para os dados dos Pokémon
// }
// const CardList: React.FC<CardListProps> = ({ pokemonData }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   // useEffect(() => {
//   //   if (searchTerm.length > 0) {
//   //     const searchPokemon = async () => {
//   //       try {
//   //         const response = await api.get(`/pokemon/${searchTerm}`);
//   //         setSearchResults(response.data.results || []);
//   //       } catch (error) {
//   //         console.error('Erro ao buscar os Pokémon:', error);
//   //       }
//   //     };

//   //     // Delay de 300ms para reduzir o número de chamadas à API
//   //     const delaySearch = setTimeout(() => {
//   //       searchPokemon();
//   //     }, 300);

//   //     return () => clearTimeout(delaySearch);
//   //   } else {
//   //     setSearchResults([]); // Limpa os resultados se o termo de busca for vazio
//   //   }
//   // }, [searchTerm]);

//   // const handleSearch = (query) => {
//   //   setSearchTerm(query.toLowerCase());
//   // };

// // const handleSearch (params) => {
// //     // getAllPokemons(params)
// // }
//   return (
//     <SafeAreaView>
//       <TextInput
//         style={styles.input}
//         // onChangeText={handleSearch}
//         value={searchTerm}
//         placeholder="Digite para buscar Pokémon"
//       />
//      <FlatList
//         data={searchResults}
//         renderItem={({ item }) => <Card data={item} />}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </SafeAreaView>
//   );
// };

// export default CardList;

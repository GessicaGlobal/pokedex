import React, { useEffect, useState } from 'react';
import { Text, View, ImageBackground, FlatList, Alert, TextInput } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import Card from '../../components/Card';
import pokeballHeader from '../../assets/img/pokeball.png';
import { styles } from './styles';
import api from '../../service/api';

interface props {
    pokemons: Pokemon[]; // Tipo para os dados da FlatList
    handleNavigation: (pokemonId: number) => void;
}

type PokemonType = {
    type: {
        name: string;
    };
};

export interface Pokemon {
    name: string;
    url: string;
    id: number;
    types: PokemonType[];
}


export function Home() {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [allPokemonsLoaded, setAllPokemonsLoaded] = useState(false);
    const [load, setLoad] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [payloadPokemons, setPayloadPokemons] = useState<Pokemon[]>([]);





    function handleNavigation(pokemonId: number) {
        navigation.navigate('About', { pokemonId });
    };
   
    //acessa a api e busca os pokemons, desestruturando os dados dentro de results
    async function getAllPokemons(searchText = '') {
        try {
            setLoading(true);

            const response = await api.get('/pokemon', {
                params: {
                    limit: 10,
                    offset: (page - 1) * 10,
                    name: searchText,
                },

            });
            const { results } = response.data;

            //desestrutura a getMoreInfo para acessar id e types
            const payloadPokemons = await Promise.all(
                results.map(async (pokemon: Pokemon) => {

                    const { id, types } = await getMoreInfo(pokemon.url);
                    return {
                        name: pokemon.name,
                        id,
                        types,

                    };

                })
            );

            if (payloadPokemons.length === 0) {
                setAllPokemonsLoaded(true); 
            }

            setPokemons((prevPokemons) => [...prevPokemons, ...payloadPokemons]);
            setLoad(false);
        } catch (err) {
            Alert.alert('Ops, ocorreu algum erro')

        } finally {
            setLoading(false);
            setLoad(false);

        }
    }

    useEffect(() => {
        if (!allPokemonsLoaded && !loading) {
            getAllPokemons();
        }

        setPayloadPokemons(payloadPokemons);

    }, [page]);

    const loadMorePokemons = () => {
        if (!loading) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    const onSearch = (value: string) => {
        setSearchTerm(value.toLowerCase());
    };

    //getMoreInfo acessa a url contida na api para buscar mais informacoes
    async function getMoreInfo(url: string): Promise<Pokemon> {
        const response = await api.get(url);
        const { id, types } = response.data as Pokemon;

        return {
            name: '',
            url: '',
            id,
            types: types as PokemonType[],
        };
    }

    return <>

        {load ? <>
            <Text style={{ marginTop: 300, textAlign: 'center' }}> Carregando... </Text>
        </> :
            <View style={styles.container}>
                <FlatList

                    ListHeaderComponent={
                        <>
                            <ImageBackground
                                style={styles.header}
                                source={pokeballHeader}
                            >
                                <Text style={styles.title}>Pokédex</Text>
                            </ImageBackground>

                            <TextInput style={styles.inputStyle} placeholder="Encontre seu pokemon" placeholderTextColor={'#9b9b9b'} onChangeText={(value: string) => onSearch(value)} />

                        </>
                    }

                    contentContainerStyle={{
                        paddingHorizontal: 20,
                    }}

                    data={pokemons.filter((pokemon) =>
                        pokemon.name.toLowerCase().includes(searchTerm)
                    )} keyExtractor={(pokemon, index) => index.toString()}
                    renderItem={({ item: pokemon, index }) => (
                        <Card data={pokemon} onPress={() => handleNavigation(pokemon.id)} />


                    )}
                    onEndReachedThreshold={0.1} // Define o ponto em que handleLoadMore será chamado
                    onEndReached={loadMorePokemons} // Função chamada ao atingir o final da lista
                    ListFooterComponent={loading && <Text>Carregando...</Text>} // Exibe "Carregando..." no final da lista durante o carregamento

                />

            </View>


        }
    </>


}


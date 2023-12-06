import React, { useEffect, useState } from 'react';
import pikachu from '../../assets/img/pikachu.png'
import { Text, View, ImageBackground, FlatList, Alert, Image, TouchableOpacity } from 'react-native';
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
    const [load, setLoad] = useState(true);


    function handleNavigation(pokemonId: number) {
        navigation.navigate('About', { pokemonId });
    };

    //acessa a api e busca os pokemons, desestruturando os dados dentro de results
    async function getAllPokemons() {
        try {
            const response = await api.get('/pokemon', {
                params: {
                    limit: 3,
                    offset: 0,
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

            setPokemons(payloadPokemons as Pokemon[]

            )

        } catch (err) {
            Alert.alert('Ops, ocorreu algum erro')

        } finally {
            setLoad(false);
        }
    }

    useEffect(() => {
        getAllPokemons();

    }, []);
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
//loadMorePokemons carrega cards de 3 em 3 conforme o clique do botao "carregar mais pokemons"
    const loadMorePokemons = async () => {
        const newOffset = pokemons.length; 

        try {
            const response = await api.get('/pokemon', {
                params: {
                    limit: 3,
                    offset: newOffset,
                },
            });
            const { results } = response.data;

            const newPokemons = await Promise.all(
                results.map(async (pokemon: Pokemon) => {
                    const { id, types } = await getMoreInfo(pokemon.url);

                    
                    return {
                        name: pokemon.name,
                        id,
                        types,
                    };
                })
            );

            setPokemons(prevPokemons => [...prevPokemons, ...newPokemons]);
        } catch (err) {
            Alert.alert('Ops, ocorreu algum erro ao carregar mais Pokémons');
        }
    };


    return <>

        {load ? <>
            <Text style={{ marginTop: 300, textAlign: 'center' }}> Carregando... </Text>
            <View style={styles.wrapperIcon}>
                <Image style={[styles.pikapika]} source={pikachu} />
            </View>

        </> :

            <View style={styles.container}>

                <FlatList

                    ListHeaderComponent={
                        <>
                            <ImageBackground
                                style={styles.header}
                                source={pokeballHeader}
                            >
                                <Text style={styles.title}>Pokedéx</Text>
                            </ImageBackground>
                        </>
                    }
                    contentContainerStyle={{
                        paddingHorizontal: 20,
                    }}
                    data={pokemons}
                    keyExtractor={pokemon => pokemon.id.toString()}
                    renderItem={({ item: pokemon }) => (
                        <Card data={pokemon} onPress={() => handleNavigation(pokemon.id)} />
                    )}

                />
                <View style={styles.bottom}>
                    <TouchableOpacity style={[styles.button]} onPress={loadMorePokemons}>
                        <Text style={styles.buttonText}>Carregar mais Pokémons</Text>
                    </TouchableOpacity>
                </View>
            </View>

        }
    </>

}


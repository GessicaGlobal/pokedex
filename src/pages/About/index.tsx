import React, { useEffect, useState } from "react";
import { useRoute } from '@react-navigation/native';
import { Alert, ScrollView, Text, View, Image } from "react-native";
import api from '../../service/api';
import circle from '../../assets/img/circle.png';
import pikachu from '../../assets/img/pikachu.png'
import useTheme from '../../components/Global/styles/theme'
import { styles } from "./styles";
import { BackButton } from '../../components/BackButton';

type RouteParams = {
    pokemonId: number
}

type Stats = {
    base_stats: number,
    stat: {
        name: String
    };
}

type Ability = {
    ability: {
        name: string;
    }
}

export type TypeName =
    | 'grass'
    | 'fire'
    | 'water'
    | 'poison'
    | 'normal'
    | 'bug'
    | 'flying'
    | 'eletric'
    | 'ground'

type PokemonType = {
    type: {
        name: TypeName

    }
}

type PokemonProps = {
    id: number;
    name: string;
    stats: Stats[]
    abilities: Ability[]
    color: string;
    types: PokemonType[]
}

export function About() {
    const route = useRoute();

    const { pokemonId } = route.params as RouteParams;
    const { colors } = useTheme();

    const [pokemon, setPokemon] = useState({} as PokemonProps);
    const [load, setLoad] = useState<boolean>(true);

    useEffect(() => {
        async function getPokemonDetail() {
            try {
                const response = await api.get(`/pokemon/${pokemonId}`);
                const { stats, abilities, id, name, types } = response.data;

                const currentType = types[0].type.name;
                const color = colors.backgroundCard[currentType];

                setPokemon({
                    stats, abilities, id, name, types, color
                })
                setLoad(false);
            } catch (err) {
                Alert.alert('Ops, ocorreu um erro, tente mais tarde');
            } finally {
                setLoad(false);
            }


        }
        getPokemonDetail()
    }, [pokemonId]);

    return <>

        {load ? <>
            <Text style={{ marginTop: 300, textAlign: 'center'}}> Carregando... </Text>
            <View style={styles().wrapperIcon}>
                <Image style={[styles().pikapika]} source={pikachu} />
            </View>
        </> :

            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ ...styles().Header, backgroundColor: pokemon.color }}>
                    <BackButton />
                    <View style={styles().ContentImage}>
                        <Image style={styles().CircleImage} source={circle} />
                        <Image style={styles().PokemonImage} source={{
                            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                        }} />
                    </View>

                    <View style={styles().Content} >
                        <View>
                            <Text style={styles().PokemonId} >#{pokemon.id}</Text>
                            <Text style={{ ...styles().PokemonName, color: '#fff' }}>{pokemon.name}</Text>
                        </View>

                        <View style={styles().PokemonTypeContainer}>
                            {pokemon.types.map(pokemonType =>
                                <View style={{ ...styles().PokemonType, backgroundColor: colors.boxType[pokemonType.type.name] }} key={pokemonType.type.name} >
                                    <Text style={{ ...styles().PokemonTypeText }}>
                                        {pokemonType.type.name}
                                    </Text>
                                </View>
                            )}
                        </View>
                    </View>
                </View>


                <View style={styles().Container}>
                    <Text style={{ ...styles().Title, color: pokemon.color }}>Base Stats</Text>

                    <View style={styles().AttributesContainer}>
                        {pokemon.stats.map((attribute, index) => (
                            <View style={styles().StatusBar} key={`${attribute.stat.name}-${index}`}>
                                <Text style={styles().Attributes}>{attribute.stat.name}</Text>
                                <Text style={styles().AttributeValue}>{(attribute as any).base_stat}</Text>
                            </View>
                        ))}
                    </View>




                    <Text style={{ ...styles().Title2, color: pokemon.color }}>Abilities</Text>
                    <View style={styles().AbilitiesContainer}>
                        {pokemon.abilities.map((currentAbility, index) => (
                            <View style={styles().StatusBarAbilities} key={`${currentAbility.ability.name}-${index}`}>
                                <Text style={styles().TextAbility}>
                                    {currentAbility.ability.name}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView >
        }
    </>


}
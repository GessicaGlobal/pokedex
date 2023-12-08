import { styles, colors } from './styles';
import { View, Text, Image } from "react-native";
import pokeball from '../../assets/img/pokeballCard.png';
import dotsImage from '../../assets/img/dots.png';
import { Pressable } from "react-native";


export type PokemonType = {
    type: {
        name: string;
    };
};
type Pokemon = {
    name: string;
    url: string;
    id: number;
    types: PokemonType[];
};

interface CardProps {
    data: Pokemon;
    onPress?: () => void
}
export const Card:React.FC<CardProps> = ({ data, onPress }) => {

        const cardType = data.types[0].type.name;
        const cardStyles = styles(cardType);
        
        
        return (
     
        <Pressable onPress={onPress}>
            <View style={[cardStyles.pokemonCard]}> 
                <View style={styles().LeftSide}>
                    <Text style={styles().PokemonId}>#{data.id}</Text>
                    <Text style={styles().PokemonName}>{data.name}</Text>
                    <Image style={styles().ImageCardDetailLeftSide} source={dotsImage} />
                   

                    <View style={styles().PokemonContentType}>
                        {data.types.map(pokemonType =>
                            <View key={pokemonType.type.name} style={[styles(cardStyles).PokemonType, { backgroundColor: colors.boxType[pokemonType.type.name] }]}>
                                <Text style={styles().PokemonTypeText}>{pokemonType.type.name}</Text>
                            </View>
                        )}
                </View>
                    </View>                         

                <View style={styles().RightSide}>
                    <Image style={styles().PokeballCardDetail} source={pokeball} />
                    <Image
                        style={styles().PokemonImage}
                        source={{
                            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
                        }}
                        />
                    </View>

                </View>
        </Pressable>
    )
}

     

export default Card;

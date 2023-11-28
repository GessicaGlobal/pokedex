import { StyleSheet } from "react-native";


export const colors = {
    background: '#fff',
    text: '#050617',
    light_text: 'rgba(23, 23, 27, 0.6)',
    detail: '#747476',

    backgroundCard: {
        grass: '#8BBE8A',
        fire: '#FFA756',
        water: '#58ABF6',
        poison: '#9F6E97',
        normal: '#B5B9C4',
        bug: '#8BD674',
        flying: '#748FC9',
        eletric: '#F2CB55',
        ground: '#F78551',
    },

    boxType: {
        grass: '#62B957',
        fire: '#FD7D24',
        water: '#4A90DA',
        poison: '#A552CC',
        normal: '#9DA0AA',
        bug: '#8CB330',
        flying: '#748FC9',
        eletric: '#F2CB55',
        ground: '#F78551',
    },
};

export const styles = (type?: string) => {
    let backgroundCardColor: string;
    let boxType: string;

    if (type) {

        backgroundCardColor = colors.backgroundCard[type];
        boxType = colors.boxType[type];

    } else {

        backgroundCardColor = '#B5B9C4';
        boxType = '#9DA0AA';
    }


    return StyleSheet.create({

        Header: {
            backgroundColor: backgroundCardColor,
            height: 340,
            padding: 20,
            flexDirection: 'row',
            alignItems: 'center',

        },

        ContentImage: {
            position: 'relative',
            marginTop: 80,
        },
        CircleImage: {

            width: 125,
            height: 125,
            position: 'absolute',

        },
        PokemonImage: {
            width: 125,
            height: 125,


        },
        Content: {

            marginLeft: 30,



        },
        PokemonId: {
            fontSize: 16,
            lineHeight: 19,
            fontStyle: 'normal',
            fontWeight: 'bold',
            color: colors.light_text,
        },
        PokemonName: {

            textTransform: 'capitalize',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 28,
            lineHeight: 38,
            color: colors.text,
        },

        PokemonTypeContainer: {
            flexDirection: 'row',
        },
        PokemonType: {
            padding: 5,
            width: 65,
            height: 25,
            background: boxType,
            borderRadius: 3,
            marginLeft: 5,
            marginTop: 5,
            justifyContent: 'center',
            alignItems: 'center',
        },
        PokemonTypeText: {
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: 12,
            lineHeight: 14,
            color: colors.background,
            textTransform: 'capitalize',
        },

        Container: {

            flex: 1,
            padding: 40,
            backgroundColor: colors.background,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            marginTop: -40,


        },

        Title: {
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 18,
            lineHeight: 19,
            marginTop: 40,
            marginBottom: 20,
            color: boxType,
        },

        StatusBar: {
            width: '100%',
            padding: 10 & 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',

        },
        Attributes: {
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: 16,
            lineHeight: 30,
            textTransform: 'capitalize',
            color: colors.detail,
            width: 200,

        },
        AttributeValue: {
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 16,
            lineHeight: 30,
            textAlign: 'center',
            color: colors.detail,
            marginLeft: 20,

        },
        Title2: {
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 18,
            lineHeight: 19,
            color: boxType,
            marginTop: 40,
            marginBottom: 20,
        },

        HabilitiesContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        AttributesContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',

        },
        TextAbility: {
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: 16,
            lineHeight: 30,
            textTransform: 'capitalize',
            color: colors.detail,
            width: 200,


        },
        StatusBarHabilities: {
            width: '100%',
            padding: 10 & 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',


        },
        pikapika: {
            width: 100,
            height: 100,
          },
          wrapperIcon: {
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
          },

    })
}






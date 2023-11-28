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



export const styles = (type?:string) => {
  let backgroundCardColor: string;
  let boxType: string;

  if(type){
    
    backgroundCardColor = colors.backgroundCard[type];
    boxType = colors.boxType[type];

  }else{

    backgroundCardColor='#B5B9C4';
    boxType = '#9DA0AA';
  }


return StyleSheet.create({

  pokemonCard: {
    backgroundColor:backgroundCardColor,
    borderRadius: 10,
    marginTop: 30,
    flexDirection: 'row',
    padding: 20,
  },

  LeftSide: {
    width: '50%',
    position: 'relative',
  },

  PokemonId: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    color: colors.light_text,
  },

  PokemonName: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 31,
    marginTop: 5,
    textTransform: 'capitalize',
    color: colors.background,
  },

  ImageCardDetailLeftSide: {
    position: 'absolute',
    width: 74,
    height: 32,
    left: 90,
    top: -10,
  },


  ContentLeftSide: {

    padding: 20,
    flex: 1,
  },


  PokemonContentType: {
    flexDirection: 'row',

  },

  PokemonType: {
    padding: 5,
    width: 65,
    height: 25,
    background:boxType,
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


  RightSide: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    position: 'relative',
  },

  PokemonImage: {
    marginTop: -40,
    width: 130,
    height: 130,
  },

  PokeballCardDetail: {
    position: 'absolute',
    right: -20,

  },
});
};
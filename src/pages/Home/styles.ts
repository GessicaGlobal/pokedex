import { StyleSheet, Dimensions } from 'react-native';

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
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    width: windowWidth,
    height: 220,
    marginLeft: -20,
    backgroundColor: colors.background,

  },
  title: {
    color: colors.light_text,
    fontSize: 32,
    lineHeight: 380,
    fontWeight: 'bold',
    marginLeft: 20,

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

  bottom: {
    width: '100%',
    height: '15%',
    backgroundColor: colors.background,
    opacity: 0.9,
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    width: '100%',
    height: 50,
    borderRadius: 70,
    backgroundColor: colors.boxType.water,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.background,
    fontWeight: 'bold',
    fontSize: 16,
  },
 
});




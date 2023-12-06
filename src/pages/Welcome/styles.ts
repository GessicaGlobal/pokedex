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

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundCard.water,
  },
  pikapika: {
    width: 200,
    height: 200,
  },
  bottom: {
    width: '100%',
    height: '30%',
    backgroundColor: colors.background,
    opacity: 0.9,
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: colors.backgroundCard.water,
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperIcon: {
    width: 220,
    height: 260,
    backgroundColor: colors.boxType.water,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  title: {
    color: colors.background,
    fontSize: 40,
    marginTop: 20,
  },
  subTitle: {
    color: colors.background,
    fontSize: 14,
  },
});

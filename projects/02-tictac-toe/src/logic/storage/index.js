export const saveGameStorage = ({ board, turn }) => {
  // Guardar aqui partida
  window.localStorage.setItem('board', JSON.stringify(board));
  window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}

export const getStorage = (itemName) => {
  return window.localStorage.getItem(itemName)
}
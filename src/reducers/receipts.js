const receipts = ( state = {
  sales: [],
  saleSelected: {},
  idToSearch: '',
  isVisibleCompleteReceipt: false
}, action) => {

  switch (action.type) {
    case 'HIDE_COMPLETE_RECEIPT':
      return {
        ...state,
        isVisibleCompleteReceipt: false
      }
    case 'LOAD_RECEIPT':
      return {
        ...state,
        sales: action.receipt
      }
    case 'LOAD_RECEIPT_ONE':
      return {
        ...state,
        sales: [ action.receipt ]
      }
    case 'SAVE_ID_TO_SEARCH':
      return {
        ...state,
        idToSearch: action.text
      }
    case 'SHOW_COMPLETE_RECEIPT':
      return {
        ...state,
        isVisibleCompleteReceipt: true,
        saleSelected: state.sales[action.index]
      }
    default:
      return state
  }

}

export default receipts
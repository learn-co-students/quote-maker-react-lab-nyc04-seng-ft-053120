import ACTIONS from '../actions/actions';

export default (state = [], action) => {
  if (action.type === ACTIONS.ADD_QUOTE) {
    return [...state, action.quote];
  }

  if (action.type === ACTIONS.REMOVE_QUOTE) {
    return state.filter(quote => quote.id !== action.quoteId);
  }

  if (action.type === ACTIONS.UPVOTE_QUOTE) {
    const quote = state.find(quote => quote.id);
    quote.votes += 1;
    return state;
  }

  if (action.type === ACTIONS.DOWNVOTE_QUOTE) {
    const quote = state.find(quote => quote.id);
    if (quote.votes > 0) {
      quote.votes -= 1;
    }
    return state;
  }

  return state;
}

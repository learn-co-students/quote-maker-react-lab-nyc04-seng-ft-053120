// TODO: Create action creators as defined in tests
import ACTIONS from './actions'

export const addQuote = (quote) => {
  return {
    type: ACTIONS.ADD_QUOTE,
    quote,
  }
}

export const removeQuote = (quoteId) => {
  return {
    type: ACTIONS.REMOVE_QUOTE,
    quoteId,
  }
}

export const upvoteQuote = (quoteId) => {
  return {
    type: ACTIONS.UPVOTE_QUOTE,
    quoteId,
  }
}

export const downvoteQuote = (quoteId) => {
  return {
    type: ACTIONS.DOWNVOTE_QUOTE,
    quoteId,
  }
}

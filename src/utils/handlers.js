import {
  typeHandler,
  defaultHandler,
  partialReturns,
  targetedActions,
  supportEntryActions
} from 'rosmaro-binding-utils';

export const makeHandler = handlerPlan => supportEntryActions(targetedActions()(partialReturns(typeHandler({defaultHandler})(handlerPlan))));

export const transparentHandler = makeHandler({});

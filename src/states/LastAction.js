import * as Flex from '@twilio/flex-ui';

const VIEW_UPDATE_FILTER = 'VIEW_UPDATE_FILTER'

export class Actions {
  static viewUpdateFilter = () => ({ type: VIEW_UPDATE_FILTER });
}

export function reduce(state = {}, action) {

  return {
    lastAction: action 
  }

}

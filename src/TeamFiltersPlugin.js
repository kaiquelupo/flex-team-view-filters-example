import { FlexPlugin } from 'flex-plugin';
import reducers, { namespace } from './states';
import { setTeamsFilters, applyDefaultFilters } from './teams/filters';
import { VERSION } from '@twilio/flex-ui';

const PLUGIN_NAME = 'TeamFiltersPlugin';

export default class TeamFiltersPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  async init(flex, manager) {

    this.registerReducers(manager);

    applyDefaultFilters(manager);
    setTeamsFilters(flex);

  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {

    console.log("@@@");
    console.log(manager.store);
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
  
}

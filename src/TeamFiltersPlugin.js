import React from 'react';
import { FlexPlugin } from 'flex-plugin';

import { setTeamsFilters } from './teams/filters';

const PLUGIN_NAME = 'TeamFiltersPlugin';

export default class TeamFiltersPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  async init() {
    await setTeamsFilters();
  }
  
}

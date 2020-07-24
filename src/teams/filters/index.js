import * as Flex from '@twilio/flex-ui';
import { getQueues } from '../../utils/sync';

const setTeamsFilters = () => {

    getQueues("").then((queues) => {

        let filters = [
            {
                id: "data.attributes.routing.skills",
                title: "Queue",
                fieldName: "queue",
                type: "multiValue",
                condition: "IN",
                options: queues.map((queue) => ({
                    value: queue.queue_name,
                    label: queue.queue_name,
                    default: false
                }))
            },
           
        ];
        
        Flex.TeamsView.defaultProps.filters = [
            Flex.TeamsView.activitiesFilter,
            ...filters,
        ];

    })

}

const applyDefaultFilters = (manager) => {

    const store = manager.store;

    store.subscribe(() => {

        const action = store.getState().default.view.lastAction;

        if(action.type === "VIEW_UPDATE_FILTER"){
        
            if(!action.payload.filterByPermission) {

            const { dispatch } = store;

            dispatch({
                type: action.type,
                payload: {
                ...action.payload,
                filters: [
                    ...action.payload.filters,
                    {
                    condition: "IN",
                    name: "data.attributes.teams",
                    values: "leads"
                    }
                ],
                filterByPermission: true
                }
            });

            }

        }

    });

}

export {
    setTeamsFilters,
    applyDefaultFilters
}
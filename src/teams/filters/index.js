import * as Flex from '@twilio/flex-ui';
import { getQueues } from '../../utils/sync';

const setTeamsFilters = () => {

    getQueues("").then((queues) => {

        const teamFilter = {
            id: "data.attributes.teams",
            title: "Team",
            fieldName: "team",
            type: "multiValue",
            condition: "IN",
            options: [
                {
                    value: "collections",
                    label: "Collections",
                    default: false
                },
                {
                    value: "leads",
                    label: "Leads",
                    default: false
                }
            ]
        }
        
        const queueFilter = {
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
        }
    
        Flex.TeamsView.defaultProps.filters = [
            Flex.TeamsView.activitiesFilter,
            teamFilter,
            queueFilter
        ];

    })

}

export {
    setTeamsFilters
}
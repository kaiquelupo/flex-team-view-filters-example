import * as Flex from '@twilio/flex-ui';
import { getQueues } from '../../utils/sync';
import React from 'react';

const capitalize = (str) => str[0].charAt(0).toUpperCase() + str[0].slice(1)

const setTeamsFilters = (flex, { defaultFilters }) => {

    const Input = () => <div>You can see just your team</div>;
    const CustomLabel = ({ currentValue }) => (
        <>{currentValue && currentValue.length ? `${capitalize(currentValue)}` : "Any"}</>
    );

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
            // {
            //     id: "data.attributes.teams",
            //     fieldName: "team",
            //     title: "Team",
            //     condition: "IN",
            //     options: [
            //         {
            //             value: "collections",
            //             label: "Collections",
            //             default: true
            //         },
            //         {
            //             value: "leads",
            //             label: "Leads",
            //             default: false
            //         }
            //     ],
            //     // customStructure: {
            //     //     field: <Input />,
            //     //     label: <CustomLabel />,
            //     //     default: true
            //     // }
            //     type: "multiValue"
            // }
        ];

        // const defaultUIFilters = defaultFilters.reduce((pr, cur) => {

        //     const { name, fieldName, title } = cur;

        //     filters = filters.filter(elem => elem.id !== name);

        //     if(cur.show) {
                
        //         return [...pr, {
        //             id: name,
        //             fieldName,
        //             title,
        //             condition: "IN",
        //             options: [
        //                 {
        //                     value: cur.values,
        //                     label: capitalize(cur.values),
        //                     default: true
        //                 }
        //             ],
        //             customStructure: {
        //                 field: <Input />,
        //                 label: <CustomLabel />
        //             }
        //         }];

        //     } else {

        //         return pr;

        //     }

        // }, []);
    
        Flex.TeamsView.defaultProps.filters = [
            Flex.TeamsView.activitiesFilter,
            ...filters,
            // ...defaultUIFilters
        ];

    })

}

export {
    setTeamsFilters
}
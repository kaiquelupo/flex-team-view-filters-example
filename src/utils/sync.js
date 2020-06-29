import * as Flex from '@twilio/flex-ui';

const getQueues = (expression) => {
    return new Promise((resolve) => {
        Flex.Manager.getInstance().insightsClient.instantQuery('tr-queue').then((q) => {
            
            q.on('searchResult', (items) => {

                const queues = Object.keys(items).map(workerSid => items[workerSid]);

                resolve(queues);
            });

            q.search(expression);
        });
    });
}

export {
    getQueues
}
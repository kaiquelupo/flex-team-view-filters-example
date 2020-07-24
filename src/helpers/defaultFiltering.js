
export const applyDefaultFilters = (manager) => {

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
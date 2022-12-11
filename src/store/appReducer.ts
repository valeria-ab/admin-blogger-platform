
export type InitialAppStateType = {
    currentSection: "Blogs" | "Posts"
    sectionTitle: string | null
};


export const setCurrentSection = (payload: "Blogs" | "Posts") => ({
    type: 'APP/SET-CURRENT-SECTION',
    payload,
} as const);

export const setSectionTitle = (payload: {sectionTitle: string} ) => ({
    type: 'APP/SET-SECTION-TITLE',
    payload,
} as const);

type ActionsType =
    ReturnType<typeof setCurrentSection>
    | ReturnType<typeof setSectionTitle>;

const initialState: InitialAppStateType = {
    currentSection: "Blogs",
    sectionTitle: null
};

export const appReducer = (
    state: InitialAppStateType = initialState,
    action: ActionsType,
): InitialAppStateType => {
    switch (action.type) {
        case 'APP/SET-CURRENT-SECTION':
            return { ...state, currentSection: action.payload };

        case 'APP/SET-SECTION-TITLE':
            return { ...state, sectionTitle: action.payload.sectionTitle };

        default:
            return state;
    }
};

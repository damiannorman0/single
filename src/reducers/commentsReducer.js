const initialState = {
	loading: false,
	comments: [],
	commentsHash: {

	}
};

export default (state = initialState, action = {}) => {
	switch (action.type) {
		case 'LOADING_ACTION':
			return {
				...state,
				loading: true
			};

		case 'GET_COMMENTS_ACTION':
			const commentsItemsHash = action.payload;
			const commentsItems = Object.values(action.payload || {});

			return {
				...state,
				loading: false,
				commentsHash: {
					...commentsItemsHash
				},
				comments: [...commentsItems]
			};

		case 'CREATE_COMMENTS_ACTION':
			const added = action.payload;
			const commentsHashAfterCreate = {
				...state.commentsHash,
				[added.id] : added
			};
			const commentsAfterCreate = Object.values(commentsHashAfterCreate || {});
			return {
				...state,
				loading: false,
				commentsHash: commentsHashAfterCreate,
				comments: commentsAfterCreate
			};

		case 'DELETE_COMMENTS_ACTION':
			const {commentsHash} = state;
			const deleted = Object.values(action.payload || {});
			deleted.forEach(item => {
				delete commentsHash[item];
			});
			const modifiedComments = Object.values(commentsHash || {});
			return {
				...state,
				loading: false,
				commentsHash: {
					...commentsHash
				},
				comments: [...modifiedComments]
			};
		default:
			return state
	}
}

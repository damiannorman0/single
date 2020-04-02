const axios = require('axios');

export const commentsAction = () => {
	return dispatch => {
		dispatch({
			type: 'LOADING_ACTION'
		});

		return new Promise((resolve, reject) => {
			axios.get('/comments').then(({data}) => {
				dispatch({
					type: 'GET_COMMENTS_ACTION',
					payload: data
				});
			}).catch(error => {
				reject(error);
			});
		});
	};
};

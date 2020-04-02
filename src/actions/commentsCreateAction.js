const axios = require('axios');

export const commentsCreateAction = (comment = {}) => {
	return dispatch => {
		dispatch({
			type: 'LOADING_ACTION'
		});

		return new Promise((resolve, reject) => {
			axios.post(`/comments/`, {
				headers: {
					'Content-Type': 'application/json',
					'content-type': 'application/json'
				},

				comment

			}).then(({data}) => {
				dispatch({
					type: 'CREATE_COMMENTS_ACTION',
					payload: data
				});
			}).catch(error => {
				reject(error);
			});
		});
	};
};

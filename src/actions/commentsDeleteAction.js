const axios = require('axios');

export const commentsDeleteAction = (id) => {
	return dispatch => {
		dispatch({
			type: 'LOADING_ACTION'
		});

		return new Promise((resolve, reject) => {
			axios.delete(`/comments/${id}`).then(({data}) => {
				dispatch({
					type: 'DELETE_COMMENTS_ACTION',
					payload: data
				});
			}).catch(error => {
				reject(error);
			});
		});
	};
};

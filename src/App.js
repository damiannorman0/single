import React, {useEffect, useRef, useState} from 'react';
import './App.scss';

import {useSelector, useDispatch} from 'react-redux';
import {commentsAction} from "actions/commentsAction";
import {commentsDeleteAction} from "actions/commentsDeleteAction";
import {commentsCreateAction} from "actions/commentsCreateAction";

function App(props) {
	const {comments} = useSelector(state => state.comments) || [];
	const dispatch = useDispatch();
	const emailRef = useRef(null);
	const bodyRef = useRef(null);
	const [errors, setErrors] = useState({});

	useEffect(() => {
		dispatch(commentsAction());
	}, [dispatch]);

	const commentsDisplay = comments.map(({id, email, body, time, date}, index) => {
		return (
			<div className="comment" key={`comment_${index}}`}>
				<div className="display-item">{email}</div>
				<button data-id={id}>Delete</button>
				<div className="display-item text">{body}</div>
				<div className="display-item">{date} at {time}</div>
			</div>
		);
	});

	const deleteHandler = ({target: {dataset = {}} = {}}) => {
		const {id} = dataset;
		dispatch(commentsDeleteAction(id));
	};

	const createHandler = ({target: {dataset = {}} = {}}) => {
		const {value: email = ''} = emailRef.current;
		const {value: body = ''} = bodyRef.current;

		if (email && body) {
			dispatch(commentsCreateAction({
				email,
				body,
			}));
			setErrors({});
		} else {
			setErrors({
				...errors,
				email: !email.length > 0,
				body: !body.length > 0
			});
		}
	};

	const {
	    email:emailError,
        body:bodyError
	} = errors;

    const errorMsg = emailError? 'Email address is required' : bodyError? 'Message is required' : '';
    const error = (emailError || bodyError) && (<div className="errorText">{errorMsg}</div>);
	const header = !comments.length? `Comments` : `Comments (${comments.length})`;

    return (
		<div className="App">
			<div className="create-comment">
				<h1>{header}</h1>
				<div className="form-item">
					<label htmlFor="email-input">Email</label>
					<input id="email-input" type="text" ref={emailRef}/>
				</div>
				<div className="form-item">
					<label htmlFor="comment-input">Comment</label>
					<textarea id="comment-input" ref={bodyRef}/>
				</div>
				<button onClick={createHandler}>Add Comment</button>
			</div>
			<div className="comments" onClick={deleteHandler}>
				{error}
				{commentsDisplay}
			</div>
		</div>
	);
}

export default App;

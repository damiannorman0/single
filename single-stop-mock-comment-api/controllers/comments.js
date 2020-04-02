const comments = {}

const addComment = comment => {
  const [date, time] = new Date().toLocaleString().split(', ')
  const id = new Date().getTime() + ''
  const commentWithDateAndTime = {
    ...comment,
    date,
    time,
    id
  }
  comments[id] = commentWithDateAndTime
  return commentWithDateAndTime
}

const removeComment = id => {
  delete comments[id]
  return {id}
}

const getComments = () => comments

module.exports = {
  addComment,
  getComments,
  removeComment
}

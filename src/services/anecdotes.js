import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const update = async (id, updateContent) => {
  const res = await axios.put(`${baseUrl}/${id}`, updateContent)
  return res.data
}

const create = async (content) => {
  const object = { content, votes: 0 }
  const res = await axios.post(baseUrl, object)
  return res.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, update, create }
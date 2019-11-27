import axios from 'axios'

class ApiService {

    constructor() {
        this.api = axios.create(
            {
                baseURL: process.env.REACT_APP_API_URI,
                withCredentials: true
            }
        )
    }

    async getAllTodo() {
        const allTodos = await this.api.get("/todos")
        return allTodos
    }

    async getOneTodo(productId) {
        const oneTodo = await this.api.get(`/todos/${productId}`)
        return oneTodo
    }

    async createTodo(todo) {
        const { title, body } = todo
        const oneTodo = await this.api.post('/todos', { title, body })
        return oneTodo.data
    }

    async deleteTodo(todoId) {
        const todoDelete = await this.api.delete(`/todos/${todoId}`)
        return todoDelete
    }

}

const apiService = new ApiService()

export default apiService
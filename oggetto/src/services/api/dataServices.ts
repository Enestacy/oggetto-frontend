import {get,
} from './baseRequests'

export const getTags = () => get('tags')
export const getTasks = () => get('tasks')
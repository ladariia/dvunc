import { $host, $authHost } from './index';

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type')
    return data
}

export const fetchFormats = async () => {
    const { data } = await $host.get('api/format')
    return data
}

export const fetchCourses = async (typeTypeId) => {
    const { data } = await $host.get('api/course', {
        params: {
            typeTypeId
        }
    })
    return data
}

export const fetchCourse = async (course_id) => {
    const { data } = await $host.get('api/course/' + course_id)
    return data
}

export const createCourse = async (course) => {
    const { data } = await $authHost.post('api/course', course)
    return data
}
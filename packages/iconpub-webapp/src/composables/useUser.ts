import { axiosInstance, useAxios } from '@/utils/apis'

const { data, isFinished } = useAxios('/use', axiosInstance)

export { data, isFinished }

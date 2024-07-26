import api from "./instance";
// api 모듈화
export async function getComputerApi(id) {
    let response = null;

    try {
        response = await api.get(`/computer/${id}`)
    } catch(e) {
        console.error(e);
        response = e.response.data;
    }

    return response;
}


export async function getComputerListApi(id) {
    let response = null;

    try {
        response = await api.get(`/computers`, {params})
    } catch(e) {
        console.error(e);
        response = e.response.data;
    }

    return response;
}
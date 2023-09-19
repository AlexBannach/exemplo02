import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

export async function fetchUsers(){

    try{

        const response = await axios.get(`${baseURL}/users`);

        return response.data;
        
    }catch (error){
        console.log("Erro ao buscar usuários ---->", error)

    }
}

export async function fetchPosts(){

    try{

        const response = await axios.get(`${baseURL}/posts`);

        return response;
    }catch (error){
        console.log("Erro ao buscar usuários ---->", error)

    }
}





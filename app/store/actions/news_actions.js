import {
    GET_NEWS
} from '../types';

import axios from 'axios';
import { FIREBASEURL,convertFirebase } from "../../../utils/misc";

export function getNews(){

    // const request = axios({
    //     method:'GET',
    //     url: `${FIREBASEURL}/news.json`
    // })

    const request = fetch(`${FIREBASEURL}/news.json`,{
        method: "GET"
    })
    .then(response => response.json())
    .then(result => {
        const articles = [];

        for(let key in result){
            articles.push({
                ...result[key],
                id: key
            })
        }
        console.log(articles)
        return articles;
    }).catch(e=>{
        return false
    })

    console.log(request)

    return {
        type:GET_NEWS,
        payload: request
    }

}
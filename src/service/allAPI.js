import { commonAPI } from "./commonAPI"
import {serverURL} from "./serverURL"
//upload a video 
export const uploadVideo = async (reqBody)=>{
    //make post http request to http://localhost:4000/videos to add video in json server and return response to Add component
    return await commonAPI("POST",`${serverURL}/videos`,reqBody)
}

//get all videos from json server
export const getAllVideos = async ()=>{
    //make get http request to http://localhost:4000/videos to get all video in json server and return response to View component
    return await commonAPI ("GET",`${serverURL}/videos`,"")
}


// get a video from json server

export const getAVedio = async (id)=>{
       //make get http request to http://localhost:4000/videos/id to get a video in json server and return response to VideoCard component
        return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}

// remove a video from json server 

export const deleteVideo = async (id)=>{
           //make delete http request to http://localhost:4000/videos/id to remove a video in json server and return response to VideoCard component
        return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}

// store watching vedio history to json server

export const addToHistory = async (videoDetails)=>{
        //make post http request to http://localhost:4000/videos/id to add a video in json server and return response to VideoCard component
        return await commonAPI("POST",`${serverURL}/history`,videoDetails)}


// get all watching video history from json server
export const getAllHistory = async ()=>{
    // make get http request to http://localhost:4000/history to get video history from json server and return response to watch history component
    return await commonAPI("GET",`${serverURL}/history`,"")
}
// delete watching video history from json server

export const deleteHistory = async (id)=>{
    //make put http request to http://localhost:4000/history/id to delete video history from json server and return response to watch history component
 return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}

// add category to change server
export const addCategory = async (reqBody)=>{
    //make post http request to http://localhost:4000/categories to add category in json server and return response to Category component
    return await commonAPI("POST",`${serverURL}/categories`,reqBody)
}
 
// get category to change server
export const getAllCategory = async ()=>{
    //make get http request to http://localhost:4000/categories to get all category in json server and return response to Category component
    return await commonAPI("GET",`${serverURL}/categories`,"")
}

// remove a category from json server 

export const deleteCategory = async (id)=>{
    //make delete http request to http://localhost:4000/categories/id to delete a particular category from json server and return response to Category component
 return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})
}


// delete watching video history from json server

export const updateCategory = async (id,body)=>{
    //make delete http request to http://localhost:4000/categories/id to update a particular category from json server and return response to Category component
 return await commonAPI("PUT",`${serverURL}/categories/${id}`,body)
}






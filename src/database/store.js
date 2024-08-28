
import conf from "../conf/conf";
import { Client, ID ,Databases,Storage, Query } from "appwrite";


export class DatabaseService {
    client = new Client()
    databases;
    store ;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.projectId)
        this.databases = new Databases(this.client)   
        this.store = new Storage(this.client) 
    }

    async createNote({title ,slug, content ,image  , userId }){
        try {
            return await this.databases.createDocument(
                conf.notesDBId,
                conf.noteCollection,
                slug,
                // ID.unique()
                {
                    title ,
                    content ,
                    image,
                    userId 
                }
            )
            
        } catch (error) {
            console.log("create note error " , error)
        }

    }

    async updateNote(slug ,{title , content , image  }){
        try {
            return await this.databases.updateDocument(
                conf.notesDBId ,
                conf.noteCollection ,
                slug,
                // ID.unique(),
                {
                    title,
                    content,
                    image 
                }
            )
        } catch (error) {
            console.log("update note error " , error)
        }

    }

    async deleteNote(slug){
        try {
            await this.databases.deleteDocument(
                conf.notesDBId ,
                conf.noteCollection ,
                slug
            )
            return true 
        } catch (error) {
            console.log("delete note error ", error)
            return false 
        }
    }

    async getNote(slug){
        try {
              return await this.databases.getDocument(
                conf.notesDBId ,
                conf.noteCollection ,
                slug
              )
        } catch (error) {
            console.log("get note error " , error)
        }
    }

    async getNotes(){
        try {
            return await this.databases.listDocuments(
                conf.notesDBId ,
                conf.noteCollection 
                [
                    Query.equal ('userId', userId)
                ]
            )
        } catch (error) {
            console.log("all note error" , error)
        }
    }

    //image file upload 

    async uploadFile(){
        try {
            return await this.store.createFile(
                conf.bucketId ,
                ID.unique(),
                file

            )
        } catch (error) {
            console.log("upload file error " , error)
        }
    }

    async deleteFile(fileId){
        try {
             await this.store.deleteFile(
                conf.bucketId ,
                fileId
             )
        } catch (error) {
            console.log("delete file error " , error)
        }
    }

}


const databaseService = new DatabaseService()
export default databaseService
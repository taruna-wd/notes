import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";



export class AuthService  {
    client = new Client();
    account;
    constructor (){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.projectId)
        this.account = new Account(this.client)    
    }
   // create account user 
   async createAccount({ name, email, password }) {
    try {
        const userAccount = await this.account.create(
            ID.unique(), // User ID
            email,       // Email
            password,    // Password
            name         // Name (optional)
        );
        
        return userAccount;

    } catch (error) {
        throw error;
    }
}


    // login account user
    async login({email,password}){
        try {
          return  await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }


    async getCurrentUser(){
        try {
            return await this.account.get();
            
        } catch (error) {
            throw error
        }
        return null
    }

   // logout account user
    async logout(){
        try {
            await this.account.deleteSession('current')
        } catch (error) {
            console.log("logout error " , error)
        }
    }
}
const authService = new AuthService()

export default authService






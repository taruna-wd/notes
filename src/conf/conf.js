
const conf ={
       appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL) ,
       projectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID) ,
       notesDBId : String(import.meta.env.VITE_APPWRITE_NOTES_DATABASE_ID) ,
       noteCollection : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID) ,
       bucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID) 
}

export default conf
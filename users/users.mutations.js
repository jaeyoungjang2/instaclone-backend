import client from "../client";

export default {
    Mutation: {
        createAccount: async (_, {             
            firstName, lastName, username, email, password,
         }) => {
             // cheeck if username or email are already on DB.
             const exsitingUser = await client.user.findFirst({
                 where: {
                     OR: [
                         {
                             username,
                         },
                         {
                             email,
                         }
                     ]
                 }
             });
             console.log(exsitingUser);
             // hash password
             // save and return the user
             // 
         }
    }
}
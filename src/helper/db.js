import { User } from "../models/user";
import mongoose from "mongoose";
export const connectDb = async () => {

    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: 'work_manager',

        });
        console.log("db connect...");

        const uuser = new User({
            name: "prash",
            email: "prassh@gmail.com",
            password: "prash444",
            mobileNum: 67788000
        })

        await uuser.save();
        console.log("user created")

        console.log("con " + connection.host)
    }
    catch (error) {
        console.l; og("failed connection")
    }

}
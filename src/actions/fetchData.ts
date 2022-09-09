import dotenv from "dotenv";
import fetch from 'cross-fetch';

dotenv.config();



export const fetchData = async (id?: string) => {

    // define dockets url
    const url = `https://mapi.uat.stack.docketbook.com.au/v1/organisations/da07c78c-8881-4627-b15f-3dd67fbdb1bc/groups/053a217d-3e7d-4034-99c4-d731a456df53/dockets${id ? '/' + id : ''}`;

    const headers = {
        "db-shared-key-id": process.env.DB_SHARED_KEY_ID!,
        "db-shared-key": process.env.DB_SHARED_KEY!
    }

    let data: any;

    await fetch(url, { method: 'GET', headers: headers})
        .then(res => {
            return res.json();
        })
        .then(json => {
            // Do something with the returned data.
            data = json;

        })
        .catch(err => {
            console.error(err);
        });
    

    return data

}
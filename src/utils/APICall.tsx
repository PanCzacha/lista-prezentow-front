export const APICall = async (endpoint: string, method = "GET", body?: object | [] | string): Promise<Response> => {
    if(method === "GET") {
        return await fetch(`http://localhost:3001/${endpoint}`);
    }
    else if(method === "POST" || "PATCH" || "PUT")
    {
        return await fetch(`http://localhost:3001/${endpoint}`, {
            method: `${method}`,
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(body),
        });
    }
    else
    {
        return await fetch(`http://localhost:3001/${endpoint}`, {
            method: `${method}`
        })
    }

}


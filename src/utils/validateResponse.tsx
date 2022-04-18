export const validateResponse = async (res: Response): Promise<void> => {
    if(res.status === 400 || res.status === 500){
        const error = await res.json();
        alert (`An error occured: ${error.message}`);
        throw new Error(error.message)
    }
}

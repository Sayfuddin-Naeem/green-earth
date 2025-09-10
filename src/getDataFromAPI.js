export const getDataFromAPI = async (apiUrl) => {
    try {
        const res = await fetch(apiUrl);
        if(!res.ok){
            throw new Error('Network response was not ok');
        }

        const data = await res.json();
        return data;
    } catch (err) {
        console.log("Fetch error:", err);
        
        return [];
    }
};
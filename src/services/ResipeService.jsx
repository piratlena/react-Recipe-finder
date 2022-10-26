
 export const  ApiBase = 'https://forkify-api.herokuapp.com/api/v2/recipes';
 export const  API_KEY = process.env.REACT_API_API_KEY;
 export const  RES_PER_PAGE = 10;

    
 const   getResourse = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json()
    }

const    getAllRecipes = (query) => {
        return this.getResourse(`${this._apiBase}?search=${query}&${this._apiKey}`)
    }

const    getRecipe = (id) => {
        return this.getResourse(`${this._apiBase}/${id}?${this._apiKey}`)
    }


export const TOGGLE_FAVORITE ="TOGGLE_FAVORITE"

export const toogleFavorite =(id)=>{
    return {
        type:TOGGLE_FAVORITE,
        movieId: id
    };
}
import React, { useState } from 'react'
import { Heart, HeartPulse, Search, SoupIcon } from 'lucide-react'

const getFirstTwovalues = (Arr)=>{
  return[Arr[0],Arr[1]]
}

function RecipeCard({recipe,bg,bage}) {
  const [isFavorite,setisFavorite]=useState(localStorage.getItem("favorites").includes(recipe.label))

  const addRecipeToFavorites = ()=>{
    let favorites = JSON.parse(localStorage.getItem("favorites")) || []

    const recipeAlreadyInFavorites = favorites.some((favor)=>favor.label==recipe.label)

    if(recipeAlreadyInFavorites){
      favorites= favorites.filter((favor)=>favor.label!==recipe.label)
      setisFavorite(false)
    }else{
      favorites.push(recipe)
      setisFavorite(true)
    }
   localStorage.setItem("favorites",JSON.stringify(favorites))
  }


  const getTwoarray = getFirstTwovalues(recipe.healthLabels)

  return (
    <div>
      <div className={`flex flex-col rounded-md ${bage} relative p-3`}>
                <a href={`https://www.youtube.com/results?search_query=${recipe.label}`} alt="">

                    <img src={recipe.image} alt="recipe image" className='rounded-md w-full h-full object-cover cursor-pointer transition duration-500' >
                    
                    </img>
                    
                    <div onClick={(e)=>{
                          e.preventDefault()
                          addRecipeToFavorites()
                        }} className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer">
                      {isFavorite &&  <Heart  size={20} className="fill-red-600" ></Heart> } 
                       {!isFavorite && <Heart  size={20} ></Heart>}
                    </div>

                </a>
                <div className="flex mt-2">
                    <p className="font-bold tracking-wide">{recipe.label}</p>
                </div>
                <p className="my-2">{recipe.cuisineType}</p>

                <div className="flex gap-2 mt-auto">
                  {
                    getTwoarray.map(function(two){
                      return(
                        <div className={`flex gap-1 ${bg} items-center p-1 rounded-md`}>
                    <HeartPulse size={14} ></HeartPulse>
                    <span className="text-sm tracking-tighter font-semibold" >{two}</span>
                    </div>

                      )
                    })
                  }
                    {/* // <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">

                    // <HeartPulse size={14} ></HeartPulse>
                    // <span className="text-sm tracking-tighter font-semibold" >Gluten-free</span>
                    // </div> */}
                    {/* <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
                    <HeartPulse size={14} ></HeartPulse>
                    <span className="text-sm tracking-tighter font-semibold" >Heart-healthy</span> */}

                    {/* // </div> */}

                </div>


            </div>
    </div>
  )
}

export default RecipeCard

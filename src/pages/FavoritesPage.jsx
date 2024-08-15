import React from 'react'
import RecipeCard from '../components/RecipeCard'
import { getRandomColor } from '../utiles/randomColors'

function FavoritesPage() {
  const fav =JSON.parse(localStorage.getItem("favorites")) || []
  return (
    <div  className="bg-[#faf9fb] flex-1 p-10 min-h-screen  ">
      <div  className="max-w-screen-lg mx-auto">

     <p className="font-bold text-3x1 md:5x1 my-4">My favorites</p>


     {/* {fav.length ==0 && (
      <div className="h-[80vh]  flex flex-col items-center gap-4" >

        <img src="/404.svg" alt="svg" className="h-3/4 " ></img>


      </div>
     )} */}

  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >

      
          {
            fav.map((recipe)=>{
             return <RecipeCard key={recipe.label} recipe={recipe} {...getRandomColor()} ></RecipeCard>
            })
          }
         
        </div>

      
     

      </div>
    </div>
  )
}

export default FavoritesPage

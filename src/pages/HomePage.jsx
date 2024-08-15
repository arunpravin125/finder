import React, { useEffect, useState } from 'react'
// import { Heart, HeartPulse, Search, SoupIcon } from 'lucide-react'
import { Search } from 'lucide-react'
import RecipeCard from '../components/RecipeCard'
import { getRandomColor } from '../utiles/randomColors'



function HomePage() {
    
    
// const API_ID="32451e96"
// const API_KEY="c2f4fb512cae0cbef5deb4c45a0083ca"

const [recipe,setrecipe]=useState([])
const [loading,setloading]=useState()

const handleSearch = (e)=>{
    e.preventDefault()
    fetchRecipe(e.target[0].value)
}


const fetchRecipe = async (search)=>{
setloading(true)
setrecipe([])
try {
    const res = await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${API_ID}&app_key=${API_KEY}&q=${search}&type=public`)
    const data =await res.json()
    console.log(data.hits)
    console.log("success")
    setrecipe(data.hits)
} catch (error) {
    console.log("error:",error)
    
}finally{
    setloading(false)

}
}

useEffect(()=>{
    fetchRecipe("chicken")
},[])

  return (
    <div className="bg-[#faf9fb] p-10 flex-1 ">
        <div className="max-w-screen-lg mx-auto">
            <form  onSubmit={handleSearch}  >
                <label  className="input shadow-md flex items-center gap-2">
                <Search size={24}/>
                <input type="text" className="text-sm md:text-md grow" placeholder='what do you want to cook today?' ></input>
                </label>
            </form>
            <p className="font-bold text-3xl md:text-5xl mt-4">
                Recommended Recipes
            </p>
            <p className="text-slate-500 font-semibold ml-1 my-2 text-sm -tracking-tight" >Popular choices</p>


            <div className="grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
            {/* <div className="flex flex-col rounded-md bg-[#ecf7d4] relative p-3">
                <a href="" alt="">

                    <img src="" alt="recipe image" className='rounded-md w-full h-full object-cover cursor-pointer' >
                    
                    </img>
                    
                    <div className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer">
                        <Heart size={20} className="hover:fill-red-400" ></Heart>
                    </div>

                </a>
                <div className="flex mt-2">
                    <p className="font-bold tracking-wide">Roasted Chicken</p>
                </div>
                <p className="my-2">Trurkish kitchen</p>

                <div className="flex gap-2 mt-auto">
                    <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">

                    <HeartPulse size={14} ></HeartPulse>
                    <span className="text-sm tracking-tighter font-semibold" >Gluten-free</span>
                    </div>
                    <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
                    <HeartPulse size={14} ></HeartPulse>
                    <span className="text-sm tracking-tighter font-semibold" >Heart-healthy</span>

                    </div>

                </div> */}

{/* 
            </div> */}
            {!loading && recipe.map(({recipe},index)=>{
                return(
                    <RecipeCard recipe={recipe} key={index} {...getRandomColor()} ></RecipeCard>
                )
            })}
            {/* <RecipeCard></RecipeCard> */}
            {loading && [...Array(9)].map((_,index)=>{
                return(
                    <div className="flex w-52 flex-col gap-4">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                  </div>
                  
                )
            }) }
   
            </div>

        </div>
       
      
    </div>
  )
}

export default HomePage

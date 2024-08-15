const COLORS={
    green:{
        bg:"bg-[#bcf2ca]",
        bage:"bg-[#a2dbb0]"
    },
    red:{
        bg:"bg-[#f99d9d]",
        bage:"bg-[#db9d9d]"
    },
    blue:{
        bg:"bg-[#c7c1f4]",
        bage:"bg-[#a8a0e5]"
    }
}

export const getRandomColor = ()=>{
    const getCOLORS = Object.keys(COLORS)
    const getRandom = Math.floor(Math.random()*getCOLORS.length)
    const getColor = getCOLORS[getRandom]
    return COLORS[getColor]
}
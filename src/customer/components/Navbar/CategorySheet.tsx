import React from 'react'
import { peripheralsLevelThree } from '../../../data/category/level three/peripheralsLevelThree'
import { peripheralsLevelTwo } from '../../../data/category/level two/peripheralsLevelTwo'
import { componentsLevelThree } from '../../../data/category/level three/componentsLevelThree'
import { componentsLevelTwo } from '../../../data/category/level two/componentsLevelTwo'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { accessoriesLevelTwo } from '../../../data/category/level two/accessoriesLavelTwo'
import { storageLevelTwo } from '../../../data/category/level two/storageLevelTwo'
import { storageLevelThree } from '../../../data/category/level three/storageLevelThree'
import { accessoriesLevelThree } from '../../../data/category/level three/accessoriesLevelThree'

const categoryTwo: { [key: string]: any[] } = {

    men: peripheralsLevelTwo,
    women: componentsLevelTwo,
    electronics:accessoriesLevelTwo,
    home_furniture:storageLevelTwo,


}

const categoryThree: { [key: string]: any[] } = {
    men: peripheralsLevelThree,
    women: componentsLevelThree,
    electronics:accessoriesLevelThree,
    home_furniture:storageLevelThree,

}

const CategorySheet = ({ selectedCategory,toggleDrawer,setShowSheet }: any) => {

const navigate=useNavigate()


    const childCategory = (category: any, parentCategoryId: any) => {
        return category.filter((child: any) => {
            // console.log("Category", parentCategoryId, child)
            return child.parentCategoryId == parentCategoryId
        })

    }
    const handleCategoryClick = (category:string) => {
        if(toggleDrawer){
            toggleDrawer(false)()
        }
        if(setShowSheet){
            setShowSheet(false)
        }
        
        navigate("/products/"+category)
    }
    return (
        <Box className='bg-white shadow-lg  lg:h-[500px] overflow-y-auto'>
            <div className=' flex text-sm flex-wrap'>
                {categoryTwo[selectedCategory]?.map((item: any,index) => 
                <div  key={item.name} className={`p-8 lg:w-[20%] ${index%2==0?"bg-slate-50":"bg-white"}`}>

                    <p className='text-[#00927c] mb-5 font-semibold'>{item.name}</p>

                    <ul className='space-y-3'>
                        {childCategory(categoryThree[selectedCategory], item.categoryId)?.map((item: any) => <div key={item.name}>

                            <li 
                            onClick={()=>handleCategoryClick(item.categoryId)}
                            className='hover:text-[#00927c] cursor-pointer'>
                                {item.name}
                            </li>

                        </div>)}
                    </ul>


                </div>)}
            </div>
        </Box>
    )
}

export default CategorySheet
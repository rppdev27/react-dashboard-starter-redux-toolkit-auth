import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import DetailProduct from '../pages/Product'


function Category(){

    useEffect(() => {
        AOS.init();
    }, [])

    const [categoryList, setCategoryList] = useState(
        [
            {
              name: 'pernikahan',
              icon: 'https://asset.menica.pro/menicav4/kado-pernikahan-icon-ungu.svg',
              link: 'pernikahan',
            },
            {
              name: 'teman',
              icon: 'https://asset.menica.pro/menicav4/kado-teman-icon-ungu.svg',
              link: 'teman',
            },
            {
              name: 'pasangan',
              icon: 'https://asset.menica.pro/menicav4/kado-pasangan-icon-ungu.svg',
              link: 'pasangan',
            },
            {
              name: 'Ibu & Ayah',
              icon: 'https://asset.menica.pro/menicav4/kado-tetangga-icon-ungu.svg',
              link: 'orangtua',
            },
            {
              name: 'ultah',
              icon: 'https://asset.menica.pro/menicav4/kado-ulangtahun-icon-ungu.svg',
              link: 'ultah',
            },
            {
              name: 'guru',
              icon: 'https://asset.menica.pro/menicav4/kado-guru-icon-ungu.svg',
              link: 'guru',
            },
          ]
    );

      // const userID = 123;
      
      // useEffect(() => {

      //     async function fetchData(){
              
      //         const response = await fetch('https://api.invitazion.com/kado-list-99');
      //         const resData = await response.json();

      //         setCategoryList(resData[0]);

      //     }

      //     fetchData();

      // },[])

    return (
        <>
            <div className="font-DM font-semibold text-md text-[#976bcf]">
                    Untuk Apa atau Siapa?
            </div>

            <div className="grid auto-rows-fr grid-cols-3 sm:grid-cols-3">
            {
                categoryList.map((item)=>(
                  <Link to={`/product/${item.link}`}>
                  <div className="m-5 shadow hover:shadow-lg h-full flex flex-col px-2 py-2 rounded-md items-center justify-center">
                      <div className="mx-auto">
                          <img src={item.icon} style={{ minHeight: 60 }}/> 
                      </div>
                      <div className="capitalize font-DM text-xs mt-2 font-semibold text-[black]">
                          {item.name}
                      </div>
                  </div>
                  </Link>
               ))
              }
            </div>
        </>
    )
}

export default Category
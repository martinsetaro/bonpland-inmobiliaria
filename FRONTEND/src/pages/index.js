import Layout from '@/components/Layout'
import React from 'react'
import Home from '@/components/Home'
import Filtros from '@/components/Filtros'


const index = () => {


  return (
    <Layout
    titulo="BonPland Inmobiliaria"
    >
      <Home/>
      <Filtros/>
    </Layout>
  )
}

export default index

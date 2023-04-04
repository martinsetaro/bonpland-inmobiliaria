import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'
import Home from '@/components/Home'
import ListadoPropiedades from '@/components/listadoPropiedades'

const index = () => {


  return (
    <Layout
    titulo="BonPland Inmobiliaria"
    >
      <Home/>
      <ListadoPropiedades/>
    </Layout>
  )
}

export default index

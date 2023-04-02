import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'
import Home from '@/components/Home'

const index = () => {


  return (
    <Layout
    titulo="BonPland Inmobiliaria"
    >
      <Home/>
    </Layout>
  )
}

export default index

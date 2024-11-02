import React, { Suspense } from 'react'
import classes from './page.module.css'
import Link from 'next/link'
import MealsGrid from '@/components/meals/melas-grid'
import { getMeals } from '@/lib/meals'

async function  Meals(){
  const meals = await getMeals();
  return <MealsGrid meals={meals}/>
}

const MealsPage = () => {

  
  return (
    <>

<header className={classes.header}>
    <h1>Delicious meals, created <span className={classes.highlight}>by you</span></h1>
    <p>Choose your favourite recipe and cook it yourself.</p>
    <p className={classes.cta}>
      <Link href='/meals/share'>Share Your Favourite Recipe</Link>
    </p>
</header>
<main className={classes.main}>
  <Suspense fallback={<p className={classes.loading}>Loading Data..</p>}><Meals/></Suspense>
  
</main>
    </>
  )
}

export default MealsPage
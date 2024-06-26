
import React from 'react'
import '../styling/LecturePlanStyle.css'
import RecipeComponent from './RecipeComponent'
import LearningOutcomeComponent from './LearningOutcomeComponent'
import Header from './header'


const LecturePlan = ({lectureObject}) => {

  const image = require('../resources/images/ukensplan.png')
  const image2 = require('../resources/images/ukensplan2.jpg')

  return (


    <article className='plan'>
      <div className='headerContainer'>
        <Header />
      </div>

      <div className='lectureImage'>
        <img src={image} alt='something' />
      </div>

      <section className='content'>

        <div className='learningOutcome-Component'>
          <LearningOutcomeComponent learningOutcome={lectureObject.learningOutcome}/>
        </div>


        <div className='lectureImage'>
          <img src={image2} alt='Lecture' />
        </div>
        <div className="recipeComponent">
          <RecipeComponent lectureObject={lectureObject}/>
        </div>
      </section>

    </article>

  );


}

export default LecturePlan;
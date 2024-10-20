import React from 'react'
import './Home.css'
import ImgSecure from './notestore.gif'
import Imgbrain from './computer.gif'
import Imglike from './heart.gif'
import ImgSmart from './smart.gif'
import FeatureCard from './../../components/featurecard/featurecard'
import {Link} from "react-router-dom"
const FEATURE=
[
  {
    featureimg:ImgSecure,
    featuredescription:"Note It Down, Stay Ahead."
  },
  {
         featureimg:Imgbrain,
            featuredescription:"For the Organized Mind – Effortless Note-Taking."
  },
  { 
    featureimg:Imglike,
            featuredescription:"From Ideas to Action – Keep It All in One Place."

  },
  {
    featureimg:ImgSmart,
    featuredescription:"Quick Notes, Smarter Living."
  }
]

function Home() {
  return (
    <div>
      <h1 className='text-center text-primary heading'>  Brain Box  {"    "}  🗳️ </h1>
      <p className='text-center text-black '>
        {"  "}{"  "}
        <span className='highlight text-black tagline-highlight'>Never Miss a Thought – Write, Save, and Succeed 🧠</span>
      </p>
      <div>
      <h2 className='text-center text-secondary tagline'>
      Capture Your Ideas, Anytime, Anywhere.
        </h2>
        <div className='feature-container'>
          {FEATURE.map((feature, index) => {
            const { featureimg, featuredescription } = feature;
            return (
              <FeatureCard
                key={index} // Correct key prop for mapped elements
                featureimg={featureimg}
                featuredescription={featuredescription}
              />
            );
})
}
          
        </div>
      </div>

      <div className='btn-container'>
        <Link to="/Add">
        <button className='btn btn-primary'>New Note📩
        </button>
        </Link>
        <Link to="/Show">
        <button className=' btn btn-secondary'>Check Notes⭐ </button>
        </Link>
      </div>
    </div>
    
  )
}

export default Home
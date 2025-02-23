// import { Link } from "react-router-dom";
import React from 'react';
import Card2 from '../V&D card/v&dCard';
import './content.css';
import Logo from '../../assets/image1.jpg';
import Logo2 from '../../assets/1st.png';
import Logo3 from '../../assets/2nd.png';
import Logo4 from '../../assets/3rd.png';
import Logo5 from '../../assets/4th.png';
import Card from '../C&P card/card';


const Content = () => {
  return (
    <>
      <section>
        <div className='curved-container'>
          <div className="content-left">
            <h1>Inspiring children to reach their full potential through the power of education.</h1>
            <button className="movement-btn">Join the Movement</button>
          </div>
          <div className='curved-container2'>
            <img src={Logo} alt="Students learning" />
          </div>
        </div>
      </section>
      <section>
        <div className='info'>
          <p>
          We are dedicated to transforming the lives of underprivileged children by providing 
impactful education tailored to their unique needs and ensuring access to essential 
nourishment that fosters their growth and development. We passionately promote a 
sustainable and pollution-free environment, recognizing our responsibility to protect 
the planet for future generations.
          </p>
          <p>
          Through our initiatives, we create abundant opportunities for personal and 
academic growth, facilitating hands-on learning experiences and inspiring 
community engagement. In doing so, we pave the way for a brighter future, where 
every child has the chance to thrive and make a positive impact on society.
          </p>
        </div>
      </section>
      

      <div class="container">
    <h2 class="gradient-text">What We Do</h2>
</div>
      <div className="image-container">
    <img src={Logo2} alt="1st logo" />
    <img src={Logo3} alt="2nd logo" />
    <img src={Logo4} alt="3rd logo" />
    <img src={Logo5} alt="4th logo" />

</div>

<div class="container">
    <h2 class="gradient-text"> Campaigns & Programs</h2>
</div>

<section>
<Card/>
</section>



      <div class="container">
    <h2 class="gradient-text">Join a Cause</h2>
</div>
<section>
<Card2/>
</section>






    </>
  );
};

export default Content;
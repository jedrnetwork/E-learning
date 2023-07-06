import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';
import { Link } from 'react-router-dom';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Dusome Ltd" text="Introducing Dusome Ltd., a beacon of hope illuminating the educational landscape in the enchanting yet challenged nation of Burundi. With unwavering dedication, we strive to unravel the knots of educational disparity, empowering the young minds of tomorrow. Through our transformative initiatives, we paint a vibrant tapestry of dreams realized and futures ignited. Together, we plant seeds of knowledge, nurturing a garden of possibilities that transcends borders and defies expectations. Join us on this awe-inspiring journey as we sow the seeds of change, casting a radiant light upon the path to a brighter future for all. #DusomeLtd #EmpoweringEducation #IgnitingDreams" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p> <Link to= "/signup" className='library'> Explore the Library<pre>&gt;&gt;</pre></Link></p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
  </div>
);

export default WhatGPT3;

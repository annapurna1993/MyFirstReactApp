import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function AboutPage() {
  return <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a react application to leave a feedback.</p>
        <p>Version: 1.0.0 </p>
        <p>
           <Link to='/'>Back To Home</Link>
        </p>
      </div>
  </Card>;
}

export default AboutPage;

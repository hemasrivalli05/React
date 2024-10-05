import React from 'react';
import { useNavigate} from 'react-router-dom';

const Companies = () => {
  let navigate = useNavigate();

  let companyImage = 'https://media.licdn.com/dms/image/C5112AQFloboBvqHOgQ/article-cover_image-shrink_600_2000/0/1520177551141?e=2147483647&v=beta&t=CTfbPSPf8O3M7zJ2vKxVgKGE4bmAmCNGeliseRWl_Ec'; // Replace with actual image URL

  return (
    <div className="companies">
      <h2>Our Partner Companies</h2>

      <div id="gal_blk">
        <img src={companyImage} alt="Company" className="company-image" />
      </div>

      <div className="navigation-buttons">
        <button onClick={() => navigate(-1)}>Go Back</button>
         </div>
    </div>
  );
};

export default Companies;

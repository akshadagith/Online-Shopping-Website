import React from 'react';
import './Tablet.css'; 
import TabletCard from '../../components/TabletCard/TabletCard';
import Navbar from '../../components/Navbar/Navbar';

const tabletsData = [
  {
    id: 1,
    name: 'Galaxy Tab A9 (Wi-Fi, 4GB RAM)',
    content: '22.05cm (8.7”) LCD display, 60 Hz Refresh Rate, 800 x 1340 (WQXGA),MediaTek Helio | G99 Processor',
    price:  129999.00 ,
    imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-x110ndbains/gallery/in-galaxy-tab-a9-sm-x110-sm-x110ndbains-thumb-538450519?$240_240_PNG$',
  },
  {
    id: 2,
    name: 'Galaxy Tab A9+ (5G, 4GB RAM)',
    content: 'Engaging viewing experience with large 27.82cm (11.0") LCD display, 90 Hz Refresh Rate, 1920 x 1200 (WQXGA),Qualcomm Snapdragon SM6375 Processor',
    price: 22999.00,
    imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-x210ndbains/gallery/in-galaxy-tab-a9-plus-sm-x210-482955-sm-x210ndbains-thumb-538734173?$240_240_PNG$',
  }
];

function Tablet() {
  return (
    <div className="tablet-container">
      <Navbar />
      <h1 className="tablet-heading">Galaxy Tab A9 | Tab A9+</h1>
      <img src="https://images.samsung.com/is/image/samsung/p6pim/in/feature/164866028/in-feature-galaxy-tab-a-538734898?$FB_TYPE_A_JPG$"  className='main-container'/>
      <p >*Image simulated for illustrative purposes.**Storage options and availability may vary by country or region.***Actual storage availability may vary depending on pre-installed software.****Two memory and storage options are available for Galaxy Tab A9 and Tab A9+: 4GB memory and 64GB storage, 8GB memory and 128GB storage.*****MicroSD card sold separately. All models support microSD cards with up to 1TB storage. External memory can be used to store media (photos, video and music files), but not applications. Availability may vary by country and manufacturer.</p><br/>
      <div className="tablet-cards-container">
        {tabletsData.map((tablet) => (
          <TabletCard key={tablet.id} tablet={tablet} />
        ))}
      </div>
    </div>
  );
}

export default Tablet;

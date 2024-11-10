import React from 'react';
import historyImage from '../images/histroy.webp';

const History = () => {
  const containerStyle = {
    backgroundColor: '#ffc0cb',
    padding: '20px',
  };

  const imageStyle = {
    maxWidth: '100%', // Ensure the image doesn't exceed the container width
    marginTop: '20px', // Adjust the margin as needed
  };

  return (
    <div className="container-fluid" style={{ ...containerStyle, minHeight: '100vh' }}>
      <header>
        <h1>IRCTC Train History</h1>
      </header>
      <article>
        <p>
          The Indian Railways, operated by the Indian Railway Catering and Tourism Corporation (IRCTC),
          has a rich and fascinating history that dates back to the 19th century. The inception of
          the railway system in India marked a significant milestone in the country's transportation
          and connectivity.
        </p>
        <p>
          Over the years, the IRCTC has played a crucial role in providing efficient and reliable
          train services to millions of passengers across the country. From the steam locomotives
          of the early days to the high-speed trains of today, the evolution of Indian Railways is
          a testament to progress and development.
        </p>
        <p>
          Indian Railways is one of the world's largest railway networks, covering vast distances
          and connecting diverse regions. The network has not only facilitated transportation but
          also contributed significantly to the socio-economic development of the nation.
        </p>
        <p>
          The Indian Railway Catering and Tourism Corporation (IRCTC) stands as a pivotal entity within
          the extensive network of Indian Railways. Established with the mission of enhancing the travel
          experience for millions, IRCTC serves as the primary platform for railway ticketing, catering,
          and tourism services in India. It plays a crucial role in streamlining ticket reservations,
          offering a user-friendly online booking system, and managing various aspects of passenger services.
          Beyond ticketing, IRCTC is renowned for its catering services, providing an array of culinary
          options to railway passengers. The corporation has also ventured into promoting tourism through
          package tours and special train services, showcasing the diverse cultural and scenic landscapes of
          the country. As an integral part of India's railway ecosystem, IRCTC continues to contribute significantly
          to the efficiency and convenience of rail travel for millions of people.
        </p>
      </article>
      <img src={historyImage} alt="IRCTC Train History" style={imageStyle} />
    </div>
  );
};

export default History;

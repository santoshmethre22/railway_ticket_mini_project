import React from 'react';
//import irctcImage from '../images/cat.avif';
import vandeBharatImage from '../images/vande.jpg';

const About = () => {
  const containerStyle = {
    backgroundColor: '#3498db', // Blue background color
    color: '#ffffff', // White text color
    padding: '20px',
    borderRadius: '10px', // Optional: Add border-radius for rounded corners
    textAlign: 'left', // Left align content
    fontFamily: 'Times New Roman', // Times New Roman font
  };

  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const imageStyle = {
    maxWidth: '100%',
    marginBottom: '20px',
  };

  const aboutUsStyle = {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Adding shadow to text
  };

  return (
    <div className="container-fluid" style={containerStyle}>
      <header>
        <h5 style={aboutUsStyle}>About Us</h5>
        <strong style={aboutUsStyle}>Indian Railway Catering and Tourism Corporation (IRCTC)</strong>
      </header>
      <section>
        <p>
          The Indian Railway Catering and Tourism Corporation (IRCTC) is a subsidiary of Indian Railways
          that has been instrumental in revolutionizing the way people travel in India. Established with
          the aim of providing seamless services, IRCTC is the go-to platform for railway ticketing,
          catering, and tourism needs. With a commitment to efficiency and customer satisfaction,
          IRCTC has consistently evolved to meet the diverse demands of passengers.
        </p>
        <p>
          IRCTC offers a range of facilities, including easy online ticket booking, catering services on
          trains, and various tourism packages. The online platform ensures convenient access to train
          schedules, availability, and booking, making travel planning a breeze. The catering services
          onboard guarantee a delightful culinary experience for passengers, enhancing the overall journey.
        </p>
      </section>
      <section>
        <strong style={aboutUsStyle}>Vande Bharat</strong>
        <p>
          A notable addition to the Indian Railways' fleet is the indigenously developed high-speed train,
          Vande Bharat Express. Launched with the vision of transforming rail travel, Vande Bharat is
          characterized by its modern amenities, speed, and energy efficiency. This state-of-the-art train
          symbolizes India's prowess in railway technology and is a source of pride for the nation.
        </p>
        <p>
          Vande Bharat aims to provide passengers with a comfortable and swift journey, embodying the
          spirit of progress and innovation in the realm of Indian Railways. The introduction of Vande
          Bharat reflects IRCTC's commitment to embracing advancements in rail transportation for the
          benefit of passengers across the country.
        </p>
      </section>
      <div className="row">
        <div className="col-md-6">
          <div style={imageContainerStyle}>
            <img src={vandeBharatImage} alt="Vande Bharat" style={imageStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

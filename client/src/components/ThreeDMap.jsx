import React from 'react';

const ThreeDMap = () => {
    return (
        <div className="satellite-map-container" style={{
            width: '100%',
            height: '100%',
            minHeight: '600px',
            borderRadius: '24px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
            border: '2px solid #ffffff'
        }}>
            {/* Overlay Branding */}
            <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                zIndex: 10,
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                padding: '15px 25px',
                borderRadius: '15px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px'
            }}>
                <h4 style={{ margin: 0, color: '#0d1b2a', fontWeight: 800, fontSize: '1.1rem' }}>
                    <i className="bi bi-geo-alt-fill me-2" style={{ color: '#ff1493' }}></i>
                    Techackode Pvt Ltd
                </h4>
                <p style={{ margin: 0, color: '#555', fontSize: '0.8rem', fontWeight: 600 }}>
                    Official Headquarters • Satellite View
                </p>
            </div>

            {/* Satellite Action Controls */}
            <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '25px',
                zIndex: 10,
                display: 'flex',
                gap: '10px'
            }}>
                <a
                    href="https://www.google.com/maps/dir//Techackode+Pvt+Ltd,+Moolakadai,+Chennai,+Tamil+Nadu+600060/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        background: '#3b8ef3',
                        color: 'white',
                        padding: '12px 25px',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        boxShadow: '0 10px 20px rgba(59, 142, 243, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'transform 0.3s'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'translateY(-3px)'}
                    onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                >
                    <i className="bi bi-cursor-fill"></i> Get Directions
                </a>
            </div>

            {/* Google Maps Satellite View - Full Screen */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.4792325979724!2d80.2407946757248!3d13.132143111336893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52655266d9b299%3A0x75c60d709cc3693!2sTechackode%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1769370354722!5m2!1sen!2sin&maptype=satellite"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '600px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Techackode Satellite HQ View"
            ></iframe>
        </div>
    );
};

export default ThreeDMap;

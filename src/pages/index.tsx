import Footer from '../components/shared/Footer';
import React from 'react';
import NavBar from '../components/shared/NavBar';

export default function Home() {
  return (
    <>
      <NavBar />
      <div>
        <p style={{ color: 'white' }}>
          Hola esto es el home, que felicidad me da vivir. Viva Cristo Rey.
          Saludos a todos por alla. Bendiciones!
        </p>
      </div>
      <Footer />
    </>
  );
}

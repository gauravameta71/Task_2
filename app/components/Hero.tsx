import React from 'react'
import styles from "../styles/style.module.scss";
import Image from 'next/image';


const Hero = () => {
  return (
    <>
      {/* <section className={styles.f_container}> */}

      <div className="relative w-screen p-[1px]">
        <img
          src="/assets/hero2.jpg"
          alt="Hero image"
          className="w-full h-auto md:h-[200px] lg:h-[400px] xl:h-[600px] opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <p className="text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold">
            Building Bright Minds for a Better Tomorrow.
          </p>
          <p className="mt-2 text-sm md:text-base lg:text-base xl:text-base">
            Inspiring education with a commitment to excellence in learning.
          </p>
          <div className="flex mt-4">
            <button className="mr-2 bg-white hover:bg-blue-600 text-black font-bold py-2 px-4 rounded">
              Login
            </button>
            <button className="bg-gray-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Register
            </button>
          </div>
        </div>
      </div>

      {/*        
      </section> */}
      {/* 
      <div className="box-border">
        <div className={`flex flex-col md:flex-row ${styles.row}`}>
          <div className={`mb-4 md:mb-0 ${styles.column}`}>
            
          </div>
          
        </div>
      </div> */}
    </>
  );
}

export default Hero
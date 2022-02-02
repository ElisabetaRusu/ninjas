import Head from 'next/head'

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1>About</h1>
        <p>Hi!           
          <br/> My name is Elisabeta!           
          <br/> I have 23 years and my birthday is in 8 March.
          <br/> I'm a junior programmer with less than a year experience. My skills are HTML, CSS, JavaScript, ReactJS. 
        </p>
        <p>On this website I will show my skills using NextJS!</p>
        <p className='bold-text'>Enjoy!</p>
      </div>
    </>
  );
}
 
export default About;
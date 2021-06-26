import TextAbout from '../components/textAbout'
import Video from '../video/Spot-Publicitario.mp4'
import Preload from '../images/preload-cientonce.jpeg'

const About = () => {
  return (
    <section className="section_video py-5">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-md-6">
            <article>
              <video className="embed-responsive embed-responsive-16by9" src={Video} width="560" height="315" controls poster={Preload}></video>
            </article>
          </div>
          <div className="col-md-5">
            <article >
              <TextAbout />
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About;

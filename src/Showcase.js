import Aliza from './photo2.png';
import Photo from './photo1.png';

const Showcase = () => {
    return (
        <div className="showcase">
            <div className="info">
                <h1>Modern interior</h1>
                <p>A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services.</p>
                <h4>Read more</h4>            
            </div>
            <div className="image-wrapper">
                <img src={Photo} alt="interior decor" id="img1"/>
                <div className="card">
                    <div className="designer">
                        <img src={Aliza} alt="Aliza Webber" id="img2"/>
                        <div className="details">
                            <h6>Aliza Webber</h6>
                            <small>interior designer</small>
                        </div>
                    </div>
                    <h3>Designed in 2020 by Aliza Webber</h3>
                </div>
            </div>
        </div>
    );
}
 
export default Showcase

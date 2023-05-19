
import 'bootstrap/dist/css/bootstrap.min.css';



import Carousel from 'react-bootstrap/Carousel';
import { bannerData } from './constants/bannerData';

export default function Banner() {
  return (
    <Carousel>
        {
            bannerData.map(data=>(
                <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={data.url}
                  alt={data.id}
                />
              </Carousel.Item>
            ))
        }


    </Carousel>
  );
}


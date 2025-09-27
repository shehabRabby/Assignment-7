
import Container from "./Container";
import leftImg from '../assets/left.png';
import rightImg from '../assets/right.png';

const Box = ({pickCard, resolved}) => {
  return (
    <div className="bg-gray-100 p-3">
    <Container>
          <div className="flex justify-between gap-8">
            <div className=" box1-bg-linearColor box_style">
              <div><img src={rightImg} className="box_bg_image1_style" alt="left image" /></div>
              <div className="inProgress_Resolve">
                <h1 className="text-2xl mb-3">In Progress</h1>
                <span className="text-5xl font-semibold">{pickCard.length}</span>
              </div>
            <div><img src={leftImg} className="box_bg_image2_style" alt="right image" /></div>
            </div>

            <div className="box2-bg-linearColor box_style">
                <div><img src={rightImg} className="box_bg_image1_style" alt="right image" /></div>
                <div className="inProgress_Resolve">
                  <h1 className="text-2xl mb-3">Resolved</h1>
                  <span className="text-5xl font-semibold">{resolved.length}</span> 
                </div>
              <div><img src={leftImg} className="box_bg_image2_style" alt="left image" /></div>
            </div>
          </div> 
    </Container>
    </div>
  );
};

export default Box;

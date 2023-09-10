import { useRef ,useEffect} from "react";



const SetAttribute = () => {
  const myImg = useRef();

  useEffect(() => {
    myImg.current.src =
      "https://www.cnet.com/a/img/resize/88b1282ef7551d03cc9fd9b349a5dda5b1d25bda/hub/2023/05/25/6d9b76a8-a8ba-49b9-9482-408ad44f0748/galaxy-a54-pixel-6a-7a-4.jpg?auto=webp&fit=crop&height=1200&width=1200";
    myImg.current.setAttribute("width", "300px");
    myImg.current.setAttribute("height", "200px");
  });

  return (
    <>
      <img
        ref={myImg}
        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Pixel_Flag_of_Canada.png"
        alt="" />    
    </>
  );
};

export default SetAttribute;







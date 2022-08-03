import "./testimonials.scss";

function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Gabriel C",
      title: "CEO på Dreamify",
      img: "assets/gbr-D.png",
      icon: "assets/linkedin.png",
      desc: "Miyeser gjorde sin praktik hos oss på Dreamify och jag var nöjd med både hennes insats och kompetens",
    },
    {
      id: 2,
      name: "Elux Yilisuya",
      title: "CEO of Lovalot",
      img: "assets/112.png",
      icon: "assets/linkedin.png",
      desc: "Miyesier Kaerman is a dedicated and fun person to work with. She’s punctual and deliver task within the time frame. More over, she’s curious person with multi talents and always thinks outside the box. ",
      featured: true,
    },
    {
      id: 3,
      name: "",
      title: "",
      img: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;

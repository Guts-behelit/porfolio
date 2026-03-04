import styles from './proyects.module.css';
import SectionBox from './sectionBox';

export default function Proyects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Modern online store with dynamic rendering and optimized performance.",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a"
    },
    {
      title: "Clinic Management System",
      description:
        "Full backend architecture with role-based access and REST API.",
      image:
        "https://i.pinimg.com/736x/e4/fe/7a/e4fe7ae2ff5f978205de73576e6a8852.jpg"
    },
    {
      title: "Sports Booking App",
      description:
        "Reservation platform with scalable architecture and clean UI.",
      image:
        "https://i.pinimg.com/736x/32/79/11/3279111787c3dc0a51ba3ad05aa7ebde.jpg"
    }
  ];
  return (
    <SectionBox>
      <h2 className={styles["projects-title"]}>My Projects</h2>
      <div className={styles["projects-grid"]}>
        {projects.map((project, index) => (
          <div className={styles["project-card"]} key={index}>
            <div
              className={styles["project-image"]}
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>

            <div className={styles["project-content"]}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className={styles["project-button"]}>View Project</button>
            </div>
          </div>
        ))}
      </div>
    </SectionBox>
  )
}

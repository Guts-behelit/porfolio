import styles from './pasarelaProyects.module.css';
import SectionBox from './sectionBox';

export default function PasarelaProyects() {
  const urlProjects = ["https://i.pinimg.com/1200x/92/28/08/922808a27e2ba7766773d798334f67a8.jpg","https://i.pinimg.com/1200x/12/00/0d/12000dc94f5ac4f32695e4777a857f59.jpg",
    "https://i.pinimg.com/736x/81/60/1f/81601f7315861606ec0d53b6679b4362.jpg",
    "https://i.pinimg.com/1200x/2a/d3/32/2ad332bfe1e52ea8f1264370381a3a7d.jpg"
  ]
  return (
    <SectionBox>
      <h2 className={styles["subtitle"]}>Proyectos Destacados</h2>
      <div className={styles["pasarela-proyects-container"]}>
        {urlProjects.map((url, index) => (<Polygon key={index} url={url} />))}
      </div>
    </SectionBox>
  )
}

const Polygon = ({ url }:{url:string}) => {
  return (
    <div className={styles["card"]}>
      <img src={url} alt="" />
      <div className={styles["overlay"]}>
        <h2>Título</h2>
      </div>
    </div>
  )
}
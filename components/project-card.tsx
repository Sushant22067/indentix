import Link from "next/link";
export function ProjectCard({project,index=0}:{project:any;index?:number}){
 return <article className={`work-card ${index%2?"offset":""}`}>
  <Link href={`/work/${project.slug}`} className={`work-art art-${project.tone}`}>
   <span className="art-index">0{index+1} / SELECTED WORK</span><div className="art-browser"><div className="browser-top"><i/><i/><i/><span>{project.name.toLowerCase()}.studio</span></div><div className="browser-body"><small>{project.note}</small><strong>{project.line.split("\n").map((x:string)=><span key={x}>{x}</span>)}</strong><em>{project.name.toUpperCase()}</em></div></div><span className="art-arrow">↗</span>
  </Link>
  <div className="work-meta"><div><span>{project.type}</span><h3><Link href={`/work/${project.slug}`}>{project.name}</Link></h3></div><Link href={`/work/${project.slug}`} className="round-arrow" aria-label={`View ${project.name}`}>↗</Link></div>
  <p>{project.description}</p>
 </article>
}

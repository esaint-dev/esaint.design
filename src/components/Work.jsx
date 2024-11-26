/**
 * @copyright 2024 esaintmjay
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";


const works = [
    {
      imgSrc: '/work/cozy.jpg',
      title: 'Cozy flyer',
      tags: ['CLUB', 'LOUNGE', 'PARTY'],
      
    },
    {
      imgSrc: '/work/barbie.jpg',
      title: 'Barbie flyer',
      tags: ['CLUB', 'LOUNGE', 'PARTY'],
    },
    {
      imgSrc: '/work/Cruise.jpg',
      title: 'Cruise flyer',
      tags: ['CLUB', 'LOUNGE', 'PARTY'],
    },
    {
      imgSrc: '/work/unboxing.jpg',
      title: 'Unboxing night',
      tags: ['CLUB', 'LOUNGE', 'PARTY'],
    },
    {
      imgSrc: '/work/Birthday.jpg',
      title: 'BLW Birthday',
      tags: ['Birthday', 'Celebration'],
    },
    {
      imgSrc: '/work/Ladies-Night.jpg',
      title: 'Ladies Night',
      tags: ['Ladies Night', 'Celebration'],
    },
    {
      imgSrc: '/work/Ladies.jpg',
      title: 'Ladies Night',
      tags: ['Ladies Night', 'Party']
    },
    {
      imgSrc: '/work/prayers.jpg',
      title: 'Prayer flyer',
      tags: ['Church', 'Prayer']
    },
    {
      imgSrc: '/work/Night-27.jpg',
      title: 'Ladies Night',
      tags: ['Ladies Night', 'Party']
    }
  ];




const Work = () => {
  return (
    <section 
        id="work"
        className="section"
    >
        <div className="container">

            <h2 className="headline-2 mb-8 reveal-up ">

            My portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink}, key) => (
                    <ProjectCard
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                     />
                ))}
            </div>

        </div>

    </section>
  )
}

export default Work
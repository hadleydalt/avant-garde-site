import '../App.css'
import { ProjectPreview } from './ProjectPreview'

export const ProjectPreviews = () => {

    const tags = ["Hey", "Hi", "Yo", "Hiii"]
    const text = "apofkesfklsekdfj IERIDJ kdfjdkf apofkesfklsekdfj kdjfk apofkesfklsekdfj adjfaksdjflkdsjf apofkesfklsekdfj a dkjfkdjf df apofkesfklsekdfj kdfjk dkf a dkf apofkesfklsekdfj" 

  return (
    <>
    <div className="spacer" />
    <div className="page-title">
      Projects
      <x>Projects</x>
      <y>Projects</y>
    </div>
        <ProjectPreview imgPath="paint2" tags={tags} text={text} title="Title" />
        <ProjectPreview imgPath="paint2" tags={tags} text={text} title="Title" />
        <ProjectPreview imgPath="paint2" tags={tags} text={text} title="Title" />
    </>
  )
}
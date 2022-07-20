import '../App.css'
import { ProjectPreview } from './ProjectPreview'

export const ProjectPreviews = () => {

    const dashTags = ["React", "TypeScript", "Frontend", "User Research", "UI/UX"]
    const text = "apofkesfklsekdfj IERIDJ kdfjdkf apofkesfklsekdfj kdjfk apofkesfklsekdfj adjfaksdjflkdsjf apofkesfklsekdfj a dkjfkdjf df apofkesfklsekdfj kdfjk dkf a dkf apofkesfklsekdfj" 

    const petGardenTags = ["Java", "JavaFX", "OOP", "User Research"]
    const petGardenText = "apofkesfklsekdfj IERIDJ kdfjdkf apofkesfklsekdfj kdjfk apofkesfklsekdfj adjfaksdjflkdsjf apofkesfklsekdfj a dkjfkdjf df apofkesfklsekdfj kdfjk dkf a dkf apofkesfklsekdfj" 

    const bostonTags = ["Figma", "Prototyping", "Identity System", "Competitive Analysis", "User Research", "UI/UX"]
    const bostonText = "apofkesfklsekdfj IERIDJ kdfjdkf apofkesfklsekdfj kdjfk apofkesfklsekdfj adjfaksdjflkdsjf apofkesfklsekdfj a dkjfkdjf df apofkesfklsekdfj kdfjk dkf a dkf apofkesfklsekdfj" 

    const somaTags = ["React", "JavaScript", "Full Stack Development", "Frontend"]
    const somaText = "apofkesfklsekdfj IERIDJ kdfjdkf apofkesfklsekdfj kdjfk apofkesfklsekdfj adjfaksdjflkdsjf apofkesfklsekdfj a dkjfkdjf df apofkesfklsekdfj kdfjk dkf a dkf apofkesfklsekdfj" 

    const ygmTags = ["Identity System", "Branding", "User Research", "UI/UX"]
    const ygmText = "apofkesfklsekdfj IERIDJ kdfjdkf apofkesfklsekdfj kdjfk apofkesfklsekdfj adjfaksdjflkdsjf apofkesfklsekdfj a dkjfkdjf df apofkesfklsekdfj kdfjk dkf a dkf apofkesfklsekdfj" 

    const miscTags = ["Hey", "Hi", "Yo", "Hiii"]
    const miscText = "apofkesfklsekdfj IERIDJ kdfjdkf apofkesfklsekdfj kdjfk apofkesfklsekdfj adjfaksdjflkdsjf apofkesfklsekdfj a dkjfkdjf df apofkesfklsekdfj kdfjk dkf a dkf apofkesfklsekdfj" 

  return (
    <>
    <div className="spacer" />
    <div className="page-title">
      Projects
      <x>Projects</x>
      <y>Projects</y>
    </div>
        <ProjectPreview imgPath="dash cover" tags={dashTags} text={text} title="Dash: Web App Redesign" />
        <ProjectPreview imgPath="petgarden_3" tags={petGardenTags} text={text} title="Pet Garden: Original Game" />
        <ProjectPreview imgPath="bostai cover" tags={bostonTags} text={text} title="Identity and Web Design for Boston AI Labs" />
        <ProjectPreview imgPath="soma" tags={somaTags} text={text} title="Soma: The App" />
    </>
  )
}
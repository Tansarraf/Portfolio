import { OrbitingCircles } from "../components/Orbiting"
export function Frameworks() {
  const skills = [
    { name: "cplusplus", ext: "svg" },
    { name: "css3", ext: "svg" },
    { name: "git", ext: "svg" },
    { name: "html5", ext: "svg" },
    { name: "javascript", ext: "svg" },
    { name: "mongo", ext: "svg" },
    { name: "node", ext: "svg" },
    { name: "react", ext: "svg" },
    { name: "stripe", ext: "svg" },
    { name: "tailwindcss", ext: "svg" },
    { name: "java", ext: "png" },
    { name: "python", ext: "png" },
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill.name}.${skill.ext}`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill.name}.${skill.ext}`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);

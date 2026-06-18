import ReactTodo from "/src/assets/todoApp_react.png"
import ReactWeatherApp from "/src/assets/WeatherApp_React.png"

type Project = {
    id: number;
    name: string;
    image: string;
    description: string;
    tech: string;
    liveUrl: string;
    repoUrl: string;
}

const ProjectReact: Project[] = [
    {
        id: 1,
        image: ReactTodo,
        name: "Todo List (React)",
        description: "A responsive Todo List built with React for adding, deleting, and marking tasks complete. Includes local storage support.",
        tech: "React , Tailwind CSS",
        liveUrl: "https://todo-app-react-khaki-eight.vercel.app/",
        repoUrl: "https://github.com/SagarSingh01/todo-app-react",
    },
    {
        id: 2,
        name: "Weather App (React)",
        image: ReactWeatherApp,
        description: "A modern weather app built with React and OpenWeather API to display real-time weather data with live cities Suggestions.",
        tech: "React , Tailwind CSS",
        liveUrl: "https://weather-app-six-bice-56.vercel.app/",
        repoUrl: "https://github.com/SagarSingh01/weather-app",
    },
];

export default ProjectReact;
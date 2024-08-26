import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: "master",
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

const useFetchProject = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const fetchEntries = async () => {
    try {
      let response = await client.getEntries({ content_type: "projects" });
      let project = response.items.map((item) => {
        const { projectTitle, projectUrl, projectImage } = item.fields;
        const id = item.sys.id;
        const img = projectImage?.fields?.file?.url;
        return { id, projectTitle, projectUrl, img };
      });
      setProjects(project);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching the entries:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchEntries();
  }, []);
  return { loading, projects };
};
export default useFetchProject;

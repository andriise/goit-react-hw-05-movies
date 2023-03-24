import HomeList from "./HomeList/HomeList";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getTrendingMovies } from "components/services/services";
const Home = () => {
	const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const location = useLocation();

    useEffect(() => {
      const getData = async () => {
        try {
          setLoading(true);
          const data = await getTrendingMovies();
          setData(data);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
      getData();
	}, []);
	
	return (
		<div>
			<h1>Trending Today</h1>
			<HomeList data={data} loading={loading} location={location} />

			
	</div>
)
}

export default Home;
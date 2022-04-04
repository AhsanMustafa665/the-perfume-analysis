import { useEffect, useState } from "react"

const usePerfumes = () => {
    const [perfumes, setPerfumes] = useState([]);
    console.log(perfumes);
    useEffect(() => {
        fetch('Review.json')
        .then(res => res.json())
        .then(data => setPerfumes(data))
    }, []);
    return [perfumes, setPerfumes];
}
export default usePerfumes;
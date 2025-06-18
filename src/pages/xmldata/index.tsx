import { useEffect, useState } from "react";

export default function XmlData() {
    const [xmlData, setXmlData] = useState<any>(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jobicy.com/?feed=job_feed');
            const data = await response.text();
            console.log(data);
        };
        fetchData().catch(console.error);
    }, []);
    
    return(
        <div>
            <h1>XML Data Page</h1>
            <p>This page is designed to handle XML data.</p>
        </div>
    );
}
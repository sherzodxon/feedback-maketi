import {
    useEffect,
    useMemo,
    useRef,
    useState
} from "react";
import Card from "../../components/card/card";
import Control from "../../components/control/control";
import Header from "../../components/header/header";
import Loader from "../../components/loader/loader";

import {
    useData
} from "../../contexts/data";

const Main = () => {
    const {
        posts,
        setPosts
    } = useData();
    
    const [loader, setloader] = useState(true);
    
    let headers = new Headers({
        "content-type": "application/json",
        "content-length": "58",
        "host": "demo.treblle.com",
        "user-agent": "PostmanRuntime/7.29.0",
        "x-amzn-trace-id": "Root=1-62c46a16-0d91bb66468361450e879fef",
        "x-forwarded-for": "202.78.37.207,3.84.75.77, 172.70.134.21",
        "x-forwarded-port": "443",
        "x-forwarded-proto": "https",
        "accept-encoding": "gzip",
        "authorization": "Bearer lsGPLl4k6Vc4J0VhnFaMBqetNtn1ofsB",
        "cdn-loop": "cloudflare",
        "cf-connecting-ip": "3.84.75.77",
        "cf-ipcountry": "US",
        "cf-ray": "72618eaf5a5c8f0e-IAD",
        "cf-visitor": "{\"scheme\":\"https\"}",
        "x-vapor-source-ip": "172.70 .134 .21"
    })
    
    useEffect(() => {
        if (!posts.currentUser.username) {

            fetch(`https://demo.treblle.com/api/v1/auth/login`, {
                    method: 'POST',
                    mode: 'cors',
                    body: JSON.stringify({
                        email: posts.currentUser.email,
                        password: posts.currentUser.password
                    }),
                    headers: headers,
                }).then((response) => {
                    return response.json()
                })
                .then((data) => {
                    if (data.status) {
                        const currentUser = {
                            image: './assets/user-images/image-zena.jpg',
                            username: data.user.name,
                            password: posts.currentUser.password,
                            email: posts.currentUser.email,
                        }
                        setPosts({
                            ...posts,
                            currentUser: {
                                ...currentUser
                            }
                        })
                        setloader(false)
                    }

                })
        } else {
           setloader(false)
        }
    }, [posts])
  
    if (loader) {
        return ( 
        <Loader />
        )
    }
   
    return (   
    <>
     <div className="container">
       <Control  />
       <main> 
      <Header />
       <div className="card-wrapper" >
       {posts && posts.productRequests.map((post)=> <Card title={post.title} text={post.description} like={post.upvotes} feature
       ={post.category} key={post.id} comment={post.comments} id={post.id} />)}
       </div> 
       </main>

     </div>
    </>
    );
}

export default Main;
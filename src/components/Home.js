const Home = () => {

    const title = 'Welcome to the new blog';
    const likes = 50;
    const person = {name:'yuwen',age:'10'};
    const link = "https://www.google.com/";
    const handleClick = (name) => {
      console.log('hello '+name);
    }


    return (
        <div>
            <h1>{ title }</h1>
            <p> Liked {likes} times</p>
            <p> Auther:{person.name}, Age: {person.age}</p>
            <p> {Math.random()*100}</p>
            <a href={link}>Google Site</a>
            <button onClick={()=>{handleClick('yuwen')}}>Click me</button>
        </div>
    );
}

export default Home;

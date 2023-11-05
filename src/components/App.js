function App() {

    const title = 'Welcome to the new blog';
    const likes = 50;
    const person = {name:'yuwen',age:'10'};
    const link = "https://www.google.com/";

    return (
        <div className="App">
            <div className="content">
                <h1>{ title }</h1>
                <p> Liked {likes} times</p>
                <p> Auther:{person.name}, Age: {person.age}</p>
                <p> {Math.random()*100}</p>
                <a href={link}>Google Site</a>
            </div>
        </div>
    );
}

export default App;

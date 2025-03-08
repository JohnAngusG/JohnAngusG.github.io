

const App = () => (
    <>
        <div className="navbar bg-base-100 shadow-sm">
            <a className="btn btn-ghost text-xl">John Mullaney</a>
        </div>
        <div className="hero bg-base-300 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hi, I'm John</h1>
                    <p className="py-6">
                        My experiences with game development, web development, and networking allow me to excel in any scenario. 
                        In my free time, I can usually be found reading, tinkering, and watching basketball.
                    </p>
                    
                </div>
            </div>
        </div>
        <div className="w-full max-w-screen-xl flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="card bg-base-300 w-96 shadow-sm">
            <figure>
                <img
                    src="images/lucky&zombie.png"
                    alt="Cartoon dog with cartoon zombie in the background. Don't worry, the dog can't get hurt." />
            </figure>
            <div className="card-body">
                <h2 className="card-title">DogPocalypse</h2>
                <p>You play as lucky and hide from zombies while collecting food for your human.</p>
                <div className="card-actions justify-end">
                    <a href="https://johnmullaney.tech/DogBuildWeb/" target="_blank" className="btn btn-primary">Play Now</a>
                    {/* <button className="btn btn-secondary">Thoughts</button> */}
                </div>
            </div>
        </div>
        <div className="card bg-base-300 w-96 shadow-sm">
            <figure>
                <img
                    src="images/tetrisFixed.png"
                    alt="Cartoon dog with cartoon zombie in the background. Don't worry, the dog can't get hurt." />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Tetris</h2>
                <p>Tetris written completely in C++ using SFML. Includes ability to see piece previews and instantly drop them.</p>
                <div className="card-actions justify-end">
                    <a href="https://github.com/JohnAngusG/Tetris" target="_blank" className="btn btn-primary">Play Now</a>
                    {/* <button className="btn btn-secondary">Thoughts</button> */}
                </div>
            </div>
        </div>
    </div>
    </>
)

export default App;
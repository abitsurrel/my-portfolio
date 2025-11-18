function Home({name}) {
    return (
        <div>
            <div className="bg-home"></div>
            <div className="intro top-16 w-full py-14 md:left-5 md:top-20 md:w-md lg:left-15 lg:top-25 lg:w-xl">
                <p className="mb-2 lg:mb-5">
                    Hi <span><img src="/src/assets/hand-waving.gif" className="w-8 inline lg:w-10"/></span><br/>
                    I am <i className="highlight">{name}</i>! <br/>
                    Welcome  to my <br/>
                    <i className="highlight">Personal Portfolio</i>!
                </p>
                <button className="btn-outline py-2 px-4 text-base lg:py-3 lg:px-6 lg:text-lg">See My Works</button>
            </div>
            <div className="intro flex justify-center items-center bottom-30 w-full md:right-5 md:top-20 md:w-md lg:right-15 lg:top-25 lg:w-xl">                
                <img src="/src/assets/sprite.jpeg" className="rounded-full w-[150px] md:w-[200px] lg:w-auto" />
            </div>
            <div className="absolute w-full text-center bottom-5 md:text-lg md:text-right md:right-5">
                This portfolio is hosted in<a className="highlight hover:text-white">Github Pages</a>
            </div>
        </div>        
    );
}

export default Home
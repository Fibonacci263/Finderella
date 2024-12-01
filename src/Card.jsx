import profilePic from "./profile.jpg"

function Card(){

    return(
        <div className = "Card">
            <img className= "card-image" src = {profilePic} alt ="Profile picture"></img>
            <h2>Black Badger</h2>
            <p>Alias: `The Midnight Stalker`, Motto: `Death is Swift, Silence is Eternal`</p>

        </div>
    



    );



}

export default Card
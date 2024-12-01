
function Button(){

    let count = 0;

    const handleClick =(name) => {
        if (count<3){
            count++;
            window.alert(`${name} you clicked me ${count} times/s`);
        }
        else{
            window.alert(`${name} stop Clicking me!`)
        }

    }
        
    return(
        <button className = "button" onClick={ () => handleClick('Bro')}>Submit</button>
    );
    
}


export default Button 
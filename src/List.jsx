

function List(){
    const fruits = [{id : 1, name: "apple", calories: 95}, 
        {id : 1, name: "orange" ,calories: 45},
        {id : 1, name: "banana", calories: 55},
         {id : 1,name: "coconut", calories: 85}, 
         {id : 1,name: "pineapple", calories: 67}];
    const listItems = fruits.map(fruit =>    <li key = {fruit.id}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b></li>);

    return(<ol>{listItems}</ol>); 

}

export default List 